import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react(), svgr()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: './index.html'
    }
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',      
      '.json'
    ],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
