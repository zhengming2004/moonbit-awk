"""Generate simple upper/lower range data from the pinned, licensed Go table."""
from pathlib import Path
import hashlib,json,re,sys
root=Path(__file__).resolve().parents[1]
data=(root/'vendor/go-unicode-1.26.3/tables.go').read_bytes()
assert hashlib.sha256(data).hexdigest()=='6a88d48746c4b2c471cc04ae40559694b734770212e6f5ea5f1962adb0c0bdb1'
body=re.search(r'var _CaseRanges = \[\]CaseRange\{\n(.*?)\n\}',data.decode(),re.S).group(1)
rows=[];changed=set()
for low,high,upper,lower,title in re.findall(r'\{(0x[0-9A-F]+), (0x[0-9A-F]+), d\{([^,]+), ([^,]+), ([^}]+)\}\}',body):
    low,high=int(low,16),int(high,16)
    assert not rows or rows[-1][1]<low
    assert (upper=='UpperLower')==(lower=='UpperLower')
    rows.append((low,high,0x110000 if upper=='UpperLower' else int(upper),0x110000 if lower=='UpperLower' else int(lower)))
    for cp in range(low,high+1):
        a=low+(cp-low)//2*2 if upper=='UpperLower' else cp+int(upper)
        b=low+(cp-low)//2*2+1 if lower=='UpperLower' else cp+int(lower)
        for mapped in (a,b):
            assert 0<=mapped<=0x10ffff and not 0xd800<=mapped<=0xdfff
            assert (cp<=0xffff)==(mapped<=0xffff),'conversion changes UTF-16 length'
        if a!=cp or b!=cp:changed.add(cp)
lines=['// Generated Go 1.26.3 Unicode 15.0.0 simple case data (BSD-3-Clause).',
       '// See vendor/go-unicode-1.26.3/LICENSE; tools/generate-string-unicode.py.',
       '// Columns: first, last, upper delta, lower delta. 0x110000 denotes alternating pairs.',
       '///|','let unicode_string_ranges : Array[(Int, Int, Int, Int)] = [']
lines+=['  ('+', '.join(map(str,row))+'),' for row in rows]
lines+= [']',''];result='\n'.join(lines);target=root/'unicode_string_data.mbt'
def tokens(s):return re.sub(r',(?=[\]\)}])','',re.sub(r'\s+','',re.sub(r'//[^\n]*','',s)))
if '--check' in sys.argv:assert tokens(target.read_text(encoding='utf-8'))==tokens(result),'simple-case constants differ'
else:target.write_text(result,encoding='utf-8',newline='\n')
print(json.dumps(dict(unicode='15.0.0',go='1.26.3',ranges=len(rows),nonidentityScalars=len(changed),sourceSHA256=hashlib.sha256(data).hexdigest())))
