# 梅之夏 · Astro 博客

本分支已切换到 Astro + Bootstrap 5.3.8，使用 pnpm。工程位于仓库根目录，文章位于 src/content/posts/，静态资源位于 public/。

需要 Node >=22.23.4（推荐 Node 24），pnpm 10.27.0。

```powershell
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

在仓库根目录运行：

- `pnpm dev`：开发服务 http://127.0.0.1:14567/
- `pnpm build`：生成 dist/ 并检查历史 URL。
- `pnpm test`：检查分页、内容兼容、订阅和播放器。
- `pnpm preview`：静态预览。

保留 CWD 接口及历史评论键，不迁移或改写线上评论。实验站仍禁止索引，没有配置生产部署。

迁移记录和已知差异见 [docs/migration.md](docs/migration.md)。基线是移除 Hexo 前保存的历史快照，不再重新生成；构建无需 Hexo。

# 版权情况

本仓库的源代码采用 [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.txt) 授权。

图标来源于 Font Awesome 5；external-link 图标来源于 Material Design Icons，相关资源分别遵循其原有许可证条款。

除另有说明外，本仓库中的博客文章、图片及其他原创内容均为 Mcenahle 的原创作品，不适用上述 Apache License 2.0 授权条款。

© 2025–2026 Mcenahle. All Rights Reserved.
