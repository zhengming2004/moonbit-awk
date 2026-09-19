import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawn,spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {helperSource} from './io-cases.mjs';
import {shellEvidence} from './shell-evidence.mjs';
import {sourceHashes} from './evidence.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),cli=path.join(root,'tools/awk.mjs');
const folder=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-awk-bridge-')),shell=shellEvidence();
let checks=0;
try {
  fs.writeFileSync(path.join(folder,'helper.mjs'),helperSource);
  // A pending invalid UTF-8 lead byte followed by a full ASCII block decodes
  // to 65,537 UTF-16 units. The host must split it without violating the API.
  fs.writeFileSync(path.join(folder,'carry.txt'),Buffer.concat([Buffer.alloc(65535,97),Buffer.from([0xf0]),Buffer.alloc(65536,98)]));
  const carry=spawnSync(process.execPath,[cli,'{print length($0)}','carry.txt'],{cwd:folder,encoding:'utf8',windowsHide:true,timeout:10000});
  assert(!carry.error,String(carry.error));assert.equal(carry.status,0,carry.stderr);assert.equal(carry.stdout,'131072\n');checks++;
  await new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,[cli,'BEGIN{cmd="node helper.mjs copy 0";printf "ready>"|cmd;fflush(cmd);getline x;print x|cmd;print close(cmd)}'],{cwd:folder,windowsHide:true});
    let output='',error='',sent=false;
    const timer=setTimeout(()=>{child.kill();reject(Error('pipe prompt/main input deadlock'));},15000);
    child.stdout.setEncoding('utf8');child.stderr.setEncoding('utf8');
    child.stdout.on('data',text=>{output+=text;if(!sent&&output==='ready>'){sent=true;child.stdin.end('answer\n');}});
    child.stderr.on('data',text=>{error+=text;});child.on('error',reject);
    child.on('close',code=>{clearTimeout(timer);try{assert.equal(code,0,error);assert(sent);assert.equal(output,'ready>answer\n0\n');checks++;resolve();}catch(e){reject(e);}});
  });
  await new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,[cli,'BEGIN{cmd="node helper.mjs copy 0";for(i=0;i<180000;i++)print "abcdefghi"|cmd;close(cmd)}'],{cwd:folder,windowsHide:true});
    let length=0,error='';
    const timer=setTimeout(()=>{child.kill();reject(Error('command output backpressure timeout'));},30000);
    child.stdin.end();child.stderr.setEncoding('utf8');child.stderr.on('data',text=>{error+=text;});
    child.stdout.on('data',data=>{assert(/^[a-i\n]+$/.test(data.toString()));length+=data.length;child.stdout.pause();setTimeout(()=>child.stdout.resume(),3);});
    child.on('error',reject);
    child.on('close',code=>{clearTimeout(timer);try{assert.equal(code,0,error);assert.equal(length,1800000);checks++;resolve();}catch(e){reject(e);}});
  });
  // A damaged installation must report worker startup failure, not leave the
  // main thread blocked forever. Only an owned temporary copy is incomplete.
  const damaged=path.join(folder,'damaged');
  for(const name of ['tools/awk.mjs','tools/awk-host.mjs','tools/awk-buffered.mjs','web/engine.mjs']){
    const target=path.join(damaged,name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,name),target);
  }
  const failure=spawnSync(process.execPath,[path.join(damaged,'tools/awk.mjs'),'BEGIN{print system("echo unused")}'],{cwd:folder,encoding:'utf8',windowsHide:true,timeout:10000});
  assert(!failure.error,String(failure.error));assert.equal(failure.status,0);assert.equal(failure.stdout,'-1\n');assert(failure.stderr);checks++;
  fs.writeFileSync(new URL('../evidence/bridge-host.json',import.meta.url),JSON.stringify({utc:new Date().toISOString(),platform:process.platform,shell,checks,passed:checks,failed:0,sourceSha256:sourceHashes(),scope:'UTF-8 carry beyond chunk limit, interactive command with blocking main input, 1.8 MB slow command output consumer, and failed command-worker module startup'},null,2)+'\n');
  console.log(`${checks} bridge host checks passed`);
} finally {
  const target=path.resolve(folder);if(path.dirname(target)!==path.resolve(os.tmpdir())||!path.basename(target).startsWith('moonbit-awk-bridge-'))throw Error('unexpected temporary directory');
  fs.rmSync(target,{recursive:true,force:true});
}
