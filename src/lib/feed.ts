import {posts} from './posts';
import {markdown} from './markdown';
export const site='https://blog.mcenahle.page';
export const xml=(s:unknown)=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export function absoluteHtml(html:string){return html.replace(/\b(href|src|poster)="([^"\s]+)"/g,(match,attr,value)=>{if(/^(#|mailto:|data:)/.test(value))return match;return `${attr}="${xml(new URL(value.replaceAll('&amp;','&'),site).href)}"`;});}
export async function feedEntries(){return Promise.all((await posts()).slice(0,20).map(async post=>({post,url:`${site}/${post.data.abbrlink}/`,html:absoluteHtml(await markdown(post.body||''))})));}
