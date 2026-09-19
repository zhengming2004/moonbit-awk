"""Select Unicode boundaries and folding orbits; expectations come from GoAWK."""
from pathlib import Path
import json,runpy,sys
root=Path(__file__).resolve().parents[1]
old=sys.argv;sys.argv=['generate-regex-unicode.py','--check']
data=runpy.run_path(str(root/'tools/generate-regex-unicode.py'));sys.argv=old
cases=[]
def add(program,input='',**extra):cases.append(dict(id='regex-'+str(len(cases)),program=program,input=input,separator=' ',**extra))
def q(value):return json.dumps(value,ensure_ascii=False)
lookups=data['lookup'];properties=0;folds=0
done=set()
for name,rows in sorted(lookups.items()):
    points=set([0,9,10,13,32,65,97,0x130,0x131,0x345,0x212a,0x1f600,0x10428,0x10ffff])
    duplicate=tuple(rows) in done
    for a,b in rows if not duplicate else rows[:4]+rows[-4:]:
        points.update([a-1,a,a+1,b-1,b,b+1])
    done.add(tuple(rows))
    points=sorted(cp for cp in points if 0<=cp<=0x10ffff and not 0xd800<=cp<=0xdfff)
    patterns=[r'\p{'+name+'}',r'\P{'+name+'}',r'[\p{'+name+'}]',r'[^\P{'+name+'}]',r'(?i)\p{'+name+'}',r'(?i)\P{'+name+'}',r'(?i)[\P{'+name+'}_]',r'\p{'+name.lower()+'}']
    setup=';'.join('p'+str(i)+'='+q('^'+p+'$') for i,p in enumerate(patterns))
    program='BEGIN{'+setup+'}{s=sprintf("%c",$1);print '+','.join('(s~p'+str(i)+')' for i in range(len(patterns)))+'}'
    for i in range(0,len(points),300):
        chunk=points[i:i+300];properties+=len(chunk)*len(patterns)
        add(program,'\n'.join(map(str,chunk))+'\n',kind='property',checks=len(chunk)*len(patterns),property=name)

mapping=data['mapping'];pairs=[]
for cp in sorted(mapping):
    target=mapping[cp]
    pairs.append((cp,target));pairs.append((target,cp))
    # Include nearby non-equivalent runes rather than only positive cases.
    pairs.append((cp,target+1))
fold_program=r'''{s=sprintf("%c",$2);p="(?i)^\\x{" sprintf("%x",$1) "}$";q="(?i)^[^\\x{" sprintf("%x",$1) "}]$";print (s~p),(s~q),match(s,p),RLENGTH}'''
for i in range(0,len(pairs),200):
    chunk=pairs[i:i+200];folds+=len(chunk)
    add(fold_program,''.join(str(a)+' '+str(b)+'\n' for a,b in chunk),kind='fold',checks=len(chunk)*4)

# Additional valid and invalid parser behavior, including classes, scopes,
# quoted atoms followed by quantifiers and named capture spelling.
patterns=[r'[^^]\Qab\E',r'[^^^]\Qab\E',r'[^\^]\Qab\E',r'[a-\x{2028}]',r'[\pL-\pN]',r'\pL+',r'\PN+',r'\p{^Greek}',r'\P{^Greek}',r'\p{Assigned}',r'\P{Assigned}',r'(?i)\p{Assigned}',r'\p{ Cased-Letter }',r'\p{Lower_case-Letter}',r'\p{ASCII}',r'(?i)\p{ASCII}',r'[[:ascii:]]+',r'[[:^alpha:]]+',r'(?i)[[:^upper:]x]+',r'[\pL\d_]+',r'[^\pL\d_]+',r'(?i)[^\P{Lu}]+',r'(?i)[\P{Lu}\p{Ll}]+',r'\x{1f600}+',r'[\x{10400}-\x{1044f}]',r'\Q[a+b].*\E+',r'a\Q\E*',r'\Qab\E+',r'\Qab\E{2}',r'\Q\E',r'\Q\E|a',r'(?<x>ab|a)+',r'(?P<1>ab|a)',r'(?P<a>x)(?<a>y)',r'(?i:Σ+)(?-i:σ+)',r'(?i)[a-z]+',r'(?i)[^k]+',r'(?i)[a-z\P{Ll}]+',r'(?i:é)|(?-i:É)',r'(?i)(?-i)a',r'(?i-m:α)',r'[[:^ascii:]\d]+',r'\077',r'\07',r'\0',r'\x{00000000000061}',r'\x{D800}',r'\x{10ffff}']
values=['xab','','abcABC','αΣσς','Kſİı','ßẞ','éÉ é','象棋𐀀𐐨','😀😀','[a+b].***','abbbb','x\ny','123_','µΜμ','Ǆǅǆ','\x00\x07?','𐐀𐐨','xy']
for pattern in patterns:
    # Batch input strings in one program. JSON escapes are valid AWK strings
    # except \u escapes; emit Unicode literally and use octal for NUL.
    vals=';'.join('a['+str(i+1)+']='+q(v).replace('\\u0000','\\000').replace('\\u0007','\\007') for i,v in enumerate(values))
    pattern_literal='/'+pattern.replace('/','\\/')+'/'
    program='BEGIN{'+vals+';for(i=1;i<='+str(len(values))+';i++){s=a[i];print match(s,'+pattern_literal+'),RSTART,RLENGTH,(s~'+pattern_literal+');print gsub('+pattern_literal+',"[&]",s),s}}'
    add(program,kind='semantics',checks=len(values)*2)
invalid=[r'[a-\p{Zl}]',r'[a-\p{Zp}]',r'\p',r'\P{}',r'\p{',r'\p{NoSuch}',r'\p{Greek',r'\p{White_Space}',r'\p{Old_Italic}',r'\p{Olditalic}',r'\p{Han=Yes}',r'\p{^}',r'\p{^^L}',r'\p{^ Lx}',r'\x',r'\x1',r'\xgg',r'\x{}',r'\x{110000}',r'\x{ffz}',r'\1',r'\8',r'\q',r'\é',r'[\Qx\E]',r'[\b]',r'[a-\pL]',r'[[:^unknown:]]',r'(?P<>a)',r'(?<é>a)',r'(?<a-b>a)',r'(?i-:a)',r'(?-)a',r'(?i-)a',r'(?--i)a',r'(?q)a',r'\Qabc',r'\Q\E*',r'[[:digit:]\Qx\E]']
for pattern in invalid:
    add('BEGIN{print ("abc"~/'+pattern+'/)}',error=True,kind='invalid')
for separator in [r'\p{Greek}+',r'(?i)\p{Lu}+',r'\Q::\E',r'[\p{Z}\p{P}]+']:
    add('BEGIN{FS='+q(separator)+'}{print NF;for(i=1;i<=NF;i++)print "["$i"]"}', 'aΣσb::C。d\u2003e\n',kind='fields')
    add('BEGIN{RS='+q(separator)+'}{print NR,"["$0"]","["RT"]"}', 'aΣσb::C。d\u2003e',kind='records')
    add('BEGIN{print split("aΣσb::C。d　e",a,'+q(separator)+');for(i=1;i<=length(a);i++)print "["a[i]"]"}',kind='split')
output=json.dumps(cases,ensure_ascii=False,indent=2)+'\n';target=root/'tools/regex-cases.json'
if '--check' in sys.argv:assert json.loads(target.read_text(encoding='utf-8'))==cases
else:target.write_text(output,encoding='utf-8',newline='\n')
print(json.dumps(dict(cases=len(cases),propertyChecks=properties,foldPairs=folds,totalChecks=sum(t.get('checks',1) for t in cases))))
