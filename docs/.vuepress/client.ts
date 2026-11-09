import { defineAsyncComponent, h } from "vue";
import { Layout } from "vuepress-theme-plume/client";
import PageContextMenu from "vuepress-theme-plume/features/PageContextMenu.vue";
import { defineClientConfig } from "vuepress/client";

import "./theme/styles/custom.css"; // import your custom styles / 导入自定义样式

export default defineClientConfig({
  layouts: {
    Layout: h(Layout, null, {
      // 将 PageContextMenu 添加到 doc-title-after 插槽，即文章标题的右侧
      "doc-title-after": () => h(PageContextMenu),
    }),
  },
});
