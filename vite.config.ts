import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    cssMinify: true,
    minify: true,
  },
  plugins: [
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
