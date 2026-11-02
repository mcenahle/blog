import {createMarkdownProcessor} from '@astrojs/markdown-remark';
import hexoTags from '../../scripts/hexo-tags.mjs';
const processor=await createMarkdownProcessor({remarkPlugins:[hexoTags]});
export const markdown=async(text:string)=>(await processor.render(text)).code;
