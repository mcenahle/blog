/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/" },
  {
    text: "博客相关统计",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "友情链接", link: "/links/README.md" },
  {
    text: "订阅网站",
    items: [
      { text: "atom", link: "atom.xsl" },
      { text: "json", link: "feed.json" },
      { text: "rss", link: "rss.xml" },
    ],
  },
]);
