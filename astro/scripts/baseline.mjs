import fs from 'node:fs';
import path from 'node:path';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk('../public').map(f=>path.relative('../public',f).replaceAll('\\','/'));
const posts=walk('../source/_posts').filter(f=>f.endsWith('.md')).map(f=>{const text=fs.readFileSync(f,'utf8');const slug=text.match(/^abbrlink:\s*(.+)$/m)?.[1].trim();return {source:path.relative('..',f).replaceAll('\\','/'),url:`/${slug}/`,generated:files.includes(`${slug}/index.html`)};});
fs.writeFileSync('baseline/manifest.json',JSON.stringify({postsCount:posts.length,posts,htmlUrls:files.filter(f=>f.endsWith('.html')).map(f=>'/'+f.replace(/index\.html$/,'')),resources:files.filter(f=>!f.endsWith('.html'))},null,2));
