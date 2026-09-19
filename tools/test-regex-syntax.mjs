import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {execute} from '../web/engine.mjs';
import {sourceHashes, sha256} from './evidence.mjs';
import {regexSyntaxCases as cases} from './regex-syntax-cases.mjs';
const golden = process.argv.includes('--golden');
const file = new URL('../evidence/regex-syntax-vectors.json', import.meta.url);
let references = [], version, binarySha256;
if (golden) {
  const saved = JSON.parse(fs.readFileSync(file,'utf8'));
  assert.deepEqual(saved.cases,cases);
  ({references,version,binarySha256}=saved);
} else {
  assert(process.env.GOAWK_REFERENCE,'Set GOAWK_REFERENCE');
  const r = spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true,timeout:5000});
  assert.equal(r.status,0);version=r.stdout.trim();
  binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));
}
const failures=[];
for (const [i,test] of cases.entries()) {
  if (!golden) {
    const r=spawnSync(process.env.GOAWK_REFERENCE,['-c','-N','raw','-F',test.separator,test.program],{encoding:'utf8',input:test.input,windowsHide:true,timeout:15000,maxBuffer:2000000});
    assert(!r.error&&!r.signal,String(r.error||r.signal));
    references.push({output:r.stdout,status:r.status,error:r.stderr});
  }
  const raw=execute(test.program,test.input,test.separator);
  const actual=raw.startsWith('ERROR:')?{error:raw}:JSON.parse(raw),reference=references[i];
  const same=reference.status===0?!actual.error&&actual.exit_status===0&&actual.output===reference.output:Boolean(actual.error);
  if(!same)failures.push({id:test.id,pattern:test.pattern,kind:test.kind,context:test.context,actual,reference});
  if((i+1)%200===0)console.log(`syntax ${i+1}/${cases.length}; differences ${failures.length}`);
}
if(!golden)fs.writeFileSync(file,JSON.stringify({version,binarySha256,options:['-c','-N','raw'],cases,references},null,2)+'\n');
const report={utc:new Date().toISOString(),mode:golden?'saved native vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,accepted:references.filter(r=>r.status===0).length,rejected:references.filter(r=>r.status!==0).length,comparison:'Exact stdout and exit status on success; rejection presence only for invalid patterns, not exact diagnostics.',sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/regex-syntax-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} syntax programs agree`);
for(const f of failures.slice(0,30))console.log(JSON.stringify(f));
if(failures.length)process.exitCode=1;
