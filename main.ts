import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const sourceDirectory = dirname(decodeURIComponent(new URL(import.meta.url).pathname));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
// Copy the original bytes unchanged for deterministic output on every run.
copyFileSync(join(sourceDirectory, 'entry.png'), join(outputDirectory, 'entry.png'));
