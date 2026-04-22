import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const imagesDir = path.join(root, 'src', 'assets', 'images');

const tasks = [
  {
    input: 'shahid.png',
    outputs: [
      { file: 'shahid.webp', format: 'webp', options: { quality: 80 } },
      { file: 'shahid.avif', format: 'avif', options: { quality: 50 } },
    ],
  },
  {
    input: 'bg.jpg',
    outputs: [
      { file: 'bg.webp', format: 'webp', options: { quality: 70 } },
      { file: 'bg.avif', format: 'avif', options: { quality: 45 } },
    ],
  },
];

const exists = async (p) => {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
};

const run = async () => {
  for (const t of tasks) {
    const inputPath = path.join(imagesDir, t.input);
    if (!(await exists(inputPath))) {
      console.warn(`Skip (missing): ${t.input}`);
      continue;
    }

    const inputBuf = await fs.readFile(inputPath);
    const base = sharp(inputBuf).rotate(); // auto-orient if needed

    for (const out of t.outputs) {
      const outPath = path.join(imagesDir, out.file);
      const pipeline =
        out.format === 'webp'
          ? base.webp(out.options)
          : out.format === 'avif'
            ? base.avif(out.options)
            : base;

      await pipeline.toFile(outPath);
      const stat = await fs.stat(outPath);
      console.log(`${out.file} ${(stat.size / 1024).toFixed(1)} KB`);
    }
  }
};

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

