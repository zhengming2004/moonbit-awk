#!/usr/bin/env node
import {readFileSync, openSync, closeSync, readSync, writeSync} from 'node:fs';
import {StringDecoder} from 'node:string_decoder';
import {host_run_json} from '../web/engine.mjs';

const help = `Usage: node tools/awk.mjs [-F separator] [-v name=value] [-f program.awk ... | program] [name=value | file ...]
Reads UTF-8 files or stdin (-) incrementally. Multiple -f sources are joined in order.
-v assignments run before BEGIN; positional assignments run between input files.
--max-steps N sets the whole-program work limit (default 100000000, maximum 1000000000).
Rules, expressions, field splitting, functions and formatting execute in MoonBit.
RS supports newline, single character, paragraph and regex separators; unredirected getline shares the input stream.
Pipes and file redirection remain unsupported.
`;
const assignment = /^([A-Za-z_][A-Za-z_0-9]*)=([\s\S]*)$/;
// Native CLI IO is synchronous: a blocked read/write yields to the operating
// system without retaining the whole file or queued output in JavaScript.
const waitWord = new Int32Array(new SharedArrayBuffer(4));
function retryIO(operation) {
  for (;;) {
    try { return operation(); }
    catch (error) {
      if (error.code === 'EINTR') continue;
      if (error.code !== 'EAGAIN' && error.code !== 'EWOULDBLOCK') throw error;
      Atomics.wait(waitWord, 0, 0, 10);
    }
  }
}
let fd, decoder, inputEnded = false, stdinUsed = false, pendingText = '';
const readBuffer = Buffer.alloc(65536), output = [];
let outputSize = 0;
function flush() {
  if (!output.length) return;
  const bytes = Buffer.from(output.join(''));
  output.length = 0; outputSize = 0;
  let offset = 0;
  while (offset < bytes.length) {
    const count = retryIO(() => writeSync(1, bytes, offset, bytes.length - offset));
    if (!count) throw Error('output made no progress');
    offset += count;
  }
}
function closeInput() {
  if (fd !== undefined && fd !== 0) closeSync(fd);
  fd = undefined; decoder = undefined;
}
function hostIO(action, value) {
  switch (action) {
    case 'open':
      closeInput();
      if (value === '-') {
        fd = 0; inputEnded = stdinUsed; stdinUsed = true;
      } else { fd = openSync(value, 'r'); inputEnded = false; }
      pendingText = '';
      decoder = new StringDecoder('utf8');
      return 'O';
    case 'read':
      flush(); // interactive prompts must be visible before getline blocks
      if (pendingText) { const text = pendingText; pendingText = ''; return 'D' + text; }
      if (inputEnded) return 'E';
      for (;;) {
        const count = retryIO(() => readSync(fd, readBuffer, 0, readBuffer.length, null));
        if (!count) {
          inputEnded = true;
          const tail = decoder.end();
          return tail ? 'D' + tail : 'E';
        }
        const text = decoder.write(readBuffer.subarray(0, count));
        if (text.length > 65536) {
          const code = text.charCodeAt(65535);
          const end = code >= 0xd800 && code <= 0xdbff ? 65535 : 65536;
          pendingText = text.slice(end);
          return 'D' + text.slice(0, end);
        }
        if (text) return 'D' + text;
      }
    case 'close': closeInput(); return 'O';
    case 'write':
      output.push(value); outputSize += value.length;
      if (outputSize >= 65536) flush();
      return 'O';
    default: throw Error('unknown host operation');
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
  const result = JSON.parse(host_run_json(JSON.stringify({program, separator, variables, stepLimit,
    environment: process.env, arguments: ['moonbit-awk', ...inputs]}), hostIO));
  flush();
  if (!result.ok) throw Error(result.error);
  process.exitCode = result.exitStatus;
} catch (error) {
  try { flush(); } catch {}
  process.stderr.write('awk: ' + error.message + '\n');
  process.exitCode = 1;
} finally {
  closeInput();
}
