// Angry Judge entry: writes one short funny rant to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The printer's apology tour starts with a jam, and it never once offers a refund.
const line = 'The office printer has one job. It jams, it sulks, it blinks a red light like it\'s the one having a bad day. I have emailed it. I have apologized to it. I pressed every button in a sequence that felt like a hostage negotiation. It printed one page, crooked, and I thanked it. I thanked a printer.';

mkdirSync(outDir, { recursive: true });
// The complaint desk writes every grievance into the same file, so the printer cannot pretend it never happened.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
