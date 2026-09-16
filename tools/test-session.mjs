import assert from 'node:assert/strict';
import {session_json} from '../web/engine.mjs';
const call=request=>JSON.parse(session_json(JSON.stringify(request)));
let start=call({action:'open',program:'{print $0;if(NR==2)print 1/zero} END{print "bad"}'});
assert(start.ok);const id=start.session;
assert(call({action:'file',session:id,name:'batch'}).ok);
const failed=call({action:'records',session:id,records:['one','two','three']});
assert.equal(failed.ok,false);assert.equal(failed.output,'one\ntwo\n');assert.match(failed.error,/division by zero/);
assert.equal(call({action:'end',session:id}).ok,false);
start=call({action:'open',program:'{print $0} END{print NR}'});
assert(start.ok);assert(call({action:'file',session:start.session,name:'long'}).ok);
const records=Array.from({length:100},(_,i)=>String(i).padEnd(2000,'x'));
let output='',processed=0,partial=false;
while(processed<records.length){const r=call({action:'records',session:start.session,records:records.slice(processed)});assert(r.ok,r.error);assert(r.processed>0);if(r.processed<records.length-processed)partial=true;processed+=r.processed;output+=r.output;}
assert(partial);assert.equal(output,records.join('\n')+'\n');assert.equal(call({action:'end',session:start.session}).output,'100\n');
for(const [statement,field] of [['nextfile','skipFile'],['exit 7','stopped']]){
  start=call({action:'open',program:`{print $0;${statement}} END{print NR}`});assert(start.ok);
  assert(call({action:'file',session:start.session,name:'stop'}).ok);
  const r=call({action:'records',session:start.session,records:['one','two']});assert.equal(r.processed,1);assert.equal(r[field],true);assert.equal(r.output,'one\n');assert.equal(call({action:'end',session:start.session}).output,'1\n');
}
assert.equal(call({action:'open',program:'BEGIN{print "before";print 1/zero}'}).output,'before\n');
const sessions=Array.from({length:64},()=>call({action:'open',program:'BEGIN{}'}));assert(sessions.every(x=>x.ok));
assert.equal(call({action:'open',program:'BEGIN{}'}).ok,false);
for(const {session} of sessions)assert(call({action:'close',session}).ok);
start=call({action:'open',program:'BEGIN{}'});assert(start.ok);assert.equal(start.needsInput,false);assert(call({action:'end',session:start.session}).ok);
console.log('Session bridge: bounded batching, partial-error output, nextfile/exit, cleanup and independent lifetime checks passed');
