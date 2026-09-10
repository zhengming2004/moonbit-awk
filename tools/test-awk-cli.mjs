import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
const cli = fileURLToPath(new URL('./awk.mjs', import.meta.url));
const folder = mkdtempSync(join(tmpdir(), 'moonbit-awk-cli-'));
const run = (args, input='') => spawnSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:5000});
try {
  let r=run(['{if($2>2) print $1}'],'a 2\nb 4\n'); assert.equal(r.status,0,r.stderr); assert.equal(r.stdout,'b\n');
  writeFileSync(join(folder,'input.txt'),'a,2\nb,3\n');
  writeFileSync(join(folder,'sum.awk'),'BEGIN {OFS=":"} {s+=$2} END {print NR,s}');
  r=run(['-F,','-f',join(folder,'sum.awk'),join(folder,'input.txt')]); assert.equal(r.status,0,r.stderr); assert.equal(r.stdout,'2:5\n');
  r=run(['BEGIN {print "done"; exit 7}']); assert.equal(r.status,7); assert.equal(r.stdout,'done\n');
  r=run(['BEGIN {print 1/0}']); assert.equal(r.status,2); assert.match(r.stderr,/division by zero/);
  r=run(['-v','x=1','BEGIN{print x}']); assert.equal(r.status,2); assert.match(r.stderr,/unsupported option/);
  r=run(['{print}',join(folder,'missing.txt')]); assert.equal(r.status,2); assert.match(r.stderr,/ENOENT/);
  console.log('6 AWK CLI scenarios passed');
} finally {
  const target = resolve(folder);
  if (dirname(target) !== resolve(tmpdir()) || !basename(target).startsWith('moonbit-awk-cli-')) throw Error('unexpected temporary directory');
  rmSync(target,{recursive:true,force:true});
}
