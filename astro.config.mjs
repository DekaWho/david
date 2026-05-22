import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidvarea.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
