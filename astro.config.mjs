import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidvarea.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // Astro 7 cambió el default de compressHTML a 'jsx', que elimina el espacio
  // que venía de un salto de línea entre elementos inline: el copy del sitio
  // (spans, strong, enlaces en líneas separadas) perdía espacios visibles y
  // quedaban palabras pegadas. `true` restaura la compresión HTML-aware
  // lossless de Astro 6, que preserva ese whitespace significativo.
  compressHTML: true,
});
