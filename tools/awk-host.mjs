import {createReadStream,createWriteStream} from 'node:fs';
import {spawn} from 'node:child_process';
import {Worker} from 'node:worker_threads';
import {once} from 'node:events';
import os from 'node:os';

async function write(stream,text) {
  if(stream.destroyed)throw Error('output stream is closed');
  await new Promise((resolve,reject)=>stream.write(text,error=>error?reject(error):resolve()));
}
function reader(stream,owned=true) {
  stream.setEncoding('utf8');
  let failure;
  stream.on('error',e=>{failure=e;});
  const iterator=stream.iterator({destroyOnReturn:false});
  let pending='';
  return {
    async read() {
      for (;;) {
        if(pending) {
          let end=Math.min(pending.length,65536);
          if(end<pending.length&&pending.charCodeAt(end-1)>=0xd800&&pending.charCodeAt(end-1)<=0xdbff)end--;
          const text=pending.slice(0,end);pending=pending.slice(end);return 'D'+text;
        }
        if(failure)throw failure;
        const next=await iterator.next();
        if(next.done)return 'E';
        pending=next.value;
      }
    },
    close() { if(owned)stream.destroy();pending=''; },
  };
}
function command(text,direction,shell='sh') {
  const cmd=/(?:^|[\\/])cmd(?:\.exe)?$/i.test(shell);
  const child=spawn(shell,cmd?['/c',text]:['-c',text],{
    windowsHide:true, stdio:direction==='read'?['inherit','pipe','inherit']:direction==='write'?['pipe','inherit','inherit']:'inherit',
  });
  let spawnError;
  const exited=new Promise(resolve=>{
    child.once('error',error=>{spawnError=error;resolve(-1);});
    child.once('exit',(code,signal)=>resolve(code??256+(os.constants.signals[signal]||0)));
  });
  return {child,exited,async ready(){await once(child,'spawn');if(spawnError)throw spawnError;}};
}

export async function runHost(config) {
  const shared=new SharedArrayBuffer(8+1024*1024),flags=new Int32Array(shared,0,2),bytes=new Uint8Array(shared,8);
  const worker=new Worker(new URL('./awk-worker.mjs',import.meta.url),{workerData:{config,shared}});
  const encoder=new TextEncoder(),readers=new Map(),writers=new Map();
  let main,stdinReader;
  function stdin() { return stdinReader??=reader(process.stdin,false); }
  async function fileReader(name) {
    if(name==='-')return stdin();
    const stream=createReadStream(name,{highWaterMark:65536});
    const source=reader(stream);await once(stream,'open');return source;
  }
  async function close(name) {
    const input=readers.get(name),output=writers.get(name);
    const protectedInput=input?.source===stdinReader;
    if(!protectedInput)readers.delete(name);
    writers.delete(name);
    if(input&&!protectedInput) {
      input.source.close();
      return input.process?await input.process.exited:0;
    }
    if(output) {
      if(output.null)return -1;
      let failed=false;
      try {
        if(!output.stream.destroyed)await new Promise((resolve,reject)=>output.stream.end(error=>error?reject(error):resolve()));
        else if(output.failure)failed=true;
      } catch {failed=true;}
      const code=output.process?await output.process.exited:0;
      return output.process?code:failed?-1:0;
    }
    return -1;
  }
  async function io(request) {
    const {op,name}=request;
    if(op==='open-reader') {
      let process,source;
      if(request.pipe) {
        process=command(name,'read',config.shell);
        try { await process.ready(); }
        catch(error) { await write(globalThis.process.stderr,String(error.message)+'\n'); return 'S-1'; }
        source=reader(process.child.stdout);
      } else source=await fileReader(name);
      readers.set(name,{source,process});return 'O';
    }
    if(op==='read-reader')return await readers.get(name).source.read();
    if(op==='open-writer') {
      let process,stream;
      if(request.mode==='|') {
        process=command(name,'write',config.shell);stream=process.child.stdin;
        // Install an error handler before awaiting child startup.
        stream.on('error',()=>{});
        try { await process.ready(); }
        catch(error) {
          await write(globalThis.process.stderr,String(error.message)+'\n');
          writers.set(name,{null:true});return 'O';
        }
      } else {
        stream=createWriteStream(name,{flags:request.mode==='>>'?'a':'w'});
        stream.on('error',()=>{});await once(stream,'open');
      }
      const output={stream,process,failure:null};stream.on('error',e=>{output.failure=e;});
      writers.set(name,output);return 'O';
    }
    if(op==='write-writer') {
      const output=writers.get(name);
      if(output?.null)return 'O';
      if(output?.failure)throw output.failure;
      await write(output?output.stream:name==='/dev/stderr'?process.stderr:process.stdout,request.text);return 'O';
    }
    if(op==='close')return 'S'+await close(name);
    if(op==='flush') {
      if(name!==''&&!writers.has(name)) {
        await write(process.stderr,`awk: error flushing ${JSON.stringify(name)}: not an output file or pipe\n`);return 'S-1';
      }
      const targets=name===''?[...writers.values()]:writers.has(name)?[writers.get(name)]:[];
      return targets.some(x=>x.failure)?'S-1':'S0';
    }
    if(op==='system') {
      const p=command(request.command,'system',config.shell);
      try { await p.ready(); }
      catch(error) { await write(process.stderr,String(error.message)+'\n'); return 'S-1'; }
      return 'S'+await p.exited;
    }
    throw Error('unknown IO request');
  }
  async function dispatch(action,value) {
    if(action==='open') { if(main&&main!==stdinReader)main.close();main=await fileReader(value);return 'O'; }
    if(action==='read')return await main.read();
    if(action==='close') { if(main&&main!==stdinReader)main.close();main=undefined;return 'O'; }
    if(action==='write') { await write(process.stdout,value);return 'O'; }
    if(action==='diagnostic'){await write(process.stderr,value);return 'O';}
    if(action==='io')return await io(JSON.parse(value));
    throw Error('unknown host operation');
  }
  try {
    return await new Promise((resolve,reject)=>{
      let done=false;
      worker.on('message',async message=>{
        if(message.done) {done=true;resolve(message.result);return;}
        let response;
        try {response=await dispatch(message.action,message.value);}
        catch(error){response='!'+String(error?.message||error);}
        let encoded=encoder.encode(response);
        if(encoded.length>bytes.length)encoded=encoder.encode('!host response limit');
        bytes.set(encoded);Atomics.store(flags,1,encoded.length);Atomics.store(flags,0,1);Atomics.notify(flags,0);
      });
      worker.once('error',reject);
      worker.once('exit',code=>{if(!done)reject(Error('AWK worker exited before completion: '+code));});
    });
  } finally {
    if(main&&main!==stdinReader)main.close();
    for(const name of new Set([...readers.keys(),...writers.keys()]))await close(name);
    if(stdinReader)process.stdin.destroy();
    await worker.terminate();
  }
}
