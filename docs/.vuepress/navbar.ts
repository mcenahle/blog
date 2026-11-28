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
      { text: "atom", link: "/atom.xml" },
      { text: "json", link: "/feed.json" },
      { text: "rss", link: "/feed.xml" },
    ],
  },
  { text: "站点地图", link: "/sitemap.xml" },
  {
    text: "加入的博客组织",
    items: [
      { text: "开往", link: "https://www.travellings.cn/go" },
      { text: "blogsclub", link: "https://www.blogsclub.org/" },
      { text: "博友圈", link: "https://www.boyouquan.com/" },
      { text: "BLOGS·CN", link: "https://blogscn.fun/" },
      { text: "十年之约", link: "https://www.foreverblog.cn/" },
      { text: "无聊湾", link: "https://boringbay.com/" },
      { text: "博客录", link: "https://boke.lu/" },
      { text: "集博栈", link: "https://www.heyblog.net/" },
      { text: "博客大联盟", link: "https://bo.ke/" },
      {
        text: "中文独立博客列表",
        link: "https://github.com/timqian/chinese-independent-blogs",
      },
    ],
  },
]);
