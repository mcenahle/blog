'use strict';

const externalIcon = `<svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg"
  width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="currentColor"
    d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/>
</svg>`;

hexo.extend.filter.register('after_post_render', function (data) {
  const siteUrl = new URL(hexo.config.url);

  data.content = data.content.replace(
    /<a\s+([^>]*href=["']https?:\/\/[^"']+["'][^>]*)>([\s\S]*?)<\/a>/gi,
    function (match, attrs, text) {
      const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
      if (!hrefMatch) return match;

      const href = hrefMatch[1];

      try {
        const linkUrl = new URL(href);

        // 排除本站链接
        if (linkUrl.hostname === siteUrl.hostname) {
          return match;
        }

        // 避免重复添加
        if (text.includes('external-link-icon')) {
          return match;
        }

        return `<a ${attrs}>${text} ${externalIcon}</a>`;
      } catch (e) {
        return match;
      }
    }
  );

  return data;
});