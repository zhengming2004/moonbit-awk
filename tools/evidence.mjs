import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
export const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
export function sourceHashes(){
  const root=fileURLToPath(new URL('../',import.meta.url)),result={};
  function visit(relative){
    for(const entry of fs.readdirSync(path.join(root,relative),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
      if(['.git','_build','target','.mooncakes','evidence','__pycache__'].includes(entry.name))continue;
      const name=path.join(relative,entry.name);
      if(entry.isDirectory())visit(name);
      else if(entry.isFile())result[name.replaceAll('\\','/')]=sha256(fs.readFileSync(path.join(root,name)));
    }
  }
  visit('');return result;
}
