// Independently authored public-program probes; expected output is captured
// only from the pinned, separately installed native reference.
export const recordCases = [];
const add = (program, input = '', extra = {}) => recordCases.push({id: 'records-' + recordCases.length, program, input, separator: ' ', ...extra});
const dump = '{printf "R[%s]T[%s] NR=%d FNR=%d NF=%d",$0,RT,NR,FNR,NF;for(i=1;i<=NF;i++)printf " F[%s]",$i;print ""} END{printf "END[%s] %d %d\\n",RT,NR,FNR}';
for (const rs of ['\n', ':', '|', '.', '$', '象', '🙂', '', '::+', '[,:]+', 'x*', '^a', 'a|ab', 'ab|a', 'x|$', '(?m)^a', '(?-s).+', '\\bxx\\b']) {
  for (const input of ['', 'a', '\n', 'a\r\nb\rc\r', ':a::b:::c:', '象a象🙂b🙂', '\n\na:b\nc:d\n\n\ne:f\n', 'aaabcxx\naxx\nbab']) {
    add(`BEGIN{RS=${JSON.stringify(rs)}}` + dump, input);
  }
}
for (const fs of [' ', ':', '', '[:]+', '.', '象']) {
  for (const input of ['\n\na:b\nc:d\n', 'a:b\nc:d\n\n\ne:f\n', '\r\na:b\r\nc:d\r\n\r\nx\r\n', '象a\n象b\n\n']) {
    add(`BEGIN{RS="";FS=${JSON.stringify(fs)}}` + dump, input);
  }
}
for (const before of ['\n', ':', '', '::+', '[,:]+', '象']) {
  for (const after of ['\n', ':', '', 'x+', '象']) {
    add(`BEGIN{RS=${JSON.stringify(before)}} {printf "[%s]<%s> %d\\n",$0,RT,NF;RS=${JSON.stringify(after)}} END{print NR}`, 'a:b::cx\nd\n\nef象gh\n');
  }
}
for (const input of ['', '1 2\n', 'a b\nc d\ne f\n', '0007\n+2\nword\n', '象 🙂\n🙂 象\n', 'a\r\nb\rc\r']) {
  for (const program of [
    'BEGIN{print (getline x),NR,FNR,FILENAME,"[" $0 "]",NF,"[" x "]";print (getline),NR,FNR,"[" $0 "]",NF} {print "record",NR,FNR,$0} END{print "end",NR,FNR,(getline y),"[" y "]",RT}',
    'BEGIN{x="old";while((getline x)>0)print x,NR,FNR,(x==7),(x==2);print "eof",x,(getline x),x}',
    '{print "before",NR,NF,$0;print (getline x),NR,FNR,NF,$0,x;print (getline),NR,FNR,NF,$0} END{print NR,FNR,$0}',
    'function read(a,n){return getline a[n]} BEGIN{while(read(a,++n)>0)print n,a[n];print n,NR,length(a)}',
    'BEGIN{i=0;print (getline a[++i]),i;print (getline a[++i]),i;print (getline a[++i]),i;print length(a)}',
    'BEGIN{i=0;print (getline $++i),i,$0,NF;print (getline $i),i,$0,NF}',
    'BEGIN{print getline(x),x,NR;print getline 2,NR}',
    'BEGIN{exit 7} END{print (getline),NR,FNR,FILENAME,$0;exit 3}',
    '{print $0;exit} END{while((getline x)>0)print NR,FNR,x;print $0}',
    'BEGIN{NR=9;FNR=8;print (getline),NR,FNR;NR=100;FNR=7;print (getline),NR,FNR}',
  ]) add(program, input);
}
for (const rs of [':', '', '::+', '象']) add(`BEGIN{RS=${JSON.stringify(rs)};FS=":";while((getline)>0)printf "[%s]<%s> %d %d\\n",$0,RT,NF,NR}`, '\n\na:b::c象d\n\ne:f\n');
for (const program of [
  'BEGIN{print (0 && getline x),(1 || getline x),NR;print (1 ? getline x : 9),x,NR}',
  'BEGIN{while(getline>0)print}',
  'BEGIN{print (getline x) + 2,x}',
  'BEGIN{a[1]="old";print (getline a[1]),a[1];print (getline a[1]),a[1]}',
  'BEGIN{print (getline NF),NF,$0;print (getline NR),NR,FNR;print (getline RS),RS} {print NR,$0}',
  'function read(x){getline x;return x} BEGIN{x="global";print read(),x,NR}',
  'BEGIN{RT="custom";print RT,(getline),RT;RT="other";print (getline),RT}',
  'BEGIN{RS="[a"}',
  'BEGIN{getline x++}',
]) add(program, '2\n3\n:\na:b\n', {error: program.includes('"[a"') || program.includes('x++')});

for (const code of [9,10,11,12,13,32,133,160,5760,8192,8199,8202,8232,8233,8239,8287,12288,8203,65279]) {
  add('BEGIN{RS=":"} {print NF,$1,$2}', 'a'+String.fromCodePoint(code)+'b:');
}
for (const field of ['0','1','2','NF+1','++i','(1+2)','(-1)','10001','(sqrt(-1))']) {
  add(`BEGIN{$0="old record";print (getline $${field}),$0,NF,$1,$2,i}`, 'new input value\n');
}

for (const input of ['\n\n象🙂\n','\r\n象棋🙂\r\n','\n\n\n象🙂','\n🙂\n']) add('BEGIN{RS=""}'+dump,input);
