import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile, writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const consumer = join(root, 'examples', 'third-party', 'shdotenv-v0.14.0');
const sourcePin = JSON.parse(await readFile(join(consumer, 'source.json'), 'utf8'));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const sourceHashes = {};

for (const [relativePath, expectedHash] of Object.entries(sourcePin.files)) {
  const actualHash = sha256(await readFile(join(consumer, relativePath)));
  assert.equal(actualHash, expectedHash, `upstream source changed: ${relativePath}`);
  sourceHashes[relativePath] = actualHash;
}

const reference = process.env.GOAWK_REFERENCE;
const shell = process.env.SHDOTENV_SHELL;
assert(reference, 'Set GOAWK_REFERENCE to the pinned GoAWK v1.32.0 executable');
assert(shell, 'Set SHDOTENV_SHELL to a POSIX shell, such as Git for Windows sh.exe');

const referenceBytes = await readFile(reference);
const referenceSha256 = sha256(referenceBytes);
assert.equal(referenceSha256, sourcePin.reference.windowsAmd64ExecutableSha256,
  'GoAWK executable does not match the pinned v1.32.0 Windows amd64 release');

const referenceVersion = spawnSync(reference, ['-version'], {
  encoding: 'utf8', windowsHide: true, timeout: 5000,
});
assert.equal(referenceVersion.status, 0, referenceVersion.stderr);
assert.match(referenceVersion.stdout, /v1\.32\.0/);

const shellVersion = spawnSync(shell, ['--version'], {
  encoding: 'utf8', windowsHide: true, timeout: 5000,
});
assert.equal(shellVersion.status, 0, shellVersion.stderr);
const shellSha256 = sha256(await readFile(shell));
const toolchainPin = (await readFile(join(root, '.moonbit-version'), 'utf8')).trim();

const script = 'src/shdotenv';
const input = 'consumer.env';
const inputFile = join(consumer, input);
const moonbitAwk = join(root, 'tools', 'awk.mjs');
const shPath = value => process.platform === 'win32' ? value.replaceAll('\\', '/') : value;
const args = [script, '--format', 'json', '--ignore-environment', '--sort', '--env', input];

function run(awkCommand) {
  const result = spawnSync(shell, args, {
    cwd: consumer,
    encoding: 'utf8',
    env: {...process.env, SHDOTENV_AWK: shPath(awkCommand)},
    windowsHide: true,
    timeout: 30000,
    maxBuffer: 4 * 1024 * 1024,
  });
  assert(!result.error && !result.signal, String(result.error || result.signal));
  return {status: result.status, stdout: result.stdout, stderr: result.stderr};
}

const native = run(reference);
const moonbit = run(moonbitAwk);
const normalizeOutput = output => output.replaceAll('\r\n', '\n');
const nativeOutput = normalizeOutput(native.stdout);
const moonbitOutput = normalizeOutput(moonbit.stdout);
const expectedOutput = `{
  "APP_NAME": "ledger",
  "BASE_URL": "https://api.example.test",
  "DISPLAY_NAME": "Zoë",
  "EMPTY": "",
  "GREETING": "Hello ledger",
  "HASH": "hash#literal",
  "INLINE": "note",
  "MULTILINE": "line one\\nline two",
  "LOG_LEVEL": "info"
}
`;

assert.equal(native.status, 0, native.stderr);
assert.equal(moonbit.status, 0, moonbit.stderr);
assert.equal(native.stderr, '');
assert.equal(moonbit.stderr, '');
assert.equal(nativeOutput, expectedOutput, 'pinned GoAWK output differs from the checked consumer result');
assert.equal(moonbitOutput, nativeOutput, 'MoonBit output differs from the independent GoAWK run');

const engineSha256 = sha256(await readFile(join(root, 'web', 'engine.mjs')));
const cliSha256 = sha256(await readFile(moonbitAwk));
const inputBytes = await readFile(inputFile);
const report = {
  utc: new Date().toISOString(),
  mode: 'live public consumer shell entrypoint: unmodified source, pinned GoAWK, and MoonBit AWK CLI',
  consumer: {
    project: sourcePin.project,
    release: sourcePin.release,
    commit: sourcePin.commit,
    license: sourcePin.license,
    sourceUrl: sourcePin.sourceUrl,
    sourceSha256: sourceHashes,
    input: 'examples/third-party/shdotenv-v0.14.0/consumer.env',
    inputSha256: sha256(inputBytes),
    inputBytes: inputBytes.length,
    invokedPath: 'src/shdotenv --format json --ignore-environment --sort --env consumer.env',
    scope: 'one normal dotenv parse invocation; the preserved shell script selects src/lib.awk plus src/parser.awk',
  },
  reference: {
    project: sourcePin.reference.project,
    release: sourcePin.reference.release,
    windowsAmd64ZipSha256: sourcePin.reference.windowsAmd64ZipSha256,
    versionOutput: referenceVersion.stdout.trim(),
    executableSha256: referenceSha256,
    executablePath: reference,
  },
  shell: {
    path: shell,
    sha256: shellSha256,
    versionOutput: shellVersion.stdout.trim(),
  },
  hostRuntime: {
    nodeVersion: process.version,
    platform: process.platform,
    architecture: process.arch,
  },
  moonbit: {
    moduleVersion: '0.10.2',
    compilerPin: toolchainPin,
    command: 'tools/awk.mjs selected through SHDOTENV_AWK',
    cliSha256,
    engineSha256,
  },
  compared: {
    nativeStatus: native.status,
    moonbitStatus: moonbit.status,
    rawStdoutEqual: native.stdout === moonbit.stdout,
    normalizedStdoutEqual: nativeOutput === moonbitOutput,
    newlineNormalization: 'CRLF to LF only; the pinned Windows GoAWK binary emits CRLF while the Node host emits LF',
    stderrEmpty: native.stderr === '' && moonbit.stderr === '',
    goawkRawBytes: Buffer.byteLength(native.stdout, 'utf8'),
    goawkRawSha256: sha256(Buffer.from(native.stdout, 'utf8')),
    moonbitRawBytes: Buffer.byteLength(moonbit.stdout, 'utf8'),
    moonbitRawSha256: sha256(Buffer.from(moonbit.stdout, 'utf8')),
    outputSha256: sha256(Buffer.from(nativeOutput, 'utf8')),
    output: nativeOutput,
    scenarios: 1,
    failed: 0,
  },
  limits: [
    'The input is a reproducible synthetic fixture, not an upstream fixture or private user data.',
    'This does not establish shdotenv adoption, migration by its author/users, full dialect coverage, or full AWK compatibility.',
    'The separate shdotenv export path is not exercised.',
  ],
};

await writeFile(join(root, 'evidence', 'shdotenv-consumer.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({consumer: sourcePin.project, commit: sourcePin.commit, scenarios: 1, matched: 1, failed: 0,
  rawStdoutEqual: report.compared.rawStdoutEqual, newlineNormalization: report.compared.newlineNormalization,
  sourceHashes, inputSha256: report.consumer.inputSha256, goawkSha256: referenceSha256,
  outputSha256: report.compared.outputSha256}));
