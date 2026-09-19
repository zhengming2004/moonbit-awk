import {openSync,readSync,writeSync,closeSync} from 'node:fs';
import {StringDecoder} from 'node:string_decoder';
import {Worker} from 'node:worker_threads';
import {host_run_json} from '../web/engine.mjs';
import {bufferedHost} from './awk-buffered.mjs';

// Bootstrap is inline so even a missing/invalid command module can wake the
// synchronous caller. The third shared word permanently marks a failed worker.
function commandBootstrap() {
  const {workerData,parentPort}=require('node:worker_threads');
  const flags=new Int32Array(workerData.shared,0,3),bytes=new Uint8Array(workerData.shared,12);
  function fail(message){
    if(Atomics.compareExchange(flags,2,0,1)!==0)return;
    const encoded=new TextEncoder().encode('!'+message).subarray(0,bytes.length);
    bytes.set(encoded);Atomics.store(flags,1,encoded.length);Atomics.store(flags,0,1);Atomics.notify(flags,0);
  }
  process.on('exit',()=>fail('command worker exited before responding'));
  process.on('uncaughtException',error=>{fail(String(error?.message||error));process.exit(1);});
  import(workerData.entry).catch(error=>{fail(String(error?.message||error));parentPort.close();});
}

// Blocking OS writes naturally apply backpressure without retaining whole output.
const waitWord=new Int32Array(new SharedArrayBuffer(4));
function retryIO(operation) {
  for(;;){
    try{return operation();}catch(error){
      if(error.code==='EINTR')continue;
      if(error.code!=='EAGAIN'&&error.code!=='EWOULDBLOCK')throw error;
      Atomics.wait(waitWord,0,0,10);
    }
  }
}
function write(fd,text) {
  const bytes=Buffer.from(text);let offset=0;
  while(offset<bytes.length){
    const count=retryIO(()=>writeSync(fd,bytes,offset,bytes.length-offset));
    if(count===0)throw Error('output stream made no progress');
    offset+=count;
  }
}
function fileReader(name) {
  const fd=name==='-'?0:openSync(name,'r'),buffer=Buffer.allocUnsafe(65536),decoder=new StringDecoder('utf8');
  let ended=false,closed=false,pending='';
  return {
    fd,
    read(){
      for(;;){
        if(pending){
          let end=Math.min(pending.length,65536);
          if(end<pending.length&&pending.charCodeAt(end-1)>=0xd800&&pending.charCodeAt(end-1)<=0xdbff)end--;
          const text=pending.slice(0,end);pending=pending.slice(end);return 'D'+text;
        }
        if(ended)return 'E';
        const count=retryIO(()=>readSync(fd,buffer,0,buffer.length,null));
        if(count===0){ended=true;pending=decoder.end();}
        else pending=decoder.write(buffer.subarray(0,count));
      }
    },
    close(){if(fd!==0&&!closed){closed=true;closeSync(fd);}},
  };
}
export async function runHost(config) {
  const readers=new Map(),writers=new Map();
  let main,stdinReader,worker,flags,bytes,decoder;
  function source(name){return name==='-'?(stdinReader??=fileReader('-')):fileReader(name);}
  function command(request) {
    if(!worker){
      const shared=new SharedArrayBuffer(12+1024*1024);
      flags=new Int32Array(shared,0,3);bytes=new Uint8Array(shared,12);decoder=new TextDecoder();
      worker=new Worker('('+commandBootstrap.toString()+')()',{eval:true,workerData:{shell:config.shell,shared,entry:new URL('./awk-worker.mjs',import.meta.url).href}});
      worker.on('error',()=>{});
    }
    if(Atomics.load(flags,2)!==0)return '!command worker is unavailable';
    Atomics.store(flags,0,0);worker.postMessage(request);
    if(Atomics.load(flags,2)!==0)return '!command worker is unavailable';
    while(Atomics.load(flags,0)===0)Atomics.wait(flags,0,0);
    return decoder.decode(bytes.subarray(0,Atomics.load(flags,1)));
  }
  function close(name) {
    const input=readers.get(name),output=writers.get(name);
    const protectedInput=input?.file!==undefined&&input.file===stdinReader;
    if(!protectedInput)readers.delete(name);
    writers.delete(name);
    if(input&&!protectedInput){
      if(input.pipe)return command({op:'close',name});
      input.file.close();return 'S0';
    }
    if(output){
      if(output.null)return 'S-1';
      if(output.pipe)return command({op:'close',name});
      closeSync(output.fd);return 'S0';
    }
    return 'S-1';
  }
  function io(request) {
    const {op,name}=request;
    if(op==='open-reader'){
      if(request.pipe){
        const result=command(request);
        if(result!=='O'){write(2,result+'\n');return 'S-1';}
        readers.set(name,{pipe:true});
      }else readers.set(name,{file:source(name)});
      return 'O';
    }
    if(op==='read-reader'){
      const input=readers.get(name);return input.pipe?command(request):input.file.read();
    }
    if(op==='open-writer'){
      if(request.mode==='|'){
        const result=command(request);
        if(result!=='O'){write(2,result+'\n');writers.set(name,{null:true});}
        else writers.set(name,{pipe:true});
      }else writers.set(name,{fd:openSync(name,request.mode==='>>'?'a':'w')});
      return 'O';
    }
    if(op==='write-writer'){
      const output=writers.get(name);
      if(output?.null)return 'O';
      if(output?.pipe)return command(request);
      write(output?output.fd:name==='/dev/stderr'?2:1,request.text);return 'O';
    }
    if(op==='close')return close(name);
    if(op==='flush'){
      if(name!==''&&!writers.has(name)){
        write(2,`awk: error flushing ${JSON.stringify(name)}: not an output file or pipe\n`);return 'S-1';
      }
      return worker&&(name===''||writers.get(name)?.pipe)?command(request):'S0';
    }
    if(op==='system'){
      const result=command(request);
      if(result.startsWith('!')){write(2,result+'\n');return 'S-1';}
      return result;
    }
    throw Error('unknown IO request');
  }
  function request(action,value) {
    try{
      if(action==='open'){if(main)main.close();main=source(value);return 'O';}
      if(action==='read')return main.read();
      if(action==='close'){if(main)main.close();main=undefined;return 'O';}
      if(action==='write'){write(1,value);return 'O';}
      if(action==='diagnostic'){write(2,value);return 'O';}
      if(action==='io')return io(JSON.parse(value));
      throw Error('unknown host operation');
    }catch(error){return '!'+String(error?.message||error);}
  }
  const buffered=bufferedHost(request);
  try {
    const result=JSON.parse(host_run_json(JSON.stringify(config),buffered.host));
    const flushed=buffered.flushAll();
    if(flushed!=='O'&&result.ok){result.ok=false;result.error=flushed;}
    return result;
  } finally {
    if(main)main.close();
    for(const name of new Set([...readers.keys(),...writers.keys()])){try{close(name);}catch{}}
    if(worker){command({op:'shutdown'});await worker.terminate();}
  }
}
