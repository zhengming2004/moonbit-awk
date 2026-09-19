import fs from 'node:fs';
import assert from 'node:assert/strict';
const regexCases=JSON.parse(fs.readFileSync(new URL('./regex-cases.json',import.meta.url),'utf8'));
const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-regex-vectors.json',import.meta.url),'utf8'));
assert.deepEqual(saved.cases,regexCases);
const selected=saved.cases.map((test,i)=>({test,i,ref:saved.references[i]}));
const q=JSON.stringify;
let source='// Generated native Unicode regex expectations; observations overlap the live matrix.\n';
for(let first=0;first<selected.length;first+=16){
  source+=`\n///|\ntest "GoAWK 1.32 Unicode regex matrix ${first/16}" {\n`;
  for(const {test,i,ref} of selected.slice(first,first+16)){
    const call=`@awk.run_with_status(${q(test.program)},${q(test.input)},separator=${q(test.separator)})`;
    if(test.error){assert.notEqual(ref.status,0);source+=`  assert_true(try { ignore(${call})\n false } catch { _ => true })\n`;}
    else {assert.equal(ref.status,0);source+=`  let result${i}=${call}\n  assert_eq(result${i}.output,${q(ref.output)})\n  assert_eq(result${i}.exit_status,${ref.status})\n`;}
  }
  source+='}\n';
}
function tokens(s){return s.replace(/^\/\/.*$/gm,'').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x,i,a)=>!(x===','&&[')',']','}'].includes(a[i+1]))).join('');}
const file=new URL('../regex_reference_test.mbt',import.meta.url);
if(process.argv.includes('--check'))assert(tokens(fs.readFileSync(file,'utf8'))===tokens(source),'native regex test tokens differ');
else fs.writeFileSync(file,source);
console.log(`${selected.length} native regex programs in ${Math.ceil(selected.length/16)} backend groups ${process.argv.includes('--check')?'verified':'generated'}`);
