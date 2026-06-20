import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL ?? 'https://username.github.io';

export default defineConfig({
  site,
  integrations: [
    sitemap(),
    starlight({
      title: '我的知识空间',
      description: '个人简介、技术笔记与实战经验分享。',
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/your-name',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/your-name/your-name.github.io/edit/main/',
      },
      sidebar: [
        {
          label: '开始阅读',
          items: [{ label: '文档首页', link: '/docs/' }],
        },
        {
          label: '学习笔记',
          items: [{ autogenerate: { directory: 'docs/learning-notes' } }],
        },
        {
          label: '实战教程',
          items: [{ autogenerate: { directory: 'docs/tutorials' } }],
        },
        {
          label: '工具与配置',
          items: [{ autogenerate: { directory: 'docs/tooling' } }],
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:locale', content: 'zh_CN' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${site}/og-cover.svg` },
        },
      ],
    }),
  ],
});
