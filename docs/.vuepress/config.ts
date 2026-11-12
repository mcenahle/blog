/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { redirectPlugin } from "@vuepress/plugin-redirect";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "梅之夏",
  description: "Explore. Dream. Discover.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/ico",
        href: "/favicon.ico",
      },
    ],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    readAid: "left",
    bulletin: {
      enablePage: false,
    },
    hostname: "https://bp.mcenahle.dev",
    feed: {
      formats: ["rss", "atom", "json"],
    },
    relatedPosts: {
      limit: 4,
      minScore: 0.12,
      diversity: 0.3,
    },
    autoFrontmatter: false,
    docsRepo: "mcenahle/blog",
    docsDir: "docs",
    docsBranch: "feat/plume-migration",
    contributors: false,
    footer: {
      copyright: "Copyright © 2024-2026 梅之夏.",
      message:
        "<a href='https://validator.w3.org/feed/check.cgi?url=https%3A//bp.mcenahle.dev/feed.xml' target='_blank'><img src='/img/valid-rss-rogers.png' alt='[Valid RSS]' style='display: inline; width: 70px;' title='Validate my RSS feed' /></a><br />Powered by <a target='_blank' href='https://v2.vuepress.vuejs.org/'>VuePress</a> &amp; <a target='_blank' href='https://theme-plume.vuejs.press'>vuepress-theme-plume</a>",
    },
    llmstxt: {
      locale: "all",
      llmsTxtTemplateGetter: {
        description: (_, { currentLocale }) => {
          return currentLocale === "/"
            ? "mcenahle 的主要博客网站"
            : "A main blog website of mcenahle.";
        },
        details: "",
      },
    },
  }),

  plugins: [
    redirectPlugin({
      config: {
        "/posts/": "/",
      },
    }),
  ],
});
