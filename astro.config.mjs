import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://davidvarea.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // Shiki off: resalta los bloques ``` con estilos inline (tema github) que
  // pisan el sistema visual del sitio. Los comandos de las guías se estilan a
  // mano en styles.css (.post .cuerpo pre) con la paleta propia.
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [mdx()],
});
