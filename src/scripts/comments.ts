let client:any;
let observer:MutationObserver|undefined;
let loading:Promise<void>|undefined;
function script(){return loading??=new Promise<void>((resolve,reject)=>{if((window as any).CWDComments){resolve();return;}const el=document.createElement('script');el.src='/js/cwd-0.2.1.umd.js';el.onload=()=>resolve();el.onerror=()=>{el.remove();loading=undefined;reject(new Error('CWD load failed'));};document.head.append(el);});}
function cleanup(){observer?.disconnect();observer=undefined;client?.unmount();client=undefined;}
async function setup(){
 const root=document.querySelector<HTMLElement>('#comments');if(!root)return;
 const status=document.querySelector<HTMLElement>('#comment-status')!;
 const retry=document.querySelector<HTMLButtonElement>('#retry-comments')!;
 retry.addEventListener('click',()=>location.reload());
 try{await script();if(!root.isConnected)return;const CWD=(window as any).CWDComments;client=new CWD({theme:document.documentElement.dataset.bsTheme||'light',el:'#comments',apiBaseUrl:'https://api.cwd.mcenahle.page',postSlug:root.dataset.slug,siteId:'default'});client.mount();observer=new MutationObserver(()=>client?.updateConfig({theme:document.documentElement.dataset.bsTheme||'light'}));observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-bs-theme']});status.hidden=true;}catch{if(root.isConnected)status.textContent='评论暂时无法加载，请稍后重试。';}finally{if(root.isConnected)retry.hidden=false;}
}
document.addEventListener('astro:before-swap',cleanup);
document.addEventListener('astro:page-load',()=>void setup());
