import { defineConfig } from 'astro/config';
import {unified} from '@astrojs/markdown-remark';
import hexoTags from './scripts/hexo-tags.mjs';
export default defineConfig({site:'https://blog.mcenahle.page',output:'static',trailingSlash:'always',markdown:{processor:unified({remarkPlugins:[hexoTags]})}});
