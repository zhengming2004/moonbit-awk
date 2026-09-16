#!/usr/bin/env node
import {readFileSync, createReadStream} from 'node:fs';
import {once} from 'node:events';
import {session_json} from '../web/engine.mjs';

const help = `Usage: node tools/awk.mjs [-F separator] [-v name=value] [-f program.awk ... | program] [name=value | file ...]
Reads UTF-8 files or stdin (-) incrementally. Multiple -f sources are joined in order.
-v assignments run before BEGIN; positional assignments run between input files.
--max-steps N sets the whole-program work limit (default 100000000, maximum 1000000000).
Rules, expressions, field splitting, functions and formatting execute in MoonBit.
Input records use newline separators. RS, getline, pipes and redirection are unsupported.
`;
const assignment = /^([A-Za-z_][A-Za-z_0-9]*)=([\s\S]*)$/;
let session, state;
async function call(action, fields = {}) {
  const result = JSON.parse(session_json(JSON.stringify({action, session, ...fields})));
  if (result.session !== undefined) session = result.session;
  if (result.output && !process.stdout.write(result.output)) await once(process.stdout, 'drain');
  if (!result.ok) throw Error(result.error);
  if ('stopped' in result) state = result;
  return result;
}
async function records(batch) {
  while (batch.length && !state.stopped && !state.skipFile) {
    const {processed} = await call('records', {records: batch});
    if (!processed) throw Error('record processing made no progress');
    batch = batch.slice(processed);
  }
}
let stdinUsed = false;
async function consume(name) {
  await call('file', {name});
  if (name === '-' && stdinUsed) return;
  if (name === '-') stdinUsed = true;
  const input = name === '-' ? process.stdin : createReadStream(name);
  input.setEncoding('utf8');
  let pending = '';
  try {
    for await (const chunk of input) {
      pending += chunk;
      const batch = [];
      let start = 0, end;
      while ((end = pending.indexOf('\n', start)) >= 0) {
        if (end - start > 1000000) {
          await records(batch);
          if (state.stopped || state.skipFile) return;
          throw Error('input record limit');
        }
        batch.push(pending.slice(start, pending[end - 1] === '\r' ? end - 1 : end)); start = end + 1;
        if (batch.length >= 100) {
          await records(batch); batch.length = 0;
          if (state.stopped || state.skipFile) return;
        }
      }
      pending = pending.slice(start);
      await records(batch);
      if (state.stopped || state.skipFile) return;
      if (pending.length > 1000000) throw Error('input record limit');
    }
    if (pending) await records([pending.endsWith('\r') ? pending.slice(0,-1) : pending]);
  } finally {
    if (name !== '-') input.destroy();
  }
}
try {
  const args = process.argv.slice(2), sources = [], variables = Object.create(null);
  let program, separator = ' ', stepLimit = 100000000, i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help') {process.stdout.write(help); process.exit(0);}
    if (arg === '--') {i++; break;}
    if (!arg.startsWith('-') || arg === '-') break;
    if (arg === '--max-steps') {
      stepLimit = Number(args[++i]);
      if (!Number.isInteger(stepLimit) || stepLimit < 1 || stepLimit > 1000000000) throw Error('invalid --max-steps');
      continue;
    }
    const option = arg.slice(0, 2);
    if (!['-F','-f','-v'].includes(option)) throw Error('unsupported option ' + arg);
    const value = arg.length > 2 ? arg.slice(2) : args[++i];
    if (value === undefined) throw Error('missing ' + option + ' argument');
    if (option === '-F') separator = value;
    if (option === '-f') sources.push(readFileSync(value === '-' ? 0 : value, 'utf8'));
    if (option === '-v') {
      const match = assignment.exec(value);
      if (!match) throw Error('expected name=value after -v');
      variables[match[1]] = match[2];
    }
  }
  if (sources.length) program = sources.join('\n');
  else program = args[i++];
  if (program === undefined) throw Error('missing AWK program; use --help');
  const inputs = args.slice(i);
  await call('open', {program, separator, variables, stepLimit, environment: process.env, arguments: ['moonbit-awk', ...inputs]});
  let files = 0;
  for (let index = 1; state.needsInput && !state.stopped; index++) {
    const arg = await call('argument', {index});
    if (index >= arg.argc) break;
    if (!arg.value) continue;
    const match = assignment.exec(arg.value);
    if (match) await call('assign', {name: match[1], value: match[2]});
    else {files++; await consume(arg.value);}
  }
  if (!files && state.needsInput && !state.stopped) await consume('-');
  const result = await call('end');
  process.exitCode = result.exitStatus;
} catch (error) {
  process.stderr.write('awk: ' + error.message + '\n');
  process.exitCode = 1;
} finally {
  if (session !== undefined) session_json(JSON.stringify({action:'close', session}));
}
