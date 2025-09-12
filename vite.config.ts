import { join } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: join(import.meta.dirname, 'src'),
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '~': join(import.meta.dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      // Specify the input entry points for each HTML file
      input: {
        calculator: 'apps/calculator/index.html',
        'example-1': 'apps/test/index.html',
        'example-2': 'apps/example-2/index.html',
        'todo-list': 'apps/todo-list/index.html'
      }
    }
  }
});
