import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sourceHashes,sha256} from './evidence.mjs';
const cases=[];
for(const offset of [65530,65531,65532,65533,65534,65535,65536])cases.push({id:`carry-${offset}`,program:'{print NR,length($0),tolower($0),toupper($0)}',input:'A'.repeat(offset)+'Σİß𐐀'+'t'.repeat(19)+'\n'});
cases.push({id:'many-records',program:'{$1=tolower($1);$2=toupper($2);print NR,NF,$0,tolower($0),toupper($0)}',input:'ΣΟΣ İı ßẞ 𐐀𐐨 Á\n'.repeat(40000)});
cases.push({id:'large-ascii-record',program:'{a=tolower($0);b=toupper(a);print length(a),length(b),(a==$0),(b==$0),substr(a,999996),substr(b,999996)}',input:'A'.repeat(999999)+'\n'});
const requests=cases.map(({input,...t})=>({...t,inputBytes:Buffer.byteLength(input),inputSha256:sha256(input)}));
const golden=process.argv.includes('--golden');let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-string-host-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.requests,requests);({references,version,binarySha256}=saved);}
else{assert(process.env.GOAWK_REFERENCE);const r=spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true});assert.equal(r.status,0);version=r.stdout.trim();binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));}
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
function run(test,native){const r=spawnSync(native?process.env.GOAWK_REFERENCE:process.execPath,native?['-c','-N','raw',test.program]:[cli,test.program],{input:test.input,windowsHide:true,timeout:60000,maxBuffer:32000000});assert(!r.error&&!r.signal,String(r.error||r.signal));return {data:r.stdout,summary:{bytes:r.stdout.length,sha256:sha256(r.stdout),status:r.status,error:r.stderr.toString()}};}
const failures=[];
for(const [i,test] of cases.entries()){
  const upstream=golden?null:run(test,true);if(upstream)references.push(upstream.summary);
  const actual=run(test,false),reference=references[i];
  try{assert.equal(reference.status,0);assert.deepEqual(actual.summary,reference);if(upstream)assert(actual.data.equals(upstream.data));}catch{failures.push({request:requests[i],actual:actual.summary,reference});}
}
if(!golden)fs.writeFileSync(new URL('../evidence/awk-string-host-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,requests,references},null,2)+'\n');
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,requests,scope:'Live stdout compares exact bytes; saved vectors compare SHA-256 and length plus exact status/stderr. Inputs cross UTF-8 host blocks and include large records and multi-record field rewriting.',sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/awk-string-host-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} Unicode string CLI/streaming comparisons agree`);
for(const f of failures)console.log(JSON.stringify(f));if(failures.length)process.exitCode=1;
