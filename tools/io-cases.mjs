export const ioCases=[];
const add=(program,extra={})=>ioCases.push({id:'io-'+ioCases.length,program,input:'main 1\nmain 2\n',...extra});
for(const mode of ['>','>>']) {
  add(`BEGIN{print "one" ${mode} "out.txt";print "two" ${mode} "out.txt";print close("out.txt");print close("out.txt")}`);
  add(`BEGIN{print "one" ${mode} "out.txt";print close("out.txt");print "two" ${mode} "out.txt";print close("out.txt")}`);
}
add('BEGIN{print "one">"out.txt";print "two">>"out.txt"}');
add('BEGIN{print "one">>"out.txt";print "two">"out.txt"}');
add('BEGIN{printf "%s:%04d","item",7>"out.txt";print "end">"out.txt"}');
add('{print >"out.txt"} END{print NR,close("out.txt")}');
add('BEGIN{print "one">"text one.txt";fflush("text one.txt");print "two">"out.txt";print fflush(),fflush(""),close("text one.txt"),close("out.txt")}');
add('BEGIN{print close("missing"),fflush("missing"),fflush("stdout"),fflush("stderr"),fflush()}');
add('BEGIN{print "one">"-";print "two">"/dev/stdout";print "warning">"/dev/stderr";print close("-"),close("/dev/stdout"),close("/dev/stderr")}');
add('BEGIN{print "before";print 1/zero>"out.txt";print "bad"}',{error:true});
add('BEGIN{print "before";printf "%q",1>"out.txt"}',{error:true});
add('BEGIN{print "before";print "bad">"absent/out.txt";print "after"}',{error:true});
add('BEGIN{while((getline x<"in.txt")>0)print "["x"]",NR,FNR,FILENAME,NF,RT;print x,(getline x<"in.txt"),close("in.txt");print (getline x<"in.txt"),x,close("in.txt")}');
add('BEGIN{while((getline<"in.txt")>0)print NR,FNR,FILENAME,NF,$1,$2,RT;print $0;print close("in.txt")} {print "main",NR,FNR,$0}');
for(const target of ['x','a[++i]','$++i','NF','NR','RT'])add(`BEGIN{i=0;print (getline ${target}<"in.txt"),i,NR,FNR,NF,$0,x,a[1],RT;print close("in.txt")}`);
add('BEGIN{x="old";print (getline x<"absent.txt"),x,NR,FNR;print (getline x<"absent.txt"),close("absent.txt")}');
add('BEGIN{print (getline x<"in.txt");print "bad">"in.txt"}',{error:true});
add('BEGIN{print "new">"out.txt";print (getline x<"out.txt")}',{error:true});
add('BEGIN{print "new">"out.txt";print close("out.txt");print (getline x<"out.txt"),x,close("out.txt")}');
add('BEGIN{while((getline x<"-")>0)print x,NR,FNR;print close("-");print (getline x<"-"),x} END{print NR}');
add('BEGIN{RS=":";RT="initial";while((getline x<"records.txt")>0)printf "[%s]<%s> %d\n",x,RT,NR;print close("records.txt")}');
add('BEGIN{RS="::+";while((getline x<"records.txt")>0)printf "[%s]<%s> %d\n",x,RT,NR;print close("records.txt")}');
add('BEGIN{RS="";FS=":";while((getline<"paragraph.txt")>0)printf "[%s]<%s> %d\n",$0,RT,NF;print close("paragraph.txt")}');
add('function read(a,i){return getline a[i]<"in.txt"} BEGIN{while(read(a,++n)>0)print a[n];print n,NR,close("in.txt")}');
add('BEGIN{f="out.txt";print 1+2>f;print (1>2)>f;print 1&&2>f;print 0?4:5>f;print close(f)}');
add('BEGIN{print (x=1),x>(x="out.txt");print x;close(x)}');
add('BEGIN{print 1,2>(OFS="out.txt");close("out.txt")}');
add('BEGIN{print 1/3>(OFMT="out.txt");close("out.txt")}');
add('BEGIN{print "a">("out" ".txt");print "b">"out" ".txt";close("out.txt")}');
add('BEGIN{f="in";print (getline x<f ".txt"),x,close(f)}');
add('BEGIN{f="in";print (getline x<(f ".txt")),x,close("in.txt")}');
add('BEGIN{print 9>"out.txt";print fflush("out.txt");print (getline x<"./out.txt"),x;close("out.txt");close("./out.txt")}');
add('BEGIN{print 9>"out.txt";print (getline x<"./out.txt"),x;print close("out.txt"),close("./out.txt")}');
for(const code of [0,3,7]) {
  const command=`node helper.mjs emit ${code}`;
  add(`BEGIN{cmd=${JSON.stringify(command)};while((cmd|getline x)>0)print x,NR,FNR;print (cmd|getline x),close(cmd),close(cmd);print (cmd|getline x),x;print close(cmd)}`);
  add(`BEGIN{cmd=${JSON.stringify(`node helper.mjs copy ${code}`)};print "one"|cmd;printf "%s\n","two"|cmd;print close(cmd)}`);
  add(`BEGIN{print "before";print system(${JSON.stringify(command)});print "after"}`);
}
add('BEGIN{cmd="node helper.mjs emit 0";while(cmd|getline)print $1,$2,NF,NR;print close(cmd)}');
add('BEGIN{cmd="node helper.mjs emit 0";print ((cmd|getline x)>0),x;print (cmd|getline x)+2,x;print close(cmd)}');
add('BEGIN{cmd="node helper.mjs emit 0";cmd|getline a[++i];cmd|getline $++i;print i,a[1],$0,NF,NR;print close(cmd)}');
add('BEGIN{cmd="node helper.mjs copy 0";print "one"|cmd;print "two"|cmd;print fflush(cmd);print close(cmd)}');
add('BEGIN{print "one">"out.txt";print system("node helper.mjs inspect out.txt");print "two">"out.txt";print close("out.txt")}');
add('BEGIN{cmd="node helper.mjs emit 0";print (cmd|getline x),x;print "bad"|cmd}',{error:true});
add('BEGIN{cmd="node helper.mjs copy 0";print "one"|cmd;print (cmd|getline x)}',{error:true});
add('BEGIN{print system(""),close(""),fflush("")}');
add('BEGIN{print system("moonbit_missing_executable_93271")}');
add('BEGIN{cmd="moonbit_missing_executable_93271";print (cmd|getline x),x;print close(cmd)}');
add('BEGIN{cmd="node helper.mjs emit 0";cmd|getline x;print x;exit 4} END{print (cmd|getline y),y;print close(cmd)}');
add('BEGIN{print "one">"out.txt";print "before";print 1/zero}',{error:true});
add('BEGIN{cmd="node helper.mjs copy 0";print "one"|cmd;print 1/zero}',{error:true});
add('BEGIN{for(i=0;i<300000;i++)print "value" >"out.txt";print close("out.txt");while((getline x<"out.txt")>0)n++;print n,close("out.txt")}');
add('BEGIN{cmd="node helper.mjs large 0";while((cmd|getline x)>0)n++;print n,close(cmd)}');
add('BEGIN{cmd="node helper.mjs copy 0";for(i=0;i<180000;i++)print "abcdefghi"|cmd;print close(cmd)}');
for(const program of ['BEGIN{system()}','BEGIN{close()}','BEGIN{fflush(1,2)}','BEGIN{print system}','BEGIN{fflush[1]=2}','BEGIN{1|2}','BEGIN{printf >"out.txt"}']) add(program,{error:true});
add('BEGIN{cmd="node helper.mjs closed";printf ""|cmd;system("node helper.mjs waitmarker");print "one"|cmd;print close(cmd)}');
add('BEGIN{cmd="node helper.mjs closed";printf ""|cmd;system("node helper.mjs waitmarker");for(i=0;i<100000;i++)print "abcdefghi"|cmd}',{error:true});
add('BEGIN{cmd="-";print (cmd|getline x),close(cmd)}');
add('BEGIN{print (getline x<"-"),x;cmd="-";print "one"|cmd;print close(cmd);print (getline x<"-"),x}',{input:'one\ntwo\n'});
for(const program of [
  'BEGIN{print system("ignored"),system("ignored again")}',
  'BEGIN{cmd="ignored";print (cmd|getline x),x,close(cmd);print (cmd|getline x),close(cmd)}',
  'BEGIN{cmd="ignored";print "one"|cmd;print "two"|cmd;print fflush(cmd),close(cmd),close(cmd)}',
  'BEGIN{print "one"|"ignored";print "done"}',
])add(program,{missingShell:true});
export const helperSource=`import fs from 'node:fs';
const [mode,arg]=process.argv.slice(2);
if(mode==='emit'){process.stdout.write('alpha 2\\nbeta 3\\n');process.exitCode=Number(arg);}
else if(mode==='copy'){process.stdin.pipe(process.stdout);process.stdin.on('end',()=>{process.exitCode=Number(arg);});}
else if(mode==='inspect'){process.stdout.write(fs.readFileSync(arg));}
else if(mode==='closed'){fs.closeSync(0);fs.writeFileSync('closed.marker','done');setTimeout(()=>{process.exitCode=3;},200);}
else if(mode==='waitmarker'){for(let i=0;!fs.existsSync('closed.marker')&&i<2500;i++)await new Promise(r=>setTimeout(r,2));if(!fs.existsSync('closed.marker'))process.exitCode=7;}
else if(mode==='large'){for(let i=0;i<180000;i++)process.stdout.write('abcdefghi\\n');process.exitCode=Number(arg);}
`;
export const ioFixtures={'in.txt':'a 2\nb 3\n','other.txt':'c 4\nd 5\n','out.txt':'initial\n','records.txt':':a::b:::c:','paragraph.txt':'\n\na:b\nc:d\n\n\ne:f\n','helper.mjs':helperSource};
