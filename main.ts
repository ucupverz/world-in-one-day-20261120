// world-in-one-day-20261120 — copy the entry poster into the grader's output directory.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destination = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  console.error(`main.ts: source image not found at ${source}`);
  process.exit(2);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
console.log(`entry.png -> ${destination}`);
