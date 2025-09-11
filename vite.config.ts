import tailwindcss from '@tailwindcss/vite';
import { join } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '~': join(import.meta.dirname, 'src'),
    },
  },
  root: join(import.meta.dirname, 'src'),
});
