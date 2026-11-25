// Angry Judge entry: writes one short funny rant to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'The office printer has one job. It jams, it sulks, it blinks a red light like it\'s the one having a bad day. I have emailed it. I have apologized to it. I pressed every button in a sequence that felt like a hostage negotiation. It printed one page, crooked, and I thanked it. I thanked a printer.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
