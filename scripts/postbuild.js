import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const routes = ['resume', 'experience', 'contact'];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(__dirname, '../build/client');

routes.forEach((route) => {
  const src = path.join(buildDir, 'index.html');
  const dest = path.join(buildDir, `${route}.html`);
  fs.copyFileSync(src, dest);
});

console.log('Post build script complete');
