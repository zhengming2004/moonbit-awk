import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execute } from '../web/engine.mjs';
const referenceBytes = await readFile(new URL('../evidence/gawk-reference.json', import.meta.url));
const reference = JSON.parse(referenceBytes);
const results = reference.results.map(test => {
  const raw = execute(test.program, test.input, test.separator);
  const actual = raw.startsWith('ERROR:') ? {error:raw} : JSON.parse(raw);
  const normalize = text => test.unordered ? text.trimEnd().split('\n').sort().join('\n') : text;
  const same = !actual.error && normalize(actual.output) === normalize(test.output) && actual.exit_status === test.exit_status;
  return {id:test.id, same, knownDifference:test.knownDifference, actual, expected:{output:test.output, exit_status:test.exit_status}, stderr:test.stderr};
});
const failures = results.filter(x => !x.same && !x.knownDifference);
const knownDifferences = results.filter(x => !x.same && x.knownDifference);
const report = {date:new Date().toISOString(), reference:reference.version, locale:reference.locale,
  referenceSha256:createHash('sha256').update(referenceBytes).digest('hex'),
  engineSha256:createHash('sha256').update(await readFile(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),
  total:results.length, matched:results.filter(x=>x.same).length, failures:failures.length, knownDifferences:knownDifferences.length, results};
await writeFile(new URL('../evidence/gawk-comparison.json', import.meta.url), JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({total:report.total,matched:report.matched,failures,knownDifferences}));
if(failures.length) process.exitCode=1;
