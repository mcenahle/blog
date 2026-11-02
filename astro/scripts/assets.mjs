import fs from 'node:fs';
import path from 'node:path';
fs.mkdirSync('public',{recursive:true});
for(const name of ['img','fonts','h5','mail','musics','js']){
 const from=path.resolve('../source',name);
 if(fs.existsSync(from))fs.cpSync(from,path.resolve('public',name),{recursive:true});
}
fs.writeFileSync('public/robots.txt','User-agent: *\nDisallow: /\n');
