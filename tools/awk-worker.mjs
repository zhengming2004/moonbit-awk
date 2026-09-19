import {spawn} from 'node:child_process';
import {parentPort,workerData} from 'node:worker_threads';
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

// Only command IO lives in this worker. File-only runs never create it.
const flags=new Int32Array(workerData.shared,0,3),bytes=new Uint8Array(workerData.shared,12);
const encoder=new TextEncoder(),readers=new Map(),writers=new Map();
function reply(response) {
  let encoded=encoder.encode(response);
  if(encoded.length>bytes.length)encoded=encoder.encode('!host response limit');
  bytes.set(encoded);Atomics.store(flags,1,encoded.length);Atomics.store(flags,0,1);Atomics.notify(flags,0);
}
async function close(name) {
  const input=readers.get(name),output=writers.get(name);
  readers.delete(name);writers.delete(name);
  if(input){input.source.close();return await input.process.exited;}
  if(output){
    try {if(!output.stream.destroyed)await new Promise((resolve,reject)=>output.stream.end(error=>error?reject(error):resolve()));} catch {}
    return await output.process.exited;
  }
  return -1;
}
async function dispatch(request) {
  const {op,name}=request;
  if(op==='open-reader'){
    const process=command(name,'read',workerData.shell);await process.ready();
    readers.set(name,{source:reader(process.child.stdout),process});return 'O';
  }
  if(op==='read-reader')return await readers.get(name).source.read();
  if(op==='open-writer'){
    const process=command(name,'write',workerData.shell),stream=process.child.stdin;
    stream.on('error',()=>{});await process.ready();
    const output={stream,process,failure:null};stream.on('error',error=>{output.failure=error;});
    writers.set(name,output);return 'O';
  }
  if(op==='write-writer'){
    const output=writers.get(name);if(output.failure)throw output.failure;
    await write(output.stream,request.text);return 'O';
  }
  if(op==='close')return 'S'+await close(name);
  if(op==='flush'){
    const targets=name===''?[...writers.values()]:[writers.get(name)];
    return targets.some(x=>x?.failure)?'S-1':'S0';
  }
  if(op==='system'){
    const process=command(request.command,'system',workerData.shell);await process.ready();
    return 'S'+await process.exited;
  }
  if(op==='shutdown'){
    for(const name of new Set([...readers.keys(),...writers.keys()]))await close(name);
    return 'O';
  }
  throw Error('unknown command operation');
}
parentPort.on('message',async request=>{
  let response;
  try {response=await dispatch(request);} catch(error){response='!'+String(error?.message||error);}
  reply(response);
});
