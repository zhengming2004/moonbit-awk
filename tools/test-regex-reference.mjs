import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {execute} from '../web/engine.mjs';
import {sourceHashes,sha256} from './evidence.mjs';
const cases=JSON.parse(fs.readFileSync(new URL('./regex-cases.json',import.meta.url),'utf8'));
const golden=process.argv.includes('--golden');
let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-regex-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);({references,version,binarySha256}=saved);}
else{assert(process.env.GOAWK_REFERENCE);const r=spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true,timeout:5000});assert.equal(r.status,0);version=r.stdout.trim();binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));}
const failures=[];
for(const [i,test] of cases.entries()){
  if(!golden){
    const r=spawnSync(process.env.GOAWK_REFERENCE,['-c','-N','raw','-F',test.separator,test.program],{input:test.input,encoding:'utf8',windowsHide:true,timeout:15000,maxBuffer:5000000});
    assert(!r.error&&!r.signal,String(r.error||r.signal));references.push({output:r.stdout,status:r.status,error:r.stderr});
  }
  const raw=execute(test.program,test.input,test.separator);
  const actual=raw.startsWith('ERROR:')?{error:raw}:JSON.parse(raw),reference=references[i];
  if(test.kind==='fold'){
    const first=cases.filter(c=>c.kind==='fold').indexOf(test)*200;
    const rows=reference.output.trimEnd().split('\n');
    assert.equal(reference.status,0);
    assert.equal(rows.length,test.input.trimEnd().split('\n').length);
    for(const [j,row] of rows.entries())if((first+j)%3!==2)assert.equal(row,'1 0 1 1','native must accept every generated fold-orbit pair');
  }
  const same=test.error?Boolean(actual.error)&&reference.status!==0:!actual.error&&reference.status===0&&actual.output===reference.output&&actual.exit_status===reference.status;
  if(!same)failures.push({id:test.id,kind:test.kind,property:test.property,actual,reference});
  if((i+1)%100===0)console.log(`regex comparisons ${i+1}/${cases.length}, failures ${failures.length}`);
}
if(!golden)fs.writeFileSync(new URL('../evidence/awk-regex-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,options:['-c','-N','raw'],cases,references},null,2)+'\n');
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,checks:cases.reduce((a,t)=>a+(t.checks||1),0),sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/awk-regex-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} regex programs agree (${report.checks} observations)`);
for(const f of failures.slice(0,12))console.log(JSON.stringify(f).slice(0,1600));
if(failures.length)process.exitCode=1;
