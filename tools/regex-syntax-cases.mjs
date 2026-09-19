// Deliberately authored grammar boundaries; expected results come only from
// the pinned native GoAWK binary, never from the MoonBit parser.
const patterns = new Map();
const add = (kind, values) => values.forEach(p => { if (!patterns.has(p)) patterns.set(p, kind); });
for (const count of ['0','00','01','1','2','10','999','1000','1001','999999999999999999999999']) {
  add('count', [count, `${count},`, `${count},2`, `1,${count}`].flatMap(c =>
    [`a{${c}}`, `a{${c}`, `a{${c}x}`, `{${c}}a`]));
}
for (const first of ['*','+','?','{0}','{1}','{2}','{2,3}']) {
  for (const second of ['*','+','?','??','{0}','{1}','{2}','{01}']) {
    add('adjacent', [`a${first}${second}`, `a${first}(?i)${second}`, `a${first}\\Q\\E${second}`]);
  }
}
add('nested', ['(a{50}){20}','(a{50}){21}','(a{32}){31}','(a{32}){32}',
  '(a{1000}){0}','(a{1000}){1}','(a{1000}){2}','(a{1000})*','(a{1000})+',
  '(a{2}){0,500}','(a{2}){0,501}','(a{2}){500,}','(a{2}){501,}',
  '((a{1000}){0}){1000}','(a{50}|b{60}){16}','(a{50}|b{60}){17}',
  '(a{50}b{50}){20}','(a{50}b{50}){21}','((a{10}){10}){10}','((a{10}){10}){11}']);
add('flags', ['a(?i)*','(?i)*','(?i){2}','(?i)a','a(?i)b','a(?i:)*','a(?:)*','(?i:)*',
  '(?i:a)b','(?i)a|b','(?i:a|b)c','a(?i)(?-i)+','(?i-m:a)','(?-:a)',
  '(?i-:a)','(?ii:a)','(?U:a+?)','(?P<name>a)+','(?<1>a)+','(?<a_b>a)+',
  '(?<a-b>a)','(?P<>a)','(?=a)','(?:)','()','a|','|a','a||b','a(?i)|b*']);
add('class', ['[[:]','[[:x]]','[[:digit]]','[[:digit:]','[[:digit:]]','[[:unknown:]]',
  '[[:^digit:]]','[[:digit:]x]','[[:x]a:]','[[:x]a]','[[]','[]]','[^]]',
  '[^^]','[^^a]','[a-]','[-a]','[a-b-c]','[b-a]','[a-[:digit:]]','[[:digit:]-a]',
  '[\\Qx\\E]','[[:x]\\Qab\\E','[[:x]\\Q]\\E','[[:x]\\Q\\E*']);
add('quote', ['\\Q\\E*','a\\Q\\E*','a*\\Q\\E*','a*\\Q\\E??','\\Qab\\E+',
  '\\Q.*[]{}()|^$\\E','\\Qx','\\Q\\E','\\Q\\E\\Q\\E','a{\\Q1\\E}',
  'a{1\\Q\\E}','a{1,\\Q2\\E}','a{1,2\\Q\\E}','(?\\Qi\\E)a','(?i\\Q\\E)a',
  '(?P<\\Qname\\E>a)','\\p{\\QL\\E}','\\x{\\Q41\\E}',
  'a\\Q*\\E+','a\\Q?\\E?','a{\\Q01\\E}','\\Qé𐐀\\E+',
  '(?i)\\QAb\\E+','a*\\Q\\E(?i)+','a*\\Q\\E\\Q\\E+']);

const samples = ['', 'a', 'A', 'aa', 'aaa', 'aaaaaa', 'ababa', 'ABab', 'b', 'a\nb',
  'a{01}', 'a{1001x}', 'a{1}', 'a{1,2}', 'a{2}{01}', '[', ']', ':', 'x', '-',
  '1', 'a*b', '.*[]{}()|^$', 'é𐐀𐐀'];
const quote = JSON.stringify;
for(const delimiter of ['(?i)','\\Q\\E']) {
  for(const count of [999,1000])add('tree-depth',['a'+(delimiter+'*').repeat(count)]);
}
export const regexSyntaxCases = [...patterns].flatMap(([pattern, kind], index) => {
  const long = kind === 'nested' || /\{(?:999|1000)[},]/.test(pattern);
  const inputs = kind === 'tree-depth' ? ['','a','aa'] : long ? ['', 'a', 'a'.repeat(1001), 'b'.repeat(1001)] : samples;
  return ['dynamic','literal'].map(context => ({
    id: `syntax-${index}-${context}`, kind, context, pattern, input:'', separator:' ',
    program: 'BEGIN{' + (context === 'dynamic' ? `p=${quote(pattern)};` : '') +
      inputs.map(s => `print match(${quote(s)},${context === 'dynamic' ? 'p' : '/'+pattern.replaceAll('/','\\/')+'/'}),RSTART,RLENGTH`).join(';') + '}',
    checks: inputs.length,
  }));
});
for (const [index, pattern] of ['a{01}','a{1001x}','a(?i)+','a*\\Q\\E+',
  'a{\\Q1\\E}','[[:]','[[:x]]','\\Qab\\E+'].entries()) {
  const input = 'lefta{01}right a{1001x} aaaa Aaa a{1} :x[ abbb tail\n';
  const p = quote(pattern);
  regexSyntaxCases.push(
    {id:`consumer-${index}-split-sub`, kind:'consumer', context:'dynamic', pattern,
      input, separator:' ', checks:1,
      program:`BEGIN{p=${p}}{n=split($0,a,p);print n;for(i=1;i<=n;i++)print i,a[i];s=$0;print sub(p,"<&>",s),s;s=$0;print gsub(p,"<&>",s),s}`},
    {id:`consumer-${index}-fs`, kind:'consumer', context:'fields', pattern,
      input, separator:pattern, checks:1,
      program:'{print NF;for(i=1;i<=NF;i++)print i,$i}'},
    {id:`consumer-${index}-rs`, kind:'consumer', context:'records', pattern,
      input, separator:' ', checks:1,
      program:`BEGIN{RS=${p}}{print NR,"<"$0">","<"RT">"}END{print NR}`},
  );
}
for(const [index,pattern] of ['a*','a?','x*','^','$','^|$','a|','a{0}','a*\\Q\\E+','(?i)a*'].entries()) {
  const input='abc\naaa\nxaaax\n\né𐐀aé\n';
  regexSyntaxCases.push(
    {id:`empty-fs-${index}`,kind:'consumer',context:'fields',pattern,input,separator:pattern,checks:5,
      program:'{print NR,NF;for(i=1;i<=NF;i++)print i,"<"$i">"}'},
    {id:`empty-split-${index}`,kind:'consumer',context:'split',pattern,input,separator:' ',checks:5,
      program:`{n=split($0,a,${quote(pattern)});print NR,n;for(i=1;i<=n;i++)print i,"<"a[i]">"}`},
  );
}
