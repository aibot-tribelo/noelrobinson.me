// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aibot-tribelo.github.io',
  base: '/noelrobinson.me',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});