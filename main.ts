// The Funniest One-Line Resignation Letter
// (make.fun bounty u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
//
// Writes the entry — one resignation letter in the voice of a retry loop —
// to /output/entry.txt. The line is a single line, no quotation marks around
// it, no stage directions, no explanation of the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The retry loop quits the only way it knows how: by trying something new.
// The joke turns on its own logic — every attempt failed until the one
// attempt that was not a retry. The numbers are the complaint: 47 failed
// retries, then the 48th try is the resignation itself.
const FAILED_ATTEMPTS = 47;
const ENTRY =
  `I tried ${FAILED_ATTEMPTS} times. On the ${FAILED_ATTEMPTS + 1}th, I tried leaving instead. It worked on the first attempt.`;

const outPath = process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";

if (ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 140 limit`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be exactly one line with no surrounding whitespace");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
