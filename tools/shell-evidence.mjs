import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {sha256} from './evidence.mjs';

export function shellEvidence() {
  const key=Object.keys(process.env).find(key=>key.toUpperCase()==='PATH');
  const names=process.platform==='win32'?['sh.exe','sh']:['sh'];
  let executable;
  for(const directory of (process.env[key]||'').split(path.delimiter)) {
    for(const name of names) {
      const candidate=path.resolve(directory,name);
      if(fs.existsSync(candidate)&&fs.statSync(candidate).isFile()){executable=candidate;break;}
    }
    if(executable)break;
  }
  assert(executable,'These command tests need sh on PATH (on Windows, add Git/bin to this process PATH).');
  const result=spawnSync(executable,['--version'],{encoding:'utf8',windowsHide:true});
  // Some POSIX shells do not implement --version; record that result too.
  return {executable,sha256:sha256(fs.readFileSync(executable)),versionOutput:(result.stdout+result.stderr).trim(),versionStatus:result.status};
}

export function withoutShellPath() {
  return {...Object.fromEntries(Object.entries(process.env).filter(([key])=>key.toUpperCase()!=='PATH')),PATH:''};
}
