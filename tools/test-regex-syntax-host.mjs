import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sourceHashes} from './evidence.mjs';
import {regexSyntaxCases as cases} from './regex-syntax-cases.mjs';
const saved=JSON.parse(fs.readFileSync(new URL('../evidence/regex-syntax-vectors.json',import.meta.url),'utf8'));
assert.deepEqual(saved.cases,cases);
const counts=new Map(), results=[];
for(const [i,test] of cases.entries()){
  const reference=saved.references[i], key=`${test.kind}-${reference.status===0?'success':'error'}-${test.context}`;
  const count=counts.get(key)||0;counts.set(key,count+1);
  if(test.kind!=='consumer'&&count>=4)continue;
  const r=spawnSync(process.execPath,[fileURLToPath(new URL('./awk.mjs',import.meta.url)),'-F',test.separator,test.program],{input:test.input,encoding:'utf8',windowsHide:true,timeout:15000,maxBuffer:2000000});
  assert(!r.error&&!r.signal,String(r.error||r.signal));
  const same=reference.status===0?r.status===0&&r.stdout===reference.output&&r.stderr==='':r.status!==0;
  results.push({id:test.id,kind:test.kind,context:test.context,status:r.status,same});
  assert(same,JSON.stringify({test,r,reference}));
}
const report={utc:new Date().toISOString(),scope:'Real Node CLI against a selected subset of saved native vectors; overlaps the API matrix and does not add independent native executions.',total:results.length,passed:results.length,failed:0,sourceSha256:sourceHashes(),results};
fs.writeFileSync(new URL('../evidence/regex-syntax-host.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} syntax CLI checks agree`);
