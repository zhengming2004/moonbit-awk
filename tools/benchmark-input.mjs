import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {performance} from 'node:perf_hooks';
import {fileURLToPath} from 'node:url';
import {sourceHashes, sha256} from './evidence.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const reference = process.env.GOAWK_REFERENCE;
assert(reference, 'Set GOAWK_REFERENCE');
const baseline = '612ba5fd114e3841ee3e097e266d928a15550a1a';
const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'moonbit-awk-performance-'));
const workloads = [
  {name:'sum-newline', program:'{s+=$2} END{print NR,s}', input:'value 2\n'.repeat(80000), old:true},
  {name:'copy-newline', program:'{print}', input:'value 2\n'.repeat(80000), old:true},
  {name:'sum-regex-rs', program:'BEGIN{RS="END"}{s+=$2} END{print NR,s}', input:'value 2END'.repeat(8000)},
  {name:'sum-paragraph', program:'BEGIN{RS=""}{s+=$2+$4} END{print NR,s}', input:'value 2\nother 3\n\n'.repeat(8000)},
  {name:'sum-getline', program:'BEGIN{while((getline)>0)s+=$2;print NR,s}', input:'value 2\n'.repeat(80000)},
  {name:'copy-getline', program:'BEGIN{while((getline)>0)print}', input:'value 2\n'.repeat(80000)},
];
const trials = [];
let baselineEngineSha256;
try {
  for (const name of ['web/engine.mjs','tools/awk.mjs']) {
    const r = spawnSync('git', ['show', baseline + ':' + name], {cwd:root, windowsHide:true, maxBuffer:5000000});
    assert.equal(r.status,0,r.stderr?.toString());
    const target = path.join(folder,name); fs.mkdirSync(path.dirname(target),{recursive:true}); fs.writeFileSync(target,r.stdout);
    if (name === 'web/engine.mjs') baselineEngineSha256 = sha256(r.stdout);
  }
  for (const work of workloads) {
    let expected;
    for (let round=0; round<5; round++) {
      const variants = ['upstream','current', ...(work.old ? ['baseline'] : [])];
      // Rotate the order to avoid always assigning one implementation the
      // first/coldest slot. All processes run serially on the same machine.
      for (const variant of [...variants.slice(round%variants.length), ...variants.slice(0,round%variants.length)]) {
        const executable = variant === 'upstream' ? reference : process.execPath;
        const args = variant === 'upstream' ? ['-c','-N','raw',work.program] : [path.join(variant === 'baseline' ? folder : root,'tools/awk.mjs'),work.program];
        const start = performance.now();
        const r = spawnSync(executable,args,{input:work.input,encoding:'utf8',windowsHide:true,timeout:60000,maxBuffer:3000000});
        const elapsedMs = performance.now()-start;
        assert(!r.error&&!r.signal,String(r.error||r.signal)); assert.equal(r.status,0,r.stderr);
        const result = {length:r.stdout.length,sha256:sha256(r.stdout)};
        if (variant === 'upstream') expected ??= result;
        if (expected) assert.deepEqual(result,expected);
        trials.push({name:work.name,round,variant,elapsedMs,result});
      }
    }
    for (const run of trials.filter(r=>r.name===work.name)) assert.deepEqual(run.result,expected);
  }
  const summaries = workloads.map(work => {
    const summary = {name:work.name,inputUtf8Bytes:Buffer.byteLength(work.input)};
    for (const variant of ['current','upstream','baseline']) {
      const values = trials.filter(r=>r.name===work.name&&r.variant===variant).map(r=>r.elapsedMs).sort((a,b)=>a-b);
      if (values.length) summary[variant] = {medianMs:values[2],minMs:values[0],maxMs:values.at(-1),spreadRatio:values.at(-1)/values[0]};
    }
    summary.currentToUpstream = summary.current.medianMs/summary.upstream.medianMs;
    if (summary.baseline) summary.currentToBaseline=summary.current.medianMs/summary.baseline.medianMs;
    return summary;
  });
  const report = {utc:new Date().toISOString(),scope:'Five fresh processes per variant/workload; total CLI wall time includes startup and pipe IO, not isolated interpreter throughput. Only two workloads exist in 0.4.',platform:process.platform,node:process.version,cpu:os.cpus()[0].model,baselineCommit:baseline,baselineEngineSha256,referenceSha256:sha256(fs.readFileSync(reference)),sourceSha256:sourceHashes(),workloads, trials,summaries,performanceParityEstablished:false};
  // Do not duplicate megabytes of fixture text in the report.
  report.workloads = workloads.map(({input,...work})=>({...work,inputUtf8Bytes:Buffer.byteLength(input),inputSha256:sha256(input)}));
  fs.writeFileSync(new URL('../evidence/input-performance.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
  for (const s of summaries) console.log(JSON.stringify(s));
} finally {
  const target=path.resolve(folder);
  if(path.dirname(target)!==path.resolve(os.tmpdir())||!path.basename(target).startsWith('moonbit-awk-performance-'))throw Error('unexpected temporary directory');
  fs.rmSync(target,{recursive:true,force:true});
}
