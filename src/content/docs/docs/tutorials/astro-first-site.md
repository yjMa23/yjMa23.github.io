---
title: 用 Astro 构建第一个内容网站
description: 从项目结构到静态构建，认识 Astro 内容网站的核心流程。
sidebar:
  order: 2
---

Astro 很适合个人网站和文档：它默认输出很少的客户端 JavaScript，又能在需要时按组件引入交互能力。

## 创建项目

确保本机已经安装 Node.js，然后运行：

```bash
npm create astro@latest
cd your-site
npm run dev
```

开发服务器启动后，浏览器会看到即时更新的页面。

## 认识目录

一个精简的 Astro 项目通常包含：

```text
src/
├── components/   # 可复用组件
├── layouts/      # 页面外壳
├── pages/        # 基于文件的路由
└── styles/       # 全局样式
public/           # 原样复制的静态资源
```

`src/pages/about.astro` 会自动生成 `/about` 页面，不需要单独维护路由表。

## 创建第一个页面

```astro
---
const title = '你好，Astro';
---

<main>
  <h1>{title}</h1>
  <p>这是一个默认不包含客户端 JavaScript 的页面。</p>
</main>
```

Astro 文件的顶部代码围栏在构建时执行，下方模板负责生成 HTML。

## 构建静态站点

```bash
npm run build
npm run preview
```

构建结果默认位于 `dist/`。发布前应至少检查首页、深层链接、静态资源和 404 页面。

:::tip[下一步]
当文章数量增加时，可以引入内容集合来校验 frontmatter，并自动生成类型安全的内容索引。
:::
