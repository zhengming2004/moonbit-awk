import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {execute} from '../web/engine.mjs';
import {sourceHashes, sha256} from './evidence.mjs';
import {recordCases as cases} from './record-cases.mjs';
const golden = process.argv.includes('--golden');
const vectors = new URL('../evidence/awk-record-vectors.json', import.meta.url);
let references, version, binarySha256;
if (golden) {
  const saved = JSON.parse(fs.readFileSync(vectors, 'utf8'));
  assert.deepEqual(saved.cases, cases);
  ({references, version, binarySha256} = saved);
} else {
  const exe = process.env.GOAWK_REFERENCE;
  assert(exe, 'Set GOAWK_REFERENCE');
  const info = spawnSync(exe, ['-version'], {encoding: 'utf8', windowsHide: true, timeout: 5000});
  assert.equal(info.status, 0, info.stderr);
  version = info.stdout.trim(); binarySha256 = sha256(fs.readFileSync(exe));
  references = cases.map(test => {
    const r = spawnSync(exe, ['-c', '-N', 'raw', '-F', test.separator, test.program], {input: test.input, encoding: 'utf8', windowsHide: true, timeout: 5000, maxBuffer: 2000000});
    assert(!r.error && !r.signal, String(r.error || r.signal));
    return {output: r.stdout, exit_status: r.status, error: r.stderr};
  });
  fs.writeFileSync(vectors, JSON.stringify({version, binarySha256, options: ['-c', '-N', 'raw'], cases, references}, null, 2) + '\n');
}
const failures = [];
for (const [i, test] of cases.entries()) {
  let raw;
  try { raw = execute(test.program, test.input, test.separator); }
  catch (error) { failures.push({test, panic: String(error)}); continue; }
  const actual = raw.startsWith('ERROR:') ? {error: raw} : JSON.parse(raw), reference = references[i];
  const same = test.error ? Boolean(actual.error) && reference.exit_status !== 0 : !actual.error && actual.output === reference.output && actual.exit_status === reference.exit_status;
  if (!same) failures.push({test, actual, reference});
}
const report = {utc: new Date().toISOString(), mode: golden ? 'saved vectors' : 'live GoAWK', version, binarySha256, total: cases.length, passed: cases.length - failures.length, failed: failures.length, sourceSha256: sourceHashes(), failures};
fs.writeFileSync(new URL(`../evidence/awk-record-${golden ? 'replay' : 'validation'}.json`, import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(`${report.passed}/${report.total} GoAWK RS/getline comparisons agree`);
for (const failure of failures.slice(0, 30)) console.log(JSON.stringify(failure));
if (failures.length) process.exitCode = 1;
