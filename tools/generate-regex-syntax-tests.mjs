import fs from 'node:fs';
import assert from 'node:assert/strict';
import {regexSyntaxCases as cases} from './regex-syntax-cases.mjs';
const saved=JSON.parse(fs.readFileSync(new URL('../evidence/regex-syntax-vectors.json',import.meta.url),'utf8'));
assert.deepEqual(saved.cases,cases);
const q=JSON.stringify;
let source='// Native GoAWK syntax and consumer expectations; overlaps live/reference replay.\n';
for(let first=0;first<cases.length;first+=16){
  source+=`\n///|\ntest "GoAWK 1.32 regex syntax ${first/16}" {\n`;
  for(let i=first;i<Math.min(first+16,cases.length);i++){
    const test=cases[i], ref=saved.references[i];
    const call=`@awk.run_with_status(${q(test.program)},${q(test.input)},separator=${q(test.separator)})`;
    if(ref.status!==0)source+=`  assert_true(try { ignore(${call})\n false } catch { _ => true })\n`;
    else source+=`  let result${i}=${call}\n  assert_eq(result${i}.output,${q(ref.output)})\n  assert_eq(result${i}.exit_status,0)\n`;
  }
  source+='}\n';
}
function tokens(s){return s.replace(/^\/\/.*$/gm,'').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x,i,a)=>!(x===','&&[')',']','}'].includes(a[i+1]))).join('');}
const file=new URL('../regex_syntax_reference_test.mbt',import.meta.url);
if(process.argv.includes('--check'))assert.equal(tokens(fs.readFileSync(file,'utf8')),tokens(source));
else fs.writeFileSync(file,source);
console.log(`${cases.length} native programs in ${Math.ceil(cases.length/16)} backend groups ${process.argv.includes('--check')?'verified':'generated'}`);
