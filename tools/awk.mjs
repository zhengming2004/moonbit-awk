#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { execute } from '../web/engine.mjs';

try {
  let program, sourceFile, inputFile, separator = ' ', literal = false;
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node tools/awk.mjs [-F separator] [-f program.awk | program] [input-file|-]\nOne input stream. Rules and execution run in MoonBit; unsupported AWK features raise errors.');
  } else {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (!literal && arg === '--') { literal = true; continue; }
      if (!literal && (arg === '-F' || arg === '-f')) {
        const value = args[++i];
        if (value === undefined) throw Error('missing ' + arg + ' argument');
        if (arg === '-F') separator = value;
        else { if (sourceFile !== undefined || program !== undefined) throw Error('only one program source supported'); sourceFile = value; }
      } else if (!literal && arg.startsWith('-F') && arg.length > 2) separator = arg.slice(2);
      else if (!literal && arg.startsWith('-') && arg !== '-') throw Error('unsupported option ' + arg);
      else if (program === undefined && sourceFile === undefined) program = arg;
      else if (inputFile === undefined) inputFile = arg;
      else throw Error('only one input file supported');
    }
    if (sourceFile !== undefined) program = readFileSync(sourceFile, 'utf8');
    if (program === undefined) throw Error('missing AWK program; use --help');
    const input = readFileSync(inputFile === undefined || inputFile === '-' ? 0 : inputFile, 'utf8');
    const result = execute(program, input, separator);
    if (result.startsWith('ERROR:')) throw Error(result);
    const parsed = JSON.parse(result);
    process.stdout.write(parsed.output);
    process.exitCode = parsed.exit_status;
  }
} catch (error) {
  process.stderr.write('awk: ' + error.message + '\n');
  process.exitCode = 2;
}
