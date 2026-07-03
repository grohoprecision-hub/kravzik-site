// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
output: 'static',
export default defineConfig({
  site: 'https://kravzik.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
