import {posts,names} from '../lib/posts';
export async function GET(){return Response.json((await posts()).map(p=>({title:p.data.title,url:`/${p.data.abbrlink}/`,tags:names(p.data.tags),text:(p.body||'').replace(/<!--[\s\S]*?-->/g,'').replace(/<[^>]+>/g,'').replace(/\{%[\s\S]*?%\}/g,'')})));}
