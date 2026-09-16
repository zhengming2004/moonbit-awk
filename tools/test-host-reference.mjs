import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {sourceHashes} from './evidence.mjs';
const cli=fileURLToPath(new URL('./awk.mjs',import.meta.url));
const folder=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-awk-reference-'));
const cases=[];
const add=(args,input='',extra={})=>cases.push({id:'host-'+cases.length,args,input,...extra});
add(['-v','x=007','BEGIN{print x,x+0,(x==7);print ENVIRON["MOON_AWK_TEST"]}']);
add(['-v',String.raw`x=a\tb\nC`,'BEGIN{printf "%s",x}']);
add(['-F:', '-vFS=,','{print NF,$1,$2}'],'a,b:c\n');
add(['-vFS=,','-F:', '{print NF,$1,$2}'],'a,b:c\n');
add(['-F',String.raw`\t`,'{print NF,$1,$2}'],'a\tb\n');
add(['-f','one.awk','-f','two.awk','a.txt','b.txt']);
add(['BEGIN{print "start",x,ARGC} {print FILENAME,FNR,NR,x,$0} END{print "end",x}', 'x=1','a.txt','x=2','b.txt','x=3']);
add(['{print FILENAME,FNR,NR,$0} END{print "end",FILENAME,FNR,NR}','empty.txt','a.txt','empty.txt','b.txt']);
add(['{print FILENAME,FNR,NR,$0;nextfile} END{print "end",NR}','a.txt','b.txt']);
add(['function skip(){nextfile} {print FILENAME,FNR;skip();print "bad"} END{print NR}','a.txt','b.txt']);
add(['{print $0;exit 7} END{print "end",NR}','a.txt','missing.txt']);
add(['BEGIN{print "begin";exit 5} END{print "end"}','missing.txt']);
add(['BEGIN{print "begin"}','missing.txt']);
add(['BEGIN{print ARGC,ARGV[1],ARGV[2];delete ARGV[1]} {print FILENAME,$0}','missing.txt','b.txt']);
add(['BEGIN{ARGV[1]="b.txt";ARGC=2} {print FILENAME,$0}','missing.txt']);
add(['BEGIN{ARGV[2]="b.txt";ARGC=3} {print FILENAME,FNR,NR}','a.txt']);
add(['BEGIN{delete ARGV[1]} {print FILENAME,$0}','missing.txt'],'stdin record\n');
add(['{print FILENAME,FNR,NR,$0}','-','a.txt','-'],'stdin1\nstdin2\n');
add(['{print x,$0} END{print x}','x=9'],'a\nb\n');
add(['BEGIN{print "start"} END{print FILENAME,FNR,NR}','empty.txt']);
add(['BEGIN{print "start"} {print $0;print 1/zero} END{print "bad"}','a.txt'], '', {error:true});
add(['BEGIN{print "before";print 1/zero} END{print "bad"}'], '', {error:true});
add(['{print $0} END{print "before";print 1/zero}','a.txt'], '', {error:true});
add(['BEGIN{print "before"} {print} END{print "bad"}','missing.txt'], '', {error:true});
add(['BEGIN{exit -1}']);
add(['BEGIN{exit 257}']);
add(['BEGIN{exit 5} END{exit}']);
add(['BEGIN{exit 5} END{exit 9}']);
add(['{print NF,$0}'],'a\r\nb\nlast');
add(['{print FNR,NF,$1,$2}','unicode.txt']);
add(['{sum+=$2} END{print NR,sum}','large.txt']);
add(['{print $0}','large.txt']);
add(['{print $0; if(NR==3) nextfile}','large.txt','b.txt']);
add(['-f','-'], 'BEGIN{print "source from stdin"}\n');
add(['--','BEGIN{print "ok"}']);
add(['-v','bad','BEGIN{}'], '', {error:true});
add(['-f','absent.awk'], '', {error:true});
const golden=process.argv.includes('--golden');
let saved,version,binarySha256,references;
if(golden){saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-host-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);({version,binarySha256,references}=saved);}
else {
  const exe=process.env.GOAWK_REFERENCE;if(!exe)throw Error('Set GOAWK_REFERENCE to an official GoAWK executable');
  const r=spawnSync(exe,['-version'],{encoding:'utf8',windowsHide:true,timeout:5000});assert.equal(r.status,0,r.stderr);version=r.stdout.trim();binarySha256=createHash('sha256').update(fs.readFileSync(exe)).digest('hex');references=[];
}
const hash=s=>createHash('sha256').update(s).digest('hex');
const summarize=r=>({status:r.status&255,nativeStatus:r.status,output:r.stdout.length<=10000?r.stdout:null,outputLength:r.stdout.length,outputSha256:hash(r.stdout),hasError:Boolean(r.stderr)});
const failures=[];
try {
  for(const [name,content] of Object.entries({'a.txt':'a 2\nb 3\n','b.txt':'c 4\nd 5\n','empty.txt':'','unicode.txt':'象棋 2\n🙂 3\n','large.txt':'value 2\n'.repeat(600000),'one.awk':'BEGIN{print "begin"}\n{sum+=$2}','two.awk':'END{print NR,sum}'}))fs.writeFileSync(path.join(folder,name),content);
  for(let i=0;i<cases.length;i++){
    const test=cases[i], options={cwd:folder,input:test.input,encoding:'utf8',windowsHide:true,timeout:60000,maxBuffer:8*1024*1024,env:{...process.env,MOON_AWK_TEST:'fixture-value'}};
    if(!golden){const r=spawnSync(process.env.GOAWK_REFERENCE,['-c','-N','raw',...test.args],options);assert(!r.error&&!r.signal,String(r.error||r.signal));references.push(summarize(r));}
    const run=spawnSync(process.execPath,[cli,...test.args],options);assert(!run.error&&!run.signal,String(run.error||run.signal));const actual=summarize(run),reference=references[i];
    const same=actual.status===reference.status&&(golden&&saved.platform!==process.platform||actual.nativeStatus===reference.nativeStatus)&&actual.outputSha256===reference.outputSha256&&(!test.error||actual.hasError&&reference.hasError);
    if(!same)failures.push({test,actual,reference,stderr:run.stderr});
  }
  if(!golden)fs.writeFileSync(new URL('../evidence/awk-host-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,platform:process.platform,options:['-c','-N','raw'],cases,references},null,2)+'\n');
  const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,engineSha256:hash(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))),cliSha256:hash(fs.readFileSync(cli)),platform:process.platform,sourceSha256:sourceHashes(),failures};
  fs.writeFileSync(new URL(`../evidence/awk-host-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
  console.log(`${report.passed}/${report.total} GoAWK host comparisons agree (including 4.8 MB input/output)`);
  for(const failure of failures)console.log(JSON.stringify(failure));if(failures.length)process.exitCode=1;
} finally {
  const target=path.resolve(folder);
  if(path.dirname(target)!==path.resolve(os.tmpdir())||!path.basename(target).startsWith('moonbit-awk-reference-'))throw Error('unexpected fixture directory');
  fs.rmSync(target,{recursive:true,force:true});
}
