import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {host_run_json} from '../web/engine.mjs';
import {sourceHashes} from './evidence.mjs';
const cli = fileURLToPath(new URL('./awk.mjs', import.meta.url));
let checks = 0;
function check(program, chunks, expected, failure = false) {
  let position = 0, opens = 0, closes = 0, output = '';
  const result = JSON.parse(host_run_json(JSON.stringify({program}), (action, value) => {
    if (action === 'open') { opens++; return 'O'; }
    if (action === 'close') { closes++; return 'O'; }
    if (action === 'write') { output += value; return 'O'; }
    if (action === 'read') return position < chunks.length ? 'D' + chunks[position++] : 'E';
    throw Error('unexpected operation');
  }));
  assert.equal(output, expected);
  assert.equal(result.ok, !failure, result.error);
  assert.equal(closes, opens);
  checks++;
}
for (const chunks of [['a\r', '\n象', '🙂\nlast'], ['a', '\r', '\n', '象', '🙂', '\n', 'last']]) {
  check('BEGIN{while((getline x)>0)print NR,x}', chunks, '1 a\n2 象🙂\n3 last\n');
}
check('BEGIN{print getline,$0}', ['line\n'], '1 line\n');
check('{print;exit} END{print (getline x),x}', ['one\ntwo\n'], 'one\n1 two\n');
check('{print;print 1/zero}', ['one\ntwo\n'], 'one\n', true);
check('BEGIN{print getline}', ['x'.repeat(65537)], '', true);
check('BEGIN{while((getline x)>0)n++}', Array(17).fill('x'.repeat(65536)), '', true);
let thrownOutput = '';
const thrown = JSON.parse(host_run_json(JSON.stringify({program:'BEGIN{x="old";print getline x,x}'}), (action, value) => {
  if (action === 'open' || action === 'close') return 'O';
  if (action === 'read') throw Error('fixture read failure');
  if (action === 'write') { thrownOutput += value; return 'O'; }
  throw Error('unexpected operation');
}));
assert(thrown.ok); assert.equal(thrownOutput, '-1 old\n'); checks++;

// A real child must flush the prompt before waiting for its first input byte.
await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [cli, 'BEGIN{printf "ready>";getline x;print x}'], {windowsHide:true});
  const timer = setTimeout(() => { child.kill(); reject(Error('interactive getline timeout')); }, 10000);
  let out = '', err = '', sent = false;
  child.stdout.setEncoding('utf8'); child.stderr.setEncoding('utf8');
  child.stdout.on('data', data => { out += data; if (!sent && out === 'ready>') { sent = true; child.stdin.end('answer\n'); } });
  child.stderr.on('data', data => { err += data; });
  child.on('error', reject);
  child.on('close', code => {
    clearTimeout(timer);
    try { assert.equal(code,0,err); assert(sent); assert.equal(out,'ready>answer\n'); checks++; resolve(); }
    catch (error) { reject(error); }
  });
});

// Slow consumption applies real pipe backpressure while a single BEGIN action
// emits well beyond the core's in-memory output budget.
await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [cli, 'BEGIN{for(i=0;i<180000;i++)print "abcdefghi"}'], {windowsHide:true});
  const timer = setTimeout(() => { child.kill(); reject(Error('backpressure timeout')); }, 30000);
  let length = 0, err = '';
  child.stdin.end(); child.stderr.setEncoding('utf8');
  child.stderr.on('data', data => { err += data; });
  child.stdout.on('data', data => {
    assert(/^(?:[a-i]|\n)+$/.test(data.toString())); length += data.length;
    child.stdout.pause(); setTimeout(() => child.stdout.resume(), 3);
  });
  child.on('error', reject);
  child.on('close', code => {
    clearTimeout(timer);
    try { assert.equal(code,0,err); assert.equal(length,1800000); checks++; resolve(); }
    catch (error) { reject(error); }
  });
});
fs.writeFileSync(new URL('../evidence/pull-host.json', import.meta.url), JSON.stringify({utc:new Date().toISOString(), checks, passed:checks, failed:0, sourceSha256:sourceHashes(), scope:'Pull callback ownership/errors/limits, interactive prompt and 1.8 MB slow output consumer; Windows host only'},null,2)+'\n');
console.log(`${checks} pull host checks passed, including interactive getline and pipe backpressure`);
