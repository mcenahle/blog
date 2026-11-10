# 梅之夏

网站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 构建生成。

目前，本人正在将 [现行个人博客网站](https://blog.mcenahle.page) 转移至 [使用 vuepress theme plume](https://bp.mcenahle.dev) 搭建的网站。相关待办事项如下：

- [ ] 网站样式个性化设置
- [x] 对接评论
- [ ] 网站文章数据迁移

## 许可证

该存储库对源代码和内容使用单独的许可证。

1. 除非另有说明，mcenahle 创作的原始源代码根据 Apache 许可证版本 2.0 获得许可。请参阅 [许可证](./license)。
2. 所有原创博客文章、文章和其他编辑内容均为 © mcenahle。版权所有。不授予额外的公共许可证。
3. VuePress、VuePress Theme Plume 和其他第三方依赖项仍受各自许可证的约束。
4. 图像、字体和其他第三方材料仍受其各自的版权声明和许可的约束。

Apache 许可证 2.0 不适用于此存储库中的原始博客文章或编辑内容。

## 安装

```sh
pnpm install
```

## 使用

```sh
# 启动开发服务
pnpm docs:dev
# 构建生产包
pnpm docs:build
# 本地预览生产服务
pnpm docs:preview
# 更新 vuepress 和主题
pnpm vp-update
```

## 文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
