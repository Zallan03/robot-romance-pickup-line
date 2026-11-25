// Robot Romance: one-line pickup line for a robot / AI.
// v2 — revised in this session: fused two AI concepts (token + context window) so the punch lands on the last words.
// The program writes exactly one line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Are you a token? Because I would spend my whole context window just talking to you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
