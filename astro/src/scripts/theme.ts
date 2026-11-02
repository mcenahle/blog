const media=matchMedia('(prefers-color-scheme: dark)');
let preference='auto';
try{preference=localStorage.getItem('theme')||'auto';}catch{}
function apply(){document.documentElement.dataset.bsTheme=preference==='auto'?(media.matches?'dark':'light'):preference;}
media.addEventListener('change',apply);
document.addEventListener('astro:after-swap',apply);
document.addEventListener('astro:page-load',()=>{apply();const select=document.querySelector<HTMLSelectElement>('#theme');if(!select)return;select.value=preference;select.addEventListener('change',()=>{preference=select.value;try{localStorage.setItem('theme',preference);}catch{}apply();});});
