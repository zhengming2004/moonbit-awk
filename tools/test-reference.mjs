import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
import {isDeepStrictEqual} from 'node:util';
import {createHash} from 'node:crypto';
import {execute} from '../web/engine.mjs';
import {sourceHashes} from './evidence.mjs';
const cases=JSON.parse(fs.readFileSync(new URL('gawk-cases.json',import.meta.url),'utf8')).map(({id,program,input,separator,unordered})=>({id,program,input,separator,unordered}));
const add=(program,input='',extra={})=>cases.push({id:'runtime-'+cases.length,program,input,separator:' ',...extra});
for(const value of ['0','-0','1','-1','1.25','1.5','2.5','-2.5','1/3','0.00001','0.00009999999','9.999999','999999.9','1e20','1e-300','1.23456789012345'])for(const format of ['%g','%.2g','%#g','%.0f','%08.2f','%+.6e','%-12.3G','%d','%x','%s'])add(`BEGIN {printf "${format}\\n",${value}}`);
for(const format of ['%.2f','%g','%s','%d','%08x'])add(`BEGIN {OFMT="${format}";CONVFMT="${format}"; x=1/3;print x,(x ""),12}`);
for(const program of ['BEGIN {printf "%*.*f|%%|%c|%.2s\\n",8,2,1.25,65,"象棋很好"}','BEGIN {print sprintf("%#x:%#o:%-5s",31,9,"x")}','BEGIN {printf "%u\\n",-1}'])add(program);
add('BEGIN {printf "%2$s %1$d\\n",7,"x"}', '', {error:true});

for(const pattern of ['a','a|ab','ab|a','a*','a+','a?','a{2,3}','(ab|a)+','^','^a','$','a$','^$','[a-z]+','[^a]+','[[:digit:]]+','[[:alpha:]]+','a.*b','(a?)*','[.]','\\d+','[a-]','[-a]','[]a]'])for(const value of ['','ababa','123 abc','a\nb','象棋a'])add(`BEGIN{s=${JSON.stringify(value)};print match(s,/${pattern}/),RSTART,RLENGTH,(s~/${pattern}/),(s!~/${pattern}/)}`);
for(const pattern of ['a','a|ab','ab|a','a*','x*','^','$','^|$','[0-9]+','(.)'])for(const value of ['','ababa','aa12b34'])add(`BEGIN{s=${JSON.stringify(value)};n=gsub(/${pattern}/,"[&]",s);print n,s}`);
for(const pattern of [' ',':','::','[,:]+','x*',''])add(`BEGIN {n=split(" a::b,c ",a,${JSON.stringify(pattern)});print n;for(i=1;i<=n;i++)printf "[%s]",a[i]}`);
for(const program of [
'BEGIN{s=" a b ";n=split(s,a,/ /); print n,a[1],a[2],a[3],a[4]}',
'BEGIN{s="a.b";print sub(/\\./,"!",s),s}',
'BEGIN{print "aa"~/a/, "a"!~/b/,6/2,/a/}',
'function twice(x){return x*2} BEGIN{print twice(3),twice(1.5)}',
'function fact(n){if(n<2)return 1;return n*fact(n-1)} BEGIN{print fact(8)}',
'function f(x,local){local=9;x=7;return x+local} BEGIN{x=1;local=2;print f(x),x,local}',
'function f(a){a[1]+=3;return a[1]} BEGIN{a[1]=2;print f(a),a[1]}',
'function f(a){return g(a)} function g(b){b[1]=9;return length(b)} BEGIN{print f(x),x[1]}',
'function f(a,b){a[1]=2; b[1]=3; return a[1]} BEGIN{print f(x,x),x[1]}',
'function f(x,a){a[1]=x;return a[1]} BEGIN{print f(3),f(7)}',
'function f(){x=9;return} BEGIN{x=1;print "[" f() "]",x}',
'function f(x){return x+g()} function g(){return x} BEGIN{x=9;print f(2)}',
'function f(n,a){if(n==0)return a[1];a[1]++;return f(n-1,a)} BEGIN{print f(5,a)}',
'function f(x){if(x)return "y";return "n"} BEGIN{printf("%s:%s\\n",f(1),f(0))}',
])add(program);
add('function skip(){next} {skip();print "bad"} END{print NR}', 'x\n'.repeat(150));
add('function stop(){exit 7} {print $0;stop()} END{print "end",NR}','a\nb\n');
add('function hit(){return $0~/a/} hit() {print $0}','abc\nx\n');
add('BEGIN{FS="[,:]+"} {print NF,$1,$2,$3}','a,,b:c\n');
for(const program of ['function f(a,a){} BEGIN{}','BEGIN{print missing(1)}','function f(a){a[1]=1;print a} BEGIN{}','function f(a){a[1]=1} BEGIN{f(1)}','BEGIN{return 1}','function f(){break} BEGIN{}','BEGIN {print match("x",/[z-a]/)}','BEGIN {print match("x",/*a/)}','function f(a){} BEGIN{f(1,2)}'])add(program,'',{error:true});

for(const pattern of [String.raw`\d+`,String.raw`\w+`,'(?i)a','(?i:ab)c','(?i)k','(?i)s','(?i)σ','(?m)^a','(?-s)a.b','(?:ab|a)+'])for(const value of ['Aabc','AbC','Kſςσ','x\na','a\nb'])add(`BEGIN{s=${JSON.stringify(value)};print match(s,/${pattern}/),RLENGTH}`);
for(const program of [
'BEGIN{print sqrt(-1),log(0),exp(10000),atan2(1,1),sin(0),cos(0)}',
'BEGIN{print 1e400,1e-400,0x10,077}',
'BEGIN{srand(7);a=rand();print (a>=0&&a<1);srand(7);print (a==rand());print srand(9)}',
'BEGIN{x="a b"; print length(x);printf("%s:%d\\n",x,7)}',
'function swap(a,x,y,t){t=a[x];a[x]=a[y];a[y]=t} BEGIN{a[1]="x";a[2]="y";swap(a,1,2);print a[1],a[2]}',
'function q(a,lo,hi,i,j,p,t){i=lo;j=hi;p=a[int((lo+hi)/2)];while(i<=j){while(a[i]<p)i++;while(a[j]>p)j--;if(i<=j){t=a[i];a[i]=a[j];a[j]=t;i++;j--}};if(lo<j)q(a,lo,j);if(i<hi)q(a,i,hi)} BEGIN{n=split("7 3 1 9 2 8 4",a);q(a,1,n);for(i=1;i<=n;i++)print a[i]}',
'BEGIN{s=" a  b ";n=gsub(/x/,"y",s);print n,s}',
'BEGIN{a[1]=7;print length(a);delete a;print length(a)}',
])add(program);
for(const value of ['1e400','-1e400','1e-400','Inf','inf','+Inf','-Inf','NaN','nan','+NaN','-NaN','Infinity','nanx','infinite','infinityx','0x10','-0x10','0x1.8p2','0x1.8','0xg','1e400x','1e+','0b10','0o77','1_000','0x1.fffffffffffffp1023','0x1.fffffffffffff8p1023','0x1p-1074','0x1p-1075','0x1.0000000000000001p-1075','0x1.00000000000008p0','0x1.000000000000080001p0'])add('{print $0+0,($0==16),($0==6),($0==0),($0==1e400),($0<0)}',value+'\n');
add('BEGIN{x=sqrt(-1);print (x==x),(x!=x),(x<0),(x>0),(x<=0),(x>=0)}');
for(const pattern of [String.raw`\s`,String.raw`[\d]`,String.raw`[\D]`,String.raw`[a\w]`,String.raw`[^\W]`,String.raw`[\S]`])for(const value of ['\u000b','5','_', '象'])add(`BEGIN{print (${JSON.stringify(value)}~/${pattern}/)}`);
add('{print NF,$0}', 'a\r\nb\nlast\r');

const golden=process.argv.includes('--golden');let references,version,binarySha256;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/awk-reference-vectors.json',import.meta.url),'utf8'));if(!isDeepStrictEqual(saved.cases,JSON.parse(JSON.stringify(cases))))throw Error('Golden case mismatch');({references,version,binarySha256}=saved);}
else{
 const exe=process.env.GOAWK_REFERENCE;if(!exe)throw Error('Set GOAWK_REFERENCE to the official GoAWK executable');
 const info=spawnSync(exe,['-version'],{encoding:'utf8',windowsHide:true,timeout:5000});if(info.status!==0)throw Error(info.stderr||String(info.error));version=info.stdout.trim();binarySha256=createHash('sha256').update(fs.readFileSync(exe)).digest('hex');
 references=cases.map(test=>{
  const r=spawnSync(exe,['-c','-N','raw','-F',test.separator,test.program],{input:test.input,encoding:'utf8',windowsHide:true,timeout:5000,maxBuffer:2*1024*1024});if(r.error||r.signal)throw Error(String(r.error||r.signal));
  return {output:r.stdout,exit_status:r.status,error:r.stderr};
 });
 fs.writeFileSync(new URL('../evidence/awk-reference-vectors.json',import.meta.url),JSON.stringify({version,binarySha256,options:['-c','-N','raw'],cases,references},null,2)+'\n');
}
const failures=[];cases.forEach((test,i)=>{
 const raw=execute(test.program,test.input,test.separator),actual=raw.startsWith('ERROR:')?{error:raw}:JSON.parse(raw),reference=references[i];
 const norm=s=>test.unordered?s.trimEnd().split('\n').sort().join('\n'):s;
 const same=test.error?Boolean(actual.error)&&reference.exit_status!==0:!actual.error&&norm(actual.output)===norm(reference.output)&&actual.exit_status===reference.exit_status;
 if(!same)failures.push({test,actual,reference});
});
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live GoAWK',version,binarySha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,engineSha256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),sourceSha256:sourceHashes(),failures};
fs.writeFileSync(new URL(`../evidence/awk-reference-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} GoAWK reference cases agree`);for(const f of failures.slice(0,30))console.log(JSON.stringify(f));if(failures.length)process.exitCode=1;
