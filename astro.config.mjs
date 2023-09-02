import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://www.my-site.dev',
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'title1',
          h2: 'title2',
          h3: 'title3',
          h4: 'title4',
          p: 'paragraph',
          img: 'photo',
          ul: 'ulist',
          ol: 'olist',
          blockquote: 'blockquote',
          table: 'table',
          kbd: 'keyboard',
          code: 'inline-code',
        },
      ],
    ],
  },
});
