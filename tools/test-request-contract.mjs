import assert from 'node:assert/strict';
import {host_run_json, session_json} from '../web/engine.mjs';

const session = request => JSON.parse(session_json(JSON.stringify(request)));
let checks=0;
// Rejection must happen before a host opens a file, runs a command or writes.
for(const change of [
  ...[1.5,0,-1,1000000001,null,true,'20',{},[]].map(stepLimit=>({stepLimit})),
  {program:null},{separator:1},{inputMode:false},{outputMode:[]},
  {arguments:null},{arguments:['awk',7]},{variables:{count:2}},
  {environment:{PATH:null}},{variables:[]},
]) {
  const request={program:'BEGIN{print "must not execute"}',...change};
  let calls=0;
  const hosted=JSON.parse(host_run_json(JSON.stringify(request),()=>{calls++;return 'O';}));
  assert.equal(hosted.ok,false,JSON.stringify(change));assert.equal(calls,0);
  assert.equal(session({action:'open',...request}).ok,false);
  checks++;
}
for(const request of [null,[],3,{action:'open'}]) {
  assert.equal(session(request).ok,false);checks++;
}

// A fractional or overflowing ID must never alias, close or feed a live session.
const first=session({action:'open',program:'{print $0} END{print NR}'});
assert(first.ok);const id=first.session;
for(const invalid of [id+.5,id+4294967296,0,-1,null,true,String(id)]) {
  assert.equal(session({action:'close',session:invalid}).ok,false);
  assert.equal(session({action:'record',session:invalid,record:'wrong'}).ok,false);
  checks++;
}
assert.equal(session({action:'file',session:id,name:'sample'}).ok,true);
assert.equal(session({action:'record',session:id,record:'kept'}).output,'kept\n');
assert.equal(session({action:'end',session:id}).output,'1\n');checks++;

// Omission uses the documented default. A valid small exact budget must stop
// unbounded computation, not merely pass a schema check.
const stopped=session({action:'open',program:'BEGIN{while(1)x++}',stepLimit:20});
assert.equal(stopped.ok,false);assert.match(stopped.error,/execution step budget/i);checks++;
let output='';
const valid=JSON.parse(host_run_json(JSON.stringify({program:'BEGIN{print ARGV[1],v}',arguments:['awk','input'],variables:{v:'7'},stepLimit:100}),
  (action,value)=>{assert.equal(action,'write');output+=value;return 'O';}));
assert.equal(valid.ok,true,valid.error);assert.equal(output,'input 7\n');checks++;

// Host status conversion cannot truncate a fraction into a successful exit.
for(const status of ['1.5','2147483648','null','true']) {
  let text='';
  const result=JSON.parse(host_run_json(JSON.stringify({program:'BEGIN{print system("fixture")}',stepLimit:100}),
    (action,value)=>{
      if(action==='io'){assert.equal(JSON.parse(value).op,'system');return 'S'+status;}
      assert.equal(action,'write');text+=value;return 'O';
    }));
  assert.equal(result.ok,true,result.error);assert.equal(text,'-1\n');checks++;
}
for(const reply of [null,17,{},false]) {
  let output='';
  const result=JSON.parse(host_run_json(JSON.stringify({program:'BEGIN{print getline}',stepLimit:100}),
    (action,value)=>{if(action==='read')return reply;if(action==='write')output+=value;return 'O';}));
  assert.equal(result.ok,true,result.error);assert.equal(output,'-1\n');checks++;
}
console.log(JSON.stringify({checks,passed:true,scope:'strict typed bridge input, no IO on invalid open, session identity, execution budget and host status'}));
