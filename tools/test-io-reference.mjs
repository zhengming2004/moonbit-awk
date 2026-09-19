import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sourceHashes,sha256} from './evidence.mjs';
import {ioCases as cases,ioFixtures as fixtures} from './io-cases.mjs';
import {shellEvidence,withoutShellPath} from './shell-evidence.mjs';
const shell=shellEvidence();
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
const folder=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-awk-io-'));
const golden=process.argv.includes('--golden');
let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-io-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);assert.deepEqual(saved.fixtures,fixtures);({references,version,binarySha256}=saved);}
else{const exe=process.env.GOAWK_REFERENCE;assert(exe,'Set GOAWK_REFERENCE');const info=spawnSync(exe,['-version'],{encoding:'utf8',windowsHide:true});assert.equal(info.status,0);version=info.stdout.trim();binarySha256=sha256(fs.readFileSync(exe));}
const summarizeText=text=>({length:Buffer.byteLength(text),sha256:sha256(text),text:text.length<=2000?text:null});
function execute(test,index,native){
  const cwd=path.join(folder,`${index}-${native?'reference':'current'}`);fs.mkdirSync(cwd);
  for(const [name,text] of Object.entries(fixtures))fs.writeFileSync(path.join(cwd,name),text);
  const r=spawnSync(native?process.env.GOAWK_REFERENCE:process.execPath,native?['-c','-N','raw',test.program]:[cli,test.program],{cwd,input:test.input,env:test.missingShell?withoutShellPath():process.env,encoding:'utf8',windowsHide:true,timeout:45000,maxBuffer:5*1024*1024});
  assert(!r.error&&!r.signal,String(r.error||r.signal));
  const files={};
  for(const name of fs.readdirSync(cwd).sort()) {
    const data=fs.readFileSync(path.join(cwd,name));
    if(fixtures[name]!==undefined&&data.equals(Buffer.from(fixtures[name])))continue;
    files[name]={length:data.length,sha256:sha256(data),text:data.length<=2000?data.toString():null};
  }
  return {status:r.status&255,nativeStatus:r.status,output:summarizeText(r.stdout),hasError:Boolean(r.stderr),files,stderr:r.stderr.slice(0,3000)};
}
const failures=[];
try{
  for(const [i,test] of cases.entries()){
    if(!golden)references.push(execute(test,i,true));
    const actual=execute(test,i,false),reference=references[i];
    const comparable=r=>({status:r.status,output:r.output,hasError:r.hasError,files:r.files});
    try{assert.deepEqual(comparable(actual),comparable(reference));}catch{failures.push({test,actual,reference});}
  }
  if(!golden)fs.writeFileSync(new URL('../evidence/awk-io-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,platform:process.platform,shell,options:['-c','-N','raw'],cases,fixtures,references},null,2)+'\n');
  const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,shell,total:cases.length,passed:cases.length-failures.length,failed:failures.length,sourceSha256:sourceHashes(),failures};
  fs.writeFileSync(new URL(`../evidence/awk-io-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
  console.log(`${report.passed}/${report.total} GoAWK file/pipe/system comparisons agree`);
  for(const failure of failures.slice(0,20))console.log(JSON.stringify(failure));if(failures.length)process.exitCode=1;
}finally{
  const target=path.resolve(folder);if(path.dirname(target)!==path.resolve(os.tmpdir())||!path.basename(target).startsWith('moonbit-awk-io-'))throw Error('unexpected fixture directory');
  fs.rmSync(target,{recursive:true,force:true});
}
