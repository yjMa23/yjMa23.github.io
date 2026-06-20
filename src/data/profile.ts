export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'mail' | 'rss';
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
}

export interface FeaturedDoc {
  title: string;
  description: string;
  category: string;
  href: string;
  readingTime: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availability: string;
  email: string;
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  featuredDocs: FeaturedDoc[];
}

// TODO：将下方占位资料替换为你的真实信息。
export const profile: Profile = {
  name: 'Magic',
  initials: 'Ma',
  role: '机器人算法工程师 · 终身学习者',
  tagline: '把复杂的问题想清楚，也把学到的东西写清楚。',
  bio: '你好，我是一名专注于机器人开发与工程效率的软件开发者。这个网站记录我的项目、技术笔记，以及那些值得反复翻阅的实践经验。',
  location: '中国 · 深圳',
  availability: '保持好奇，持续构建',
  email: '13286400822@163.com',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/yjMa23', icon: 'github' },
    { label: '发送邮件', href: 'mailto:13286400822@163.com', icon: 'mail' },
    { label: '技术文档', href: '/docs/', icon: 'rss' },
  ],
  skillGroups: [
    {
      title: '前端开发',
      description: '关注可维护的界面、设计系统与良好的用户体验。',
      items: ['TypeScript', 'Astro', 'React', 'CSS'],
    },
    {
      title: '后端与数据',
      description: '构建稳定、清晰且容易演进的服务与数据流。',
      items: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
    },
    {
      title: '工程实践',
      description: '用自动化、测试和文档让团队开发更可靠。',
      items: ['Git', 'Docker', 'CI/CD', 'Testing'],
    },
  ],
  projects: [
    {
      title: '知识管理工具',
      description: '一个用于整理碎片笔记、建立主题关联并快速检索的个人知识库。',
      tags: ['TypeScript', 'Astro'],
      href: '#',
      status: '持续迭代',
    },
    {
      title: '自动化工作流',
      description: '将日常重复操作沉淀为可靠脚本，让发布与维护变得轻松。',
      tags: ['Node.js', 'GitHub Actions'],
      href: '#',
      status: '开源项目',
    },
    {
      title: '数据可视化实验',
      description: '探索如何用清晰、克制的图形讲述数据背后的故事。',
      tags: ['D3.js', 'Design'],
      href: '#',
      status: '实验中',
    },
  ],
  featuredDocs: [
    {
      title: '现代 JavaScript 的异步思维',
      description: '从事件循环出发，建立对 Promise 与 async/await 的可靠理解。',
      category: '学习笔记',
      href: '/docs/learning-notes/modern-javascript/',
      readingTime: '约 8 分钟',
    },
    {
      title: '用 Astro 构建第一个内容网站',
      description: '从项目结构到静态部署，完成一个轻量、快速的网站。',
      category: '实战教程',
      href: '/docs/tutorials/astro-first-site/',
      readingTime: '约 12 分钟',
    },
    {
      title: '一套可长期使用的 Git 工作流',
      description: '用小提交、清晰分支和自动检查降低协作成本。',
      category: '工具与配置',
      href: '/docs/tooling/git-workflow/',
      readingTime: '约 6 分钟',
    },
  ],
};
