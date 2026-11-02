# Astro 本地实验

已全面切换到 Astro，仅在 ai/astro 分支开发，不自动提交、推送或部署。Node >=22.23.4，本次使用 24.19。

```powershell
cd 仓库根目录
pnpm install --frozen-lockfile
pnpm dev
```

开发地址 http://127.0.0.1:14567/ 。静态验收：`pnpm build` 后运行 `pnpm test`。静态预览：`pnpm preview`。不要同时运行开发服务与构建，二者共享 Astro 内容缓存。

## 已实现

- 复用 src/content/posts 下全部 32 篇 Markdown 和原 abbrlink。
- 每页 5 篇：首页、/page/N/、标签、分类、按年/月归档及各自分页；保留历史名称空格转连字符的 URL。
- 文章卡片标题栏/正文、目录、标签、相邻文章；Bootstrap 5.3.8 浅色/深色/跟随系统。
- CWD 自动挂载，保留原 API、default siteId 和历史带尾斜杠路径；保留刷新重试。主题切换调用现有客户端 updateConfig。
- 原生脚本本地搜索（标题/正文/标签），按需读取 search.json。
- Hexo note、gallery、steamgame 兼容；高德地图转为可点击地图链接。转换在 Markdown AST 文本节点进行，代码块及 HTML 注释不转换。
- 友情链接、说说复用原 YAML；追剧复用 src/data/legacy/cinemas.json，不请求外部接口更新数据；游戏使用 Steam 官方嵌入。
- 原宣传图/赞助页面、基础统计（月份和 Top 10 标签）、全站常驻HTML 音频播放器复用原歌单，站内客户端导航连续播放、404。
- RSS 2.0（/rss.xml）和 Atom（/feed.xml）全文订阅（最近 20 篇，媒体与链接转为绝对地址）、构建后 sitemap.xml / sitemap.txt、基础 Open Graph、canonical 和 WebPage JSON-LD。
- 无时区 Hexo 时间按 Asia/Shanghai 处理；预览始终 noindex，robots 禁止抓取。

## 验证

baseline/manifest.json 与 hexo-build.log 是初始实际 Hexo 构建基线。scripts/verify.mjs 在每次构建后核对全部历史文章和目录页面 URL，并检查未转换的 Hexo 标签。scripts/test.mjs 检查分页完整性、特殊标签边界、代码/注释保留、日期与搜索数量。

浏览器已验证文章卡片、自动读取历史 6 条评论和评论深色同步；没有提交测试评论、点赞或修改线上 CWD。baseline/article-preview.png 是文章预览截图。

## 后续可完善

- 移动端更细的视觉验收、复制代码按钮、分享、完整文章结构化数据。
- 搜索输出 JSON，不兼容旧 search.xml 消费端。
- 统计尚未复刻发布日历与雷达图；追剧未实现在线刷新、进度展示和页内分页。
- 音乐使用页面播放/进度/音量控件驱动 audio，避免切页后原生控件消失，需手动开始播放；站内链接/浏览器前后退保持播放，刷新、离站和打开新标签页会重新加载。尚未提供歌词和关闭浏览器后的进度恢复。
- 图库采用响应式网格，地图采用链接；外部 Steam/B站封面是否可加载受网络影响。
- 未接入原统计/录屏脚本。CI 已切换到 Astro；生产抓取策略仍待决定。

## 图片与页面导航

正文图片可点击放大，支持上一张/下一张、方向键、Esc、背景关闭和关闭后焦点恢复；已有图片链接保持原链接行为。使用原生 dialog，不引入灯箱库。客户端导航使用 Astro ClientRouter 和 transition:persist；评论组件在离页时清理，搜索与主题在 astro:page-load 后重新初始化。

静态资源保存在 public/，直接由 Astro 发布，输出到 dist/。Hexo 配置、主题、脚手架及依赖已移除；原 source/ 内容已按用途迁入 src/content/、src/data/ 和 public/。根目录单工程 pnpm 构建，CI 使用 Node 24/26。
