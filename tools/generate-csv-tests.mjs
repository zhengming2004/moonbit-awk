import fs from 'node:fs';
import assert from 'node:assert/strict';
import {csvCases} from './csv-cases.mjs';
const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-csv-vectors.json',import.meta.url),'utf8'));
assert.deepEqual(saved.cases,csvCases);
const selected=saved.cases.map((test,i)=>({test,i,ref:saved.references[i]})).filter(({test})=>!test.host&&!test.args&&!test.files&&!test.knownDifference);
const q=JSON.stringify;
let source='// Generated native CSV/TSV expectations; host and documented-difference cases are separate.\n';
for(let first=0;first<selected.length;first+=16){
  source+=`\n///|\ntest "GoAWK 1.32 CSV matrix ${first/16}" {\n`;
  for(const {test,i,ref} of selected.slice(first,first+16)){
    const call=`@awk.run_with_status(${q(test.program)},${q(test.input)},input_mode=${q(test.mode)},output_mode=${q(test.outputMode)})`;
    if(test.error){assert.notEqual(ref.status,0);source+=`  assert_true(try { ignore(${call})\n false } catch { _ => true })\n`;}
    else {assert.equal(ref.status,0);source+=`  let result${i}=${call}\n  assert_eq(result${i}.output,${q(ref.output)})\n  assert_eq(result${i}.exit_status,${ref.status})\n`;}
  }
  source+='}\n';
}
function tokens(s){return s.replace(/^\/\/.*$/gm,'').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x,i,a)=>!(x===','&&[')',']','}'].includes(a[i+1]))).join('');}
const file=new URL('../csv_reference_test.mbt',import.meta.url);
if(process.argv.includes('--check'))assert(tokens(fs.readFileSync(file,'utf8'))===tokens(source),'native CSV test tokens differ');
else fs.writeFileSync(file,source);
console.log(`${selected.length} native CSV programs in ${Math.ceil(selected.length/16)} backend groups ${process.argv.includes('--check')?'verified':'generated'}`);
