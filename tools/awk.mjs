#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import {runHost} from './awk-host.mjs';

const help = `Usage: node tools/awk.mjs [-F separator] [-v name=value] [-f program.awk ... | program] [name=value | file ...]
Reads UTF-8 files or stdin (-) incrementally. Multiple -f sources are joined in order.
--csv or -i mode enables CSV/TSV input; -H enables headers (requires -i or --csv).
-o mode formats print arguments as CSV/TSV; mode may include separator=character.
-v assignments run before BEGIN; positional assignments run between input files.
--max-steps N sets the whole-program work limit (default 100000000, maximum 1000000000).
--shell executable selects the command shell (default sh -c, including Windows; cmd.exe uses /c).
Rules, expressions, field splitting, functions and formatting execute in MoonBit.
RS supports newline, single character, paragraph and regex separators; unredirected getline shares the input stream.
File and command redirection, system, close and fflush use the Node host.
`;
const assignment = /^([A-Za-z_][A-Za-z_0-9]*)=([\s\S]*)$/;
try {
  const args = process.argv.slice(2), sources = [], variables = Object.create(null);
  let program, separator = ' ', shell = 'sh', stepLimit = 100000000, i = 0;
  let inputMode='',outputMode='',csvHeader=false,inputConfigured=false;
  for (; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help') {process.stdout.write(help); process.exit(0);}
    if (arg === '--') {i++; break;}
    if (arg === '--csv') {inputMode='csv';inputConfigured=true;continue;}
    if (arg === '-H') {csvHeader=true;continue;}
    if (!arg.startsWith('-') || arg === '-') break;
    if (arg === '--shell') { shell=args[++i];if(!shell)throw Error('missing --shell argument');continue; }
    if (arg === '--max-steps') {
      stepLimit = Number(args[++i]);
      if (!Number.isInteger(stepLimit) || stepLimit < 1 || stepLimit > 1000000000) throw Error('invalid --max-steps');
      continue;
    }
    const option = arg.slice(0, 2);
    if (!['-F','-f','-v','-i','-o'].includes(option)) throw Error('unsupported option ' + arg);
    const value = arg.length > 2 ? arg.slice(2) : args[++i];
    if (value === undefined) throw Error('missing ' + option + ' argument');
    if (option === '-F') separator = value;
    if (option === '-i') {inputMode=value;inputConfigured=true;}
    if (option === '-o') outputMode=value;
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
  if (csvHeader) {if(!inputConfigured)throw Error('-H requires -i or --csv');inputMode+=' header';}
  const inputs = args.slice(i);
  const result = await runHost({program, separator, shell, variables, stepLimit,inputMode,outputMode,
    environment: process.env, arguments: ['moonbit-awk', ...inputs]});
  if (!result.ok) throw Error(result.error);
  process.exitCode = result.exitStatus;
} catch (error) {
  process.stderr.write('awk: ' + error.message + '\n');
  process.exitCode = 1;
}
