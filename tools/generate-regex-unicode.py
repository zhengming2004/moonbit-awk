"""Translate pinned Go Unicode range and folding data into MoonBit constants.

Only data is derived. The parser and matcher are independently implemented.
GoAWK v1.32.0 official Windows binary embeds Go 1.26.3 / Unicode 15.0.0.
"""
from pathlib import Path
import hashlib,json,re,sys

root=Path(__file__).resolve().parents[1]
source=root/'vendor/go-unicode-1.26.3/tables.go'
assert hashlib.sha256(source.read_bytes()).hexdigest()=='6a88d48746c4b2c471cc04ae40559694b734770212e6f5ea5f1962adb0c0bdb1'
text=source.read_text(encoding='utf-8')
assert 'const Version = "15.0.0"' in text

def block(name,kind):
    return re.search(r'var '+re.escape(name)+r' = '+kind+r'\{\n(.*?)\n\}',text,re.S).group(1)

def merge(rows):
    out=[]
    for low,high in sorted(rows):
        if out and low<=out[-1][1]+1:out[-1]=(out[-1][0],max(high,out[-1][1]))
        else:out.append((low,high))
    return out

def table(name,prefix='_'):
    raw=block(prefix+name,r'&RangeTable')
    triples=[tuple(int(x,0) for x in row) for row in re.findall(r'\{(0x[0-9a-f]+), (0x[0-9a-f]+), (\d+)\}',raw)]
    assert triples,name
    rows=[]
    for low,high,stride in triples:
        assert low<=high and stride>0 and (high-low)%stride==0
        rows.extend([(low,high)] if stride==1 else [(i,i) for i in range(low,high+1,stride)])
    return merge(rows)

def names(name):
    return re.findall(r'"([^"]+)":\s+(\w+),',block(name,r'map\[string\]\*RangeTable'))

categories=names('Categories');scripts=names('Scripts')
tables={name:table(value) for name,value in categories+scripts}
aliases=dict(re.findall(r'"([^"]+)":\s+"([^"]+)",',block('CategoryAliases',r'map\[string\]string')))
def canonical(s):return re.sub('[_ -]','',s).capitalize()
# Match the pinned parser's exact lookup: script names containing underscores
# are not lookup-normalized by Go 1.26.3 and are rejected by that reference.
lookup={name:tables[name] for name in tables if canonical(name)==name}
lookup['Lc']=tables['LC']
lookup.update({canonical(k):tables[v] for k,v in aliases.items()})
lookup['Any']=[(0,0x10ffff)];lookup['Ascii']=[(0,127)]
fold_tables={name:table(value,'') for name,value in names('FoldCategory')+names('FoldScript')}
lookup_folds={name:fold_tables[name] for name in lookup if name in fold_tables}
lookup_folds.update({canonical(k):fold_tables[v] for k,v in aliases.items() if v in fold_tables})
lookup_folds['Ascii']=[(0x17f,0x17f),(0x212a,0x212a)]

mapping={}
for low,high,a,b,c in re.findall(r'\{(0x[0-9A-F]+), (0x[0-9A-F]+), d\{([^,]+), ([^,]+), ([^}]+)\}\}',block('_CaseRanges',r'\[\]CaseRange')):
    low,high=int(low,16),int(high,16)
    for cp in range(low,high+1):
        upper=low+((cp-low)&~1) if a=='UpperLower' else cp+int(a)
        lower=low+((cp-low)|1) if b=='UpperLower' else cp+int(b)
        target=lower if lower!=cp else upper
        if target!=cp:mapping[cp]=target
for a,b in re.findall(r'\{(0x[0-9A-F]+), (0x[0-9A-F]+)\}',block('caseOrbit',r'\[\]foldPair')):
    mapping[int(a,16)]=int(b,16)
ascii_values=[int(s,16) for s in re.findall(r'0x[0-9A-F]+',block('asciiFold',r'\[MaxASCII \+ 1\]uint16'))]
assert len(ascii_values)==128
mapping.update(enumerate(ascii_values))
mapping={k:v for k,v in mapping.items() if k!=v}
for cp in mapping:
    seen=set();p=cp
    while p not in seen:seen.add(p);p=mapping.get(p,p)
    assert p==cp and len(seen)<=4,(cp,seen,p)

lines=['// Generated from Go 1.26.3 Unicode 15.0.0 data (BSD-3-Clause).',
       '// See vendor/go-unicode-1.26.3/LICENSE; regenerate with tools/generate-regex-unicode.py.',
       '///|','let regex_unicode_tables : Map[String, Array[(Int, Int)]] = {']
# Shared arrays avoid duplicating aliases in the compiled binary.
unique={}
for rows in lookup.values():unique.setdefault(tuple(rows),'regex_unicode_'+str(len(unique)))
for rows in lookup_folds.values():unique.setdefault(tuple(rows),'regex_unicode_'+str(len(unique)))
for name,rows in sorted(lookup.items()):lines.append('  '+json.dumps(name)+': '+unique[tuple(rows)]+',')
lines+=['}']
lines+=['','///|','let regex_unicode_property_fold : Map[String, Array[(Int, Int)]] = {']
for name,rows in sorted(lookup_folds.items()):lines.append('  '+json.dumps(name)+': '+unique[tuple(rows)]+',')
lines+=['}']
for rows,name in unique.items():
    lines+=['','///|',f'let {name} : Array[(Int, Int)] = [']
    lines+=['  ('+str(a)+', '+str(b)+'),' for a,b in rows]
    lines+= [']']
lines+=['','///|','let regex_unicode_fold : Array[(Int, Int)] = [']
lines+=['  ('+str(a)+', '+str(b)+'),' for a,b in sorted(mapping.items())]
lines+= [']','']
generated='\n'.join(lines)
target=root/'regex_unicode_data.mbt'
def tokens(s):return re.sub(r',(?=[\]\)}])','',re.sub(r'\s+','',re.sub(r'//[^\n]*','',s)))
if '--check' in sys.argv:assert tokens(target.read_text(encoding='utf-8'))==tokens(generated),'Unicode constants differ'
else:target.write_text(generated,encoding='utf-8',newline='\n')
print(json.dumps(dict(unicode='15.0.0',go='1.26.3',sourceSHA256=hashlib.sha256(source.read_bytes()).hexdigest(),lookupNames=len(lookup),foldLinks=len(mapping),tables=len(unique))))
