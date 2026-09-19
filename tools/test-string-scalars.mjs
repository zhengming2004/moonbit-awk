import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sourceHashes,sha256} from './evidence.mjs';
const program='BEGIN{for(i=0;i<=1114111;i++){if(i>=55296&&i<=57343)continue;s=sprintf("%c",i);printf "%s%s",tolower(s),toupper(s)}}';
const golden=process.argv.includes('--golden');
const bin=new URL('../evidence/string-scalar-reference.bin',import.meta.url);
const meta=new URL('../evidence/string-scalar-reference.json',import.meta.url);
let expected,reference;
if(golden){expected=fs.readFileSync(bin);reference=JSON.parse(fs.readFileSync(meta,'utf8'));assert.equal(reference.program,program);assert.equal(reference.outputSha256,sha256(expected));}
else{
  const exe=process.env.GOAWK_REFERENCE;assert(exe,'Set GOAWK_REFERENCE');
  const version=spawnSync(exe,['-version'],{encoding:'utf8',windowsHide:true,timeout:5000});assert.equal(version.status,0);
  const result=spawnSync(exe,['-c','-N','raw',program],{windowsHide:true,timeout:120000,maxBuffer:32000000});
  assert(!result.error&&!result.signal,String(result.error||result.signal));assert.equal(result.status,0,result.stderr.toString());assert.equal(result.stderr.length,0);
  expected=result.stdout;
  reference={utc:new Date().toISOString(),program,version:version.stdout.trim(),binarySha256:sha256(fs.readFileSync(exe)),options:['-c','-N','raw'],scalarCount:1112064,caseConversions:2224128,outputBytes:expected.length,outputSha256:sha256(expected)};
  fs.writeFileSync(bin,expected);fs.writeFileSync(meta,JSON.stringify(reference,null,2)+'\n');
}
assert(Buffer.from(expected.toString('utf8'),'utf8').equals(expected),'native output must be valid UTF-8');
assert.equal([...expected.toString('utf8')].length,2224128,'native simple mappings preserve one scalar per result');
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
const actual=spawnSync(process.execPath,[cli,'--max-steps','1000000000',program],{windowsHide:true,timeout:120000,maxBuffer:32000000});
assert(!actual.error&&!actual.signal,String(actual.error||actual.signal));
const same=actual.status===0&&actual.stderr.length===0&&actual.stdout.equals(expected);
let firstByteDifference=null;
if(!same){let i=0;while(i<actual.stdout.length&&i<expected.length&&actual.stdout[i]===expected[i])i++;firstByteDifference=i;}
const report={...reference,referenceUtc:reference.utc,utc:new Date().toISOString(),mode:golden?'saved native':'live GoAWK',outputBytes:expected.length,actualOutputBytes:actual.stdout.length,actualSha256:sha256(actual.stdout),actualStatus:actual.status,actualError:actual.stderr.toString(),passed:same,firstByteDifference,scope:'Both case conversions for every Unicode scalar in code point order through the real CLI; excludes surrogate code points and arbitrary invalid UTF-8.',sourceSha256:sourceHashes()};
fs.writeFileSync(new URL(`../evidence/string-scalar-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({scalarCount:1112064,caseConversions:2224128,bytes:expected.length,passed:same,firstByteDifference}));
if(!same)process.exitCode=1;
