export const stringCases=[];
const q=JSON.stringify;
const add=(program,input='',error=false)=>stringCases.push({id:`string-${stringCases.length}`,program,input,separator:' ',error});
for(const value of ['','Hello WORLD 123','ßẞ','İı','ΣΟΣςσ','µΜμKKkſSs','ǄǅǆǇǈǉǊǋǌ','ᾀᾈᾳᾼ','ﬀﬁﬃﬄﬅﬆ','áÁǰΐ','𐐀𐐨𐒰𐓘','ᎠꭰᎡꭱ','ქართულიᲥ','ⲀⲁԀԁ','中文日本語😀','\tİ\nΣΟΣ\rß','Ɤɤ','A'.repeat(500)+'Σ'.repeat(500)]){
  add(`BEGIN{s=${q(value)};a=tolower(s);b=toupper(s);print length(s),length(a),length(b),a,b;print tolower(a),toupper(b),toupper(a),tolower(b),s}`);
  add(`function f(x){return toupper(tolower(x))}BEGIN{x=${q(value)};a[x]=tolower(x);print f(x),a[x],x,(tolower(x)==x),(toupper(x)==x)}`);
}
for(const program of [
  'BEGIN{for(i=0;i<32;i++){s=sprintf("A%cΣ",i);print length(s),tolower(s),toupper(s)}}',
  'BEGIN{print tolower(1/3),toupper(1/3);CONVFMT="%.3f";OFMT="%.2f";print tolower(1/3),toupper(1/3)}',
  'BEGIN{print "["tolower(x)"]","["toupper(x)"]";x=12;print tolower(x),toupper(x),x}',
  'BEGIN{x=tolower("001");y=toupper("001");print (x==1),(y==1),(x=="001"),(y=="001"),x+1,y+1}',
  'BEGIN{x=2;print tolower(x++),toupper(x++),x}',
  'BEGIN{ENVIRON["LANG"]="tr_TR.UTF-8";print tolower("İI"),toupper("ıi");print ("İ"~/(?i)i/),(tolower("İ")~/(?i)i/)}',
  'BEGIN{x="Σßİ𐐨";print sprintf("[%8s][%.3s]",tolower(x),toupper(x));print substr(toupper(x),2,2),index(tolower(x),"i")}',
  'BEGIN{s="AΣBİC𐐀";n=split(tolower(s),a,"");print n;for(i=1;i<=n;i++)printf "[%s]",a[i];print ""}',
  'BEGIN{s="ΣΣ𐐀";print match(tolower(s),/σ+/),RLENGTH;print gsub(/σ/,"X",s),s}',
  'function f(x){return tolower(x)} function g(x){return toupper(x)} BEGIN{s="ßΣİ𐐨";print f(g(s)),g(f(s)),s}',
])add(program);
for(const input of ['ΣΟΣ İı ßẞ 𐐀𐐨\n','010 001 1e2\n','Á é Ελληνικά\n','\u0000A\tΣ\r\n']){
  add('{a=tolower($1);b=toupper($2);print NR,NF,a,b,(a==10),(b==1);$1=a;$2=b;print NF,$0}',input);
  add('{s=tolower($0);print length(s),toupper(s),$0}',input);
}
for(const program of ['BEGIN{print tolower()}','BEGIN{print toupper(1,2)}','BEGIN{a[1]=1;print tolower(a)}','BEGIN{a[1]=1;print toupper(a)}'])add(program,'',true);
