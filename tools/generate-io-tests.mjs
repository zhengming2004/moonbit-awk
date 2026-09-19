import fs from 'node:fs';
import assert from 'node:assert/strict';
import {ioCases,ioFixtures} from './io-cases.mjs';
const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-io-vectors.json',import.meta.url),'utf8'));
assert.deepEqual(saved.cases,ioCases);assert.deepEqual(saved.fixtures,ioFixtures);
const q=JSON.stringify;
const selected=saved.cases.map((test,i)=>({test,i,ref:saved.references[i]})).filter(({i})=>i<40);
let source='// Generated from pinned GoAWK file-host results.\n';
for(let start=0;start<selected.length;start+=8){
  source+=`\n///|\ntest "GoAWK 1.32 file IO batch ${start/8}" {\n`;
  for(const {test,i,ref} of selected.slice(start,start+8)){
    const fixtures=Object.entries(ioFixtures).filter(([name])=>name!=='helper.mjs').map(([name,text])=>`${q(name)}: ${q(text)}`).join(',');
    const files={...ioFixtures,...Object.fromEntries(Object.entries(ref.files).map(([name,file])=>{assert(file.text!==null);return[name,file.text];}))};delete files['helper.mjs'];
    const expected=Object.entries(files).map(([name,text])=>`${q(name)}: ${q(text)}`).join(',');
    source+=`  let r${i}=virtual_io(${q(test.program)},${q(test.input)},{${fixtures}})\n`;
    source+=`  assert_eq(r${i}.output,${q(ref.output.text)})\n  assert_eq(r${i}.status,${ref.status})\n  assert_eq(r${i}.failed,${ref.status!==0})\n  assert_eq(r${i}.warning,${ref.hasError})\n  assert_eq(r${i}.files,{${expected}})\n`;
  }
  source+='}\n';
}
function tokens(s){return s.replace(/^\/\/.*$/gm,'').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x,i,a)=>!(x===','&&[')',']','}'].includes(a[i+1]))).join('');}
const path=new URL('../io_reference_test.mbt',import.meta.url);
if(process.argv.includes('--check'))assert(tokens(fs.readFileSync(path,'utf8'))===tokens(source),'native IO test tokens differ');
else fs.writeFileSync(path,source);
console.log(`${selected.length} native file IO programs in ${Math.ceil(selected.length/8)} backend groups ${process.argv.includes('--check')?'verified':'generated'}`);
