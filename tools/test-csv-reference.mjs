import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {csvCases as cases} from './csv-cases.mjs';
import {sourceHashes,sha256} from './evidence.mjs';
import {shellEvidence} from './shell-evidence.mjs';
const golden=process.argv.includes('--golden'),shell=shellEvidence();
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
const folder=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-awk-csv-'));
let references=[],version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-csv-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);({references,version,binarySha256}=saved);}
else {assert(process.env.GOAWK_REFERENCE,'Set GOAWK_REFERENCE');const r=spawnSync(process.env.GOAWK_REFERENCE,['-version'],{encoding:'utf8',windowsHide:true});assert.equal(r.status,0);version=r.stdout.trim();binarySha256=sha256(fs.readFileSync(process.env.GOAWK_REFERENCE));}
function execute(test,i,native){
  const cwd=path.join(folder,`${i}-${native?'native':'current'}`);fs.mkdirSync(cwd);
  for(const [name,text] of Object.entries(test.files||{}))fs.writeFileSync(path.join(cwd,name),text);
  const args=[...(test.mode?['-i',test.mode]:[]),...(test.outputMode?['-o',test.outputMode]:[]),...(test.args||[]),test.program,...(test.inputs||[])];
  const r=spawnSync(native?process.env.GOAWK_REFERENCE:process.execPath,native?['-c','-N','raw',...args]:[cli,...args],{cwd,input:test.input,encoding:'utf8',windowsHide:true,timeout:20000,maxBuffer:5000000});
  assert(!r.error&&!r.signal,String(r.error||r.signal));
  const files={};for(const name of fs.readdirSync(cwd).sort()){const text=fs.readFileSync(path.join(cwd,name),'utf8');if(text!==test.files?.[name])files[name]=text;}
  return {output:r.stdout,status:r.status&255,hasError:Boolean(r.stderr),files,error:r.stderr.slice(0,3000)};
}
try {
  const failures=[],knownDifferences=[];
  let matched=0;
  for(const [i,test] of cases.entries()){
    if(!golden)references.push(execute(test,i,true));
    const actual=execute(test,i,false),reference=references[i];
    const comparable=r=>({output:r.output,status:r.status,hasError:r.hasError,files:r.files});
    try {
      if(test.knownDifference){assert.equal(actual.output,test.expected);assert.equal(actual.status,0);assert(!actual.hasError);assert.notDeepEqual(comparable(actual),comparable(reference));knownDifferences.push({id:test.id,reason:test.knownDifference,actual,reference});}
      else if(test.error){assert.notEqual(reference.status,0);assert.notEqual(actual.status,0);matched++;}
      else {assert.deepEqual(comparable(actual),comparable(reference));matched++;}
    }catch{failures.push({test,actual,reference});}
  }
  if(!golden)fs.writeFileSync(new URL('../evidence/awk-csv-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,platform:process.platform,shell,options:['-c','-N','raw'],cases,references},null,2)+'\n');
  const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,shell,total:cases.length,matched,known:knownDifferences.length,failed:failures.length,sourceSha256:sourceHashes(),knownDifferences,failures};
  fs.writeFileSync(new URL(`../evidence/awk-csv-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
  console.log(`${matched}/${cases.length} CSV comparisons agree; ${report.known} documented differences; ${report.failed} failures`);
  for(const failure of failures.slice(0,30))console.log(JSON.stringify(failure));if(failures.length)process.exitCode=1;
}finally{
  const target=path.resolve(folder);if(path.dirname(target)!==path.resolve(os.tmpdir())||!path.basename(target).startsWith('moonbit-awk-csv-'))throw Error('unexpected fixture directory');fs.rmSync(target,{recursive:true,force:true});
}
