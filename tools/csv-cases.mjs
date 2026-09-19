export const csvCases=[];
const add=(program,input='',extra={})=>csvCases.push({id:'csv-'+csvCases.length,program,input,mode:'csv',outputMode:'',...extra});
const report='BEGIN{FS="!";RS="END"}{printf "{%d:%d:%s}",NR,NF,RT;for(i=1;i<=NF;i++)printf "<%s>",$i;printf "\\nraw:%s\\n",$0}END{print "END",NR,FNR}';
const inputs=['','\n\n','\r\n\r\n','\r',' ','a,b\n1,2\n',',a,\n,,\n','"a,b","c"\n','"a""b",c\r\n','"a\nb",c\n','"a\r\nb\rc",d\r\n','a"b,c\n',' "a", b \n','"a"b,c\nnext,row','"unfinished\nnext,row','a,b\r','a,b\nlast,x','a,🙂\n象,2\n'];
for(const input of inputs)for(const [mode,sep] of [['csv',','],['tsv','\t'],['csv separator=|','|'],['csv separator=象','象']])add(report,input.replaceAll(',',sep),{mode});
for(const input of ['#comment\na,b\n#end\n','\n#c\nx,y\n',' #space\na,b\n','"#quoted",value\n','"a\n#inside",x\n','#only','a,b\n#last','##\n"x",y\n'])add(report,input,{mode:'csv comment=#'});
for(const mode of ['csv header','csv header comment=#','tsv header']){
  for(const input of ['x,y\n1,2\n','x,x\n1,2\n',',y\na,b\n','x,y\n','\n','x,y\n1,2,3\n4\n','#c\nx,y\n1,2\n']){
    add('{print NR,FNR,NF,@"x",@"y",@"",@"missing";for(i=1;i<=length(FIELDS);i++)printf "%d=<%s> ",i,FIELDS[i];print ""}',mode.startsWith('tsv')?input.replaceAll(',','\t'):input,{mode});
  }
}
for(const value of ['','a','a,b','a\nb','a\rb','a"b',' a','\ta','a ','\\.','0','象🙂','\u00a0x','a|b','a\tb'])for(const outputMode of ['csv','tsv','csv separator=|'])add(`BEGIN{print ${JSON.stringify(value)},"",7;ORS="!";OFS="?";print ${JSON.stringify(value)};printf "raw:%s",${JSON.stringify(value)}}`,'',{mode:'',outputMode});
for(const input of ['a,"b,c",d','"a\nb",c','\n\na,b\nnext,row','#comment\na,b','',',,','"a"b,c','a,b\r'])for(const explicit of [false,true])add(`BEGIN{FS="!";n=split(${JSON.stringify(input)},a${explicit?',","':''});print n;for(i=1;i<=n;i++)print i,a[i]}`);
for(const mode of ['', 'csv','tsv','csv header=false','csv header=true','csv header=','csv header header=false','csv separator=| separator=; comment=# header','csv separator=象','  csv  header  ','csv comment=🙂','tsv separator=,'])add('BEGIN{print "["INPUTMODE"]";INPUTMODE=INPUTMODE;print "["INPUTMODE"]"}', '',{mode});
for(const mode of ['bad','CSV','csv unknown','csv separator','csv separator=ab','csv separator="','csv separator=�','csv separator=| comment=|','csv comment','csv comment=ab','csv header=no','csv header=true=','csv trim'])add('BEGIN{print "unexpected"}','',{mode,error:true});
add('BEGIN{INPUTMODE="csv separator=\\u0000";print "unexpected"}','',{mode:'',error:true});
for(const mode of ['csv header','csv comment=#' ,'bad','csv separator=ab','csv separator="'])add('BEGIN{print "unexpected"}','',{mode:'',outputMode:mode,error:true});
for(const program of [
  '{print NF,$1,$-1,$-2,$-9;$-1="last,value";print NF,$0;$-9="ignored";print $0}',
  '{NF=4;$2="x,y";print;print $0;NF=1;print}',
  '{OFS="|";$1=$1;print;OUTPUTMODE="csv";$2=$2;print}',
  '{INPUTMODE="";FS="!";print NF,$1,$2}',
  '{print NF;INPUTMODE="";print NF,$1,$2}',
  '{INPUTMODE="tsv";print NF,$1,$2}',
  '{getline x;print x,NF,$1,$0}',
  '{print NF;getline x;print x,NF,$1,$0}',
  'BEGIN{getline x;print x,NF,$1,$0}',
  'BEGIN{getline;print NF,$1,$0}',
  'BEGIN{getline $2;print NF,$1,$0}',
  'BEGIN{$0="a,\\"b,c\\"";print NF,$1,$2;$0="";print NF}',
  '{print @"x";FIELDS[1]="changed";delete FIELDS;print @"x",length(FIELDS)}',
  'function f(name){return @name}{print f("x"),@("y"),"prefix" @"x"}',
])add(program,'x,y\na,"b,c"\nd,e\n',{mode:program.includes('@')?'csv header':'csv',outputMode:program.includes('NF=')?'csv':''});
for(const program of ['BEGIN{print @"x"}','{@"x"=3}','{@"x"++}','BEGIN{FIELDS=1}','BEGIN{INPUTMODE[1]=2}','BEGIN{OUTPUTMODE="csv";NF=-1}'])add(program,'x,y\n1,2\n',{mode:'csv header',error:true});
for(const args of [['--csv'],['-icsv','-H'],['-H','--csv'],['-v','INPUTMODE=tsv','-i','csv'],['-H'],['-i'],['-o'],['-v','OUTPUTMODE=tsv','-o','csv']])add('BEGIN{print INPUTMODE,OUTPUTMODE}{print NF,$1,$2}','x,y\n1,2\n',{mode:'',args,error:args.length===1&&['-H','-i','-o'].includes(args[0])});
const files={'a.csv':'x,y\n1,2\n','b.csv':'y,x\n3,4\n','emit.mjs':'process.stdout.write("x,y\\n1,2\\n");'};
add('{print FILENAME,NR,FNR,@"x",@"y"}','',{mode:'csv header',files,inputs:['a.csv','b.csv']});
add('BEGIN{INPUTMODE="csv header";while((getline<"a.csv")>0)print NF,@"x",NR;close("a.csv");while((getline<"b.csv")>0)print NF,@"x",NR}','',{files});
add('BEGIN{cmd="node emit.mjs";while((cmd|getline)>0)print NF,@"x",NR;print close(cmd)}','',{mode:'csv header',files});
add('BEGIN{print "a,b","c" >"out.csv";close("out.csv");while((getline<"out.csv")>0)print NF,$1,$2}','',{mode:'csv',outputMode:'csv',host:true});
// The pinned upstream has a BOM/raw-token bug. Keep that mismatch explicit;
// do not reproduce its extra bytes (including zero-filled buffer bytes) in $0.
for(const input of ['\ufeffa,b\n','\ufeffa,b\n1,2\n','\ufeffa,b'])add('{print NR,NF,$1,$2,"["$0"]"}',input,{knownDifference:'GoAWK 1.32 BOM raw-token/chunk behavior',expected:input.includes('1,2')?'1 2 a b [a,b]\n2 2 1 2 [1,2]\n':'1 2 a b [a,b]\n'});

add('{getline @"x"}', 'x,y\n1,2\n', {mode:'csv header'});
for(const input of ['"a",b\r','a,"b"\r','"a\r\nb",c\r','"a,b\r','a,\r','"a"\r'])add(report,input);

for(const target of ['x','a[++i]','$++i','NF','NR','FNR','RT'])add(`BEGIN{print (getline ${target}),NR,FNR,NF,$0,x,a[1],RT}`,'a,b\nc,d\n');
for(const target of ['x','a[++i]','$++i','NF','NR'])add(`BEGIN{print (getline ${target}<"a.csv"),NR,FNR,NF,$0,x,a[1],@"x";close("a.csv")}`,'',{mode:'csv header',files});
for(const mode of ['csv header','csv comment=#','tsv','csv separator=|'])for(const text of ['#skip\na,b\nnext,row','x|"y|z"','x\t"y\tz"'])add(`BEGIN{n=split(${JSON.stringify(text)},a);print n;for(i=1;i<=n;i++)print i,a[i]}`,'',{mode});
for(const program of [
  'BEGIN{OFMT="%.2f";CONVFMT="%.4f";print 1/3,1/7;$1=1/3;print;print $1}',
  'BEGIN{print 1/3,(OFMT="%.2f");print (OUTPUTMODE="tsv"),"a,b"}',
  'BEGIN{print ("20"<100);$0="20";print ($0<100);$1="20";print ($1<100)}',
  '{INPUTMODE="csv separator=|";$0="x|y";print NF,$1,$2}',
  '{FS="!";INPUTMODE="";print NF,$1,$2}',
  'function clear(a){delete a}{clear(FIELDS);print @"x",length(FIELDS)}',
  '{print @"x" @"y"}',
])add(program,'x,y\n1,2\n',{mode:'csv header',outputMode:'csv'});
add('BEGIN{INPUTMODE="csv";getline INPUTMODE;print INPUTMODE;getline;print NF,$1,$2}','tsv\na\tb\n');
add('BEGIN{getline OUTPUTMODE;print OUTPUTMODE,1/3}','csv\n');
add('{sub(/x/,"z",@"x")}','x,y\n1,2\n',{mode:'csv header',error:true});
add('{print NR,NF,length($1),$2}', '"'+('x\n'.repeat(150000))+'",end\n',{host:true});
add('END{print NR,FNR}', 'a,b\n'.repeat(70000),{host:true});

for(const program of [
  'BEGIN{OFMT="%.2f";CONVFMT="%.4f";$1=1/3;print $1,$0}',
  'BEGIN{$0="20";print ($0<100);$1=1/3;print ($0<100)}',
])add(program,'',{mode:''});
