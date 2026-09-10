"""Generate outputs using the installed GNU Awk; never invokes MoonBit."""
import json, os, pathlib, subprocess
root = pathlib.Path(__file__).resolve().parent.parent
cases = json.loads((root / 'tools/gawk-cases.json').read_text(encoding='utf-8'))
version = subprocess.run(['gawk', '--version'], text=True, capture_output=True, check=True).stdout.splitlines()[0]
results = []
for case in cases:
    run = subprocess.run(['gawk', '-F', case['separator'], '--', case['program']], input=case['input'],
                         text=True, capture_output=True, timeout=3, env={**os.environ, 'LC_ALL': 'C.UTF-8'})
    results.append({**case, 'output': run.stdout, 'exit_status': run.returncode, 'stderr': run.stderr})
(root / 'evidence/gawk-reference.json').write_text(json.dumps({'version':version, 'locale':'C.UTF-8', 'results':results},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'{len(results)} GNU Awk cases generated using {version}')
