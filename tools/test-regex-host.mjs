import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sourceHashes,sha256} from './evidence.mjs';
const all=JSON.parse(fs.readFileSync(new URL('./regex-cases.json',import.meta.url),'utf8'));
const cases=all.filter(t=>['semantics','fields','records','split'].includes(t.kind));
for(const offset of [65533,65534,65535,65536])for(const [pattern,separator] of [[String.raw`\p{Greek}+`,'Σσ'],[String.raw`[\x{10400}-\x{1044f}]+`,'𐐀𐐨']]){
  cases.push({id:`stream-${offset}-${separator}`,kind:'stream',program:`BEGIN{RS=${JSON.stringify(pattern)}}{print NR,length($0),length(RT),substr($0,1,2)}`,input:'x'.repeat(offset)+separator+'尾'+separator+'end',separator:' '});
}
const golden=process.argv.includes('--golden');
let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-regex-host-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);({references,version,binarySha256}=saved);}
else{assert(process.env.GOAWK_REFERENCE);const r=spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true});assert.equal(r.status,0);version=r.stdout.trim();binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));}
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
function run(test,native){const r=spawnSync(native?process.env.GOAWK_REFERENCE:process.execPath,native?['-c','-N','raw','-F',test.separator,test.program]:[cli,'-F',test.separator,test.program],{input:test.input,encoding:'utf8',windowsHide:true,timeout:20000,maxBuffer:5000000});assert(!r.error&&!r.signal,String(r.error||r.signal));return {output:r.stdout,status:r.status,error:r.stderr};}
const failures=[];
for(const [i,test] of cases.entries()){
  if(!golden)references.push(run(test,true));
  const actual=run(test,false),reference=references[i];
  try{assert.equal(reference.status,0);assert.deepEqual(actual,reference);}catch{failures.push({id:test.id,actual,reference});}
}
if(!golden)fs.writeFileSync(new URL('../evidence/awk-regex-host-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,cases,references},null,2)+'\n');
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/awk-regex-host-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} Unicode regex CLI and streaming comparisons agree`);
for(const f of failures)console.log(JSON.stringify(f));if(failures.length)process.exitCode=1;
