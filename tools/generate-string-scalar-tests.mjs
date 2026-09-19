import fs from 'node:fs';
import assert from 'node:assert/strict';
import {sha256} from './evidence.mjs';
const bin=fs.readFileSync(new URL('../evidence/string-scalar-reference.bin',import.meta.url));
const meta=JSON.parse(fs.readFileSync(new URL('../evidence/string-scalar-reference.json',import.meta.url),'utf8'));
assert.equal(sha256(bin),meta.outputSha256);assert.equal(meta.scalarCount,1112064);
assert(Buffer.from(bin.toString('utf8'),'utf8').equals(bin));
const iterator=bin.toString('utf8')[Symbol.iterator](),cases=[];let scalars=0;
for(let first=0;first<0x110000;first+=2048){
  const end=Math.min(first+2048,0x110000),parts=[];let count=0;
  for(let cp=first;cp<end;cp++){
    if(cp>=0xd800&&cp<=0xdfff)continue;
    for(let i=0;i<2;i++){const item=iterator.next();assert(!item.done);parts.push(item.value);}
    count++;
  }
  if(!count)continue;
  scalars+=count;
  cases.push({first,end,expected:parts.join(''),program:`BEGIN{for(i=${first};i<${end};i++){if(i>=55296&&i<=57343)continue;s=sprintf("%c",i);printf "%s%s",tolower(s),toupper(s)}}`});
}
assert(iterator.next().done);assert.equal(scalars,1112064);
const q=s=>JSON.stringify(s).replaceAll('\u2028','\\u2028').replaceAll('\u2029','\\u2029');
let source='// Generated exclusively from the native GoAWK scalar output stream.\n// Every valid Unicode scalar, both case conversions; no production mapping table is used.\n';
for(let first=0;first<cases.length;first+=16){
  source+=`\n///|\ntest "GoAWK Unicode string scalar batch ${first/16}" {\n`;
  for(const c of cases.slice(first,first+16))source+=`  assert_eq(@awk.run(${q(c.program)},""),${q(c.expected)})\n`;
  source+='}\n';
}
function tokens(s){return s.replace(/^\/\/.*$/gm,'').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x,i,a)=>!(x===','&&[')',']','}'].includes(a[i+1]))).join('');}
const file=new URL('../string_scalar_reference_test.mbt',import.meta.url);
if(process.argv.includes('--check'))assert.equal(tokens(fs.readFileSync(file,'utf8')),tokens(source),'scalar test tokens differ');else fs.writeFileSync(file,source);
console.log(`${scalars} Unicode scalars in ${cases.length} programs and ${Math.ceil(cases.length/16)} backend groups ${process.argv.includes('--check')?'verified':'generated'}`);
