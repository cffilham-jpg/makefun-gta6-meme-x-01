// gta6-meme-x-01 entry: hand the X post's address to the gate.
//
// The entry is the post itself — a GTA 6 meme posted on X from a public
// account. This program only carries POST.json from the repository root into
// the output directory, byte for byte, so the gate can read the post's
// address. Node 22, standard library only; no network, no wall clock, fully
// deterministic: the same repository always produces the same output.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`gta6-meme-x-01: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'POST.json');
let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (err) {
  fail(`could not read ${source}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw.toString('utf8'));
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof post !== 'object' || post === null) {
  fail('POST.json must be a JSON object');
}
const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  fail('POST.json must carry a non-empty string "url" field');
}
// The gate only accepts an X post address, so refuse anything else here
// instead of handing a bad address to the house: https://x.com/<handle>/status/<id>
// (or the same on twitter.com), the id digits only.
const POST_ADDRESS = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (!POST_ADDRESS.test(url)) {
  fail(`"url" is not an X post address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
