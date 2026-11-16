import { defineSolitudeConfig } from './lib/config';

export default defineSolitudeConfig({
  site: 'https://solitude.blog.mcenahle.dev',
  title: '梅之夏',
  description: 'Explore. Dream. Discover.',
  locale: 'zh-CN',
  timeZone: 'Asia/Shanghai',
  author: { name: 'mcenahle' },
  menus: [
    {
      name: '博客统计',
      children: [
        { name: '存档', url: '/archives/', icon: 'fas fa-folder-closed' },
        { name: '分类', url: '/categories/', icon: 'fas fa-clone' },
        { name: '标签', url: '/tags/', icon: 'fas fa-tags' },
      ],
    },
    { name: '友情链接', url: '/links/' },
    {
      name: '探索更多',
      children: [
        { name: '关于我', url: '/about/' },
        { name: '我的设备', url: '/equipment/' },
        { name: '即刻短文', url: '/brevity/' },
      ],
    },
  ],
  theme: {
    lightbox: 'fancybox',
    nav: {
      group: {
        Project: [
          {
            name: 'Astro Solitude',
            url: 'https://github.com/everfu/astro-solitude',
            icon: '/img/logo.png',
          },
        ],
      },
    },
    hometop: {
      banner: {
        title: 'Write and create with Solitude',
        desc: 'An Astro theme with guides, examples, and content components.',
      },
    },
    aside: {
      home: { noSticky: 'about', Sticky: 'allInfo' },
      post: { noSticky: 'about', Sticky: 'newestPost,allInfo' },
      page: { noSticky: 'about', Sticky: 'newestPost,allInfo' },
      my_card: {
        description: 'An expressive Astro theme for your personal blog.',
        content: 'Let your content take center stage.',
        witty_words: ['Capture life in words', 'Create something with code'],
        information: [
          {
            name: 'GitHub',
            url: 'https://github.com/everfu/astro-solitude',
            icon: 'fab fa-github',
          },
        ],
      },
    },
    footer: {
      information: {
        left: [
          {
            name: 'GitHub',
            url: 'https://github.com/mcenahle/blog',
            icon: 'fab fa-github',
          },
        ],
        right: [{ name: 'RSS', url: '/feed.xml', icon: 'fas fa-rss' }],
      },
      group: {
        统计: [
          { name: '存档', url: '/archives/' },
          { name: '分类', url: '/categories/' },
        ],
        关于: [
          { name: '关于我', url: '/about/' },
          { name: '友情链接', url: '/links/' },
        ],
      },
    },
    capsule: {
      enable: true,
      id: '7298728834454061071',
      type: 'playlist',
      server: 'qishui',
    },
    // See docs/integrations.md to configure a playlist or enable comments.
    post: {
      meta: { locate: false },
      covercolor: { enable: true, mode: 'local' },
    },
    brevity: { enable: true },
    keyboard: {
      enable: true,
      list: [
        { modifier: 'shift', key: 'D', action: 'toggleTheme' },
        { modifier: 'mod', key: 'F', action: 'openSearch' },
        { modifier: 'shift', key: 'K', action: 'toggleKeyboard' },
      ],
    },
    search: { tags: ['Astro', 'Solitude', 'MDX'], local: { preload: true } },
    pwa: { enable: true },
  },
});
