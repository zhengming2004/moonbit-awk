import fs from 'node:fs';
import assert from 'node:assert/strict';
import {recordCases} from './record-cases.mjs';
const saved = JSON.parse(fs.readFileSync(new URL('../evidence/awk-record-vectors.json', import.meta.url), 'utf8'));
assert.deepEqual(saved.cases, recordCases);
const q = JSON.stringify;
let source = '// Generated from pinned GoAWK native output by tools/generate-record-tests.mjs.\n';
for (let i = 0; i < saved.cases.length; i += 16) {
  source += `\n///|\ntest "GoAWK 1.32 RS getline matrix ${i / 16}" {\n`;
  for (let j = i; j < Math.min(i + 16, saved.cases.length); j++) {
    const test = saved.cases[j], ref = saved.references[j];
    const run = `@awk.run_with_status(${q(test.program)}, ${q(test.input)}, separator=${q(test.separator)})`;
    if (test.error) {
      assert(ref.exit_status !== 0);
      source += `  assert_true(try { ignore(${run})\n false } catch { _ => true })\n`;
    } else {
      assert.equal(ref.exit_status === 0 || ref.exit_status === 3, true);
      source += `  let result${j} = ${run}\n    assert_eq(result${j}.output, ${q(ref.output)})\n    assert_eq(result${j}.exit_status, ${ref.exit_status})\n`;
    }
  }
  source += '}\n';
}
// moon fmt can wrap tokens and add trailing commas. Compare tokens, retaining
// string bytes, all expressions and all expected native results exactly.
function tokens(s) {
  return s.replace(/^\/\/.*$/gm, '').match(/"(?:\\.|[^"\\])*"|[^\s]/g).filter((x, i, a) => !(x === ',' && [')', ']', '}'].includes(a[i+1]))).join('');
}
const file = new URL('../record_reference_test.mbt', import.meta.url);
if (process.argv.includes('--check')) assert(tokens(fs.readFileSync(file, 'utf8')) === tokens(source), 'generated native test tokens differ');
else fs.writeFileSync(file, source);
console.log(`${saved.cases.length} native programs in ${Math.ceil(saved.cases.length / 16)} backend groups ${process.argv.includes('--check') ? 'verified' : 'generated'}`);
