import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {execute} from '../web/engine.mjs';
import {stringCases as cases} from './string-cases.mjs';
import {sourceHashes,sha256} from './evidence.mjs';
const golden=process.argv.includes('--golden');let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-string-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);({references,version,binarySha256}=saved);}
else{assert(process.env.GOAWK_REFERENCE);const r=spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true});assert.equal(r.status,0);version=r.stdout.trim();binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));}
const failures=[];
for(const [i,test] of cases.entries()){
  if(!golden){const r=spawnSync(process.env.GOAWK_REFERENCE,['-c','-N','raw','-F',test.separator,test.program],{input:test.input,encoding:'utf8',windowsHide:true,timeout:10000,maxBuffer:2000000});assert(!r.error&&!r.signal,String(r.error||r.signal));references.push({output:r.stdout,status:r.status,error:r.stderr});}
  const raw=execute(test.program,test.input,test.separator),actual=raw.startsWith('ERROR:')?{error:raw}:JSON.parse(raw),reference=references[i];
  if(!(test.error?actual.error&&reference.status!==0:!actual.error&&reference.status===0&&actual.output===reference.output&&actual.exit_status===reference.status))failures.push({test,actual,reference});
}
if(!golden)fs.writeFileSync(new URL('../evidence/awk-string-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,cases,references},null,2)+'\n');
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/awk-string-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} Unicode string context programs agree`);
for(const f of failures)console.log(JSON.stringify(f));if(failures.length)process.exitCode=1;
