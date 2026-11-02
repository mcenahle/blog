import {getCollection} from 'astro:content';
export const PAGE_SIZE=5;
export const posts=async()=> (await getCollection('posts')).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
export const names=(v:unknown):string[]=>v==null?[]:(Array.isArray(v)?v.flat(Infinity):[v]).map(String);
export const date=(d:Date)=>d.toLocaleDateString('zh-CN',{timeZone:'Asia/Shanghai'});
export const pageUrl=(base:string,n:number)=>n===1?base:`${base}page/${n}/`;
