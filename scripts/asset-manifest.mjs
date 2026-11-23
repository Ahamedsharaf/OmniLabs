import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
export function createManifest(directory='dist') {
  const manifest={};
  function scan(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})) {
    const file=path.join(dir,item.name);
    if(item.isDirectory())scan(file);
    else if(!item.name.startsWith('.')) {const bytes=fs.readFileSync(file);manifest['/'+path.relative(directory,file).split(path.sep).join('/')]={hash:crypto.createHash('sha256').update(bytes).digest('hex').slice(0,32),size:bytes.length};}
  }}
  scan(directory);return manifest;
}
if(process.argv[1]?.endsWith('asset-manifest.mjs'))process.stdout.write(JSON.stringify(createManifest()));
