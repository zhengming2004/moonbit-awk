import {workerData, parentPort} from 'node:worker_threads';
import {host_run_json} from '../web/engine.mjs';
const flags = new Int32Array(workerData.shared, 0, 2);
const bytes = new Uint8Array(workerData.shared, 8), decoder = new TextDecoder();
function request(action, value) {
  Atomics.store(flags,0,0);
  parentPort.postMessage({action,value});
  while (Atomics.load(flags,0) === 0) Atomics.wait(flags,0,0);
  return decoder.decode(bytes.subarray(0,Atomics.load(flags,1)));
}
const buffers = new Map();
function buffered(name, text) {
  let b = buffers.get(name);
  if (!b) { b={parts:[],size:0}; buffers.set(name,b); }
  b.parts.push(text); b.size += Buffer.byteLength(text);
  return b.size >= 65536 ? flush(name) : 'O';
}
function flush(name) {
  const b = buffers.get(name);
  if (!b || !b.size) return 'O';
  const text=b.parts.join(''); b.parts=[]; b.size=0;
  return name === null ? request('write',text) : request('io',JSON.stringify({op:'write-writer',name,text}));
}
function flushAll() {
  let result='O';
  for (const name of buffers.keys()) { const r=flush(name); if(r!=='O')result=r; }
  return result;
}
function host(action, value) {
  if (action === 'write') return buffered(null,value);
  if (action === 'read' || action === 'open') { const r=flush(null); if(r!=='O')return r; }
  if (action === 'io') {
    const io=JSON.parse(value);
    if(io.op==='write-writer') {
      // stderr aliases are not persistent named streams in GoAWK.
      if(io.name==='/dev/stderr'&&!buffers.has(io.name))return request(action,value);
      return buffered(io.name,io.text);
    }
    if(io.op==='open-writer'||io.op==='open-reader'&&io.pipe) {
      const r=flush(null); if(r!=='O')return r;
    }
    if(io.op==='flush'||io.op==='system') {
      const r=io.op==='system'||io.name==='' ? flushAll() : flush(io.name);
      if(r!=='O'&&io.op==='flush')return 'S-1';
    }
    if(io.op==='close') {
      const pipe=buffers.get(io.name)?.pipe;
      const flushed=flush(io.name);
      buffers.delete(io.name);
      const result=request(action,value);
      if(flushed!=='O')request('diagnostic','error closing '+JSON.stringify(io.name)+': '+flushed+'\n');
      return flushed!=='O'&&result==='S0'&&!pipe ? 'S-1' : result;
    }
    const result=request(action,value);
    if(io.op==='open-writer'&&result==='O')buffers.set(io.name,{parts:[],size:0,pipe:io.mode==='|'});
    return result;
  }
  return request(action,value);
}
try {
  const result=JSON.parse(host_run_json(JSON.stringify(workerData.config),host));
  const flushed=flushAll();
  if(flushed!=='O'&&result.ok) { result.ok=false;result.error=flushed; }
  parentPort.postMessage({done:true,result});
} catch(error) {
  try { flushAll(); } catch {}
  parentPort.postMessage({done:true,result:{ok:false,error:String(error?.message||error)}});
}
parentPort.close();
