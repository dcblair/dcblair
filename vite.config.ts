/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    cssMinify: true,
    minify: true,
  },
  plugins: [
    !process.env.VITEST &&
      remix({
        ssr: false,
      }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
