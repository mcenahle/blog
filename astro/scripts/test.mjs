import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createMarkdownProcessor} from '@astrojs/markdown-remark';
import hexoTags from './hexo-tags.mjs';
const processor=await createMarkdownProcessor({remarkPlugins:[hexoTags]});
const html=(await processor.render('{% note info modern %}\n**引言**\n正文\n{% endnote %}\n\n{% gallery %}\n![图](/img/test.png)\n{% endgallery %}\n\n```text\n{% note danger %}\n```\n\n<!-- {% note warning %} -->')).code;
assert.match(html,/<aside class="alert alert-info">/);assert.match(html,/<strong>引言<\/strong>/);assert.match(html,/<div class="hexo-gallery">/);assert.match(html,/src="\/img\/test.png"/);assert.doesNotMatch(html,/alert-danger|alert-warning/);
const baseline=JSON.parse(fs.readFileSync('baseline/manifest.json','utf8'));const links=[];for(let n=1;n<=7;n++){const html=fs.readFileSync(`dist/${n===1?'':`page/${n}/`}index.html`,'utf8');for(const m of html.matchAll(/<h2[^>]*><a href="([^"]+)"/g))links.push(m[1]);}
assert.equal(links.length,32);assert.equal(new Set(links).size,32);assert.deepEqual([...links].sort(),baseline.posts.map(p=>p.url).sort());
assert.match(fs.readFileSync('dist/2026/10/14/474/index.html','utf8'),/日期：2026\/10\/14/);
assert.equal(JSON.parse(fs.readFileSync('dist/search.json','utf8')).length,32);
console.log('Passed: Hexo tag boundaries, code/comments preservation, pagination completeness, historical dates, search count.');
