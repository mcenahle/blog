import {defineCollection,z} from 'astro:content';
import {glob} from 'astro/loaders';
// Hexo timestamps without an offset are wall-clock times in Asia/Shanghai.
const hexoDate=z.preprocess(value=>{if(value instanceof Date)return new Date(value.valueOf()-8*3600000);if(typeof value==='string'&&/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(:\d{2})?$/.test(value.trim()))return value.trim().replace(' ','T')+'+08:00';return value;},z.coerce.date());
export const collections={pages:defineCollection({loader:glob({pattern:['games/index.md','promotional-image/index.md','sponsor/index.md'],base:'./src/content/pages'})}),posts:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/posts'}),schema:z.object({title:z.coerce.string(),abbrlink:z.string(),date:hexoDate,description:z.string().nullish(),comments:z.boolean().optional(),tags:z.any().optional(),categories:z.any().optional(),updated:hexoDate.optional()})})};
