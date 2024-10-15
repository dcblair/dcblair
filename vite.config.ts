import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig, Plugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

function transformPdfJsWorker(): Plugin {
  return {
    name: 'transform-pdf-js-worker',
    generateBundle(options: any, bundle: any) {
      for (const [fileName, chunkOrAsset] of Object.entries(bundle)) {
        if (
          !fileName.includes('pdf.worker') ||
          (chunkOrAsset as any).type !== 'asset'
        ) {
          continue;
        }
        const prepend = Buffer.from(
          `if (typeof Promise.withResolvers === "undefined") {
            Promise.withResolvers = function () {
              let resolve, reject
              const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
              })
              return { promise, resolve, reject }
            }
          }
          `,
          'utf-8',
        );
        const source = (chunkOrAsset as { source: string | Buffer }).source;
        const sourceBuffer = Buffer.isBuffer(source)
          ? source
          : Buffer.from(source);
        (chunkOrAsset as any).source = Buffer.concat([prepend, sourceBuffer]);
      }
    },
  };
}

export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [
    !process.env.VITEST &&
      remix({
        ssr: false,
      }),
    tsconfigPaths(),
    transformPdfJsWorker(),
  ],
  test: {
    coverage: {
      provider: 'v8',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
