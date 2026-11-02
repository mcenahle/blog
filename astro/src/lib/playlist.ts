import fs from 'node:fs';
const source=fs.readFileSync('../source/js/musics-settings.js','utf8');
export const playlist=[...source.matchAll(/\{[^{}]*\btitle\s*:[^{}]*\}/g)].map(match=>Object.fromEntries([...match[0].matchAll(/(title|author|cover|url|lrc)\s*:\s*("(?:\\.|[^"\\])*")/g)].map(m=>[m[1],JSON.parse(m[2])])));
if(!playlist.length||playlist.some(track=>!track.url||!track.title))throw new Error('Invalid original music playlist');

