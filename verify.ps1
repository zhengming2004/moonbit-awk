param([string]$MoonPath)
$ErrorActionPreference='Stop'
if (-not $MoonPath) {
  $available=Get-Command moon -ErrorAction SilentlyContinue
  if ($available) { $MoonPath=$available.Source }
  else { throw 'Install MoonBit or pass -MoonPath with the absolute moon.exe path.' }
}
$env:MOON_HOME=Split-Path (Split-Path $MoonPath -Parent) -Parent
$env:PATH="$(Split-Path $MoonPath -Parent);$env:PATH"
Push-Location $PSScriptRoot
try {
  & $MoonPath fmt
  if ($LASTEXITCODE -ne 0) {throw 'format failed'}
  & $MoonPath info
  if ($LASTEXITCODE -ne 0) {throw 'API generation failed'}
  & $MoonPath check --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'check failed'}
  & $MoonPath test --target wasm-gc --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'tests failed'}
  & $MoonPath test --target js --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'JS tests failed'}
  & $MoonPath build --target js --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'build failed'}
  & $MoonPath run cmd/main
  if ($LASTEXITCODE -ne 0) {throw 'example failed'}
  $engine=Get-ChildItem '_build/js' -Recurse -File | Where-Object { $_.Name -in @('main.js','web.js') -and $_.FullName -match '[\\/]cmd[\\/]web[\\/]' } | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if (-not $engine) {throw 'Missing browser engine'}
  Copy-Item -LiteralPath $engine.FullName -Destination 'web/engine.mjs' -Force
  node tools/test-demo.mjs
  if ($LASTEXITCODE -ne 0) {throw 'browser engine test failed'}
  node tools/test-cli.mjs
  if ($LASTEXITCODE -ne 0) {throw 'CLI test failed'}
  node tools/test-awk-cli.mjs
  if ($LASTEXITCODE -ne 0) {throw 'AWK CLI test failed'}
  node tools/generate-record-tests.mjs --check
  if ($LASTEXITCODE -ne 0) {throw 'record generation check failed'}
  node tools/test-pull-host.mjs
  if ($LASTEXITCODE -ne 0) {throw 'pull host checks failed'}
  node tools/test-record-reference.mjs --golden
  if ($LASTEXITCODE -ne 0) {throw 'record reference replay failed'}
  node tools/test-session.mjs
  if ($LASTEXITCODE -ne 0) {throw 'session bridge test failed'}
  node tools/test-reference.mjs --golden
  if ($LASTEXITCODE -ne 0) {throw 'GoAWK core replay failed'}
  node tools/test-host-reference.mjs --golden
  if ($LASTEXITCODE -ne 0) {throw 'GoAWK host replay failed'}
  node tools/test-gawk.mjs
  if ($LASTEXITCODE -ne 0) {throw 'GNU Awk reference comparison failed'}
  node tools/robustness.mjs
  if ($LASTEXITCODE -ne 0) {throw 'robustness failed'}
  node tools/benchmark.mjs
  if ($LASTEXITCODE -ne 0) {throw 'benchmark failed'}
} finally {Pop-Location}
