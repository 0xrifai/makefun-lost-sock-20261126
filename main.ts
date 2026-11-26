import { mkdirSync, writeFileSync } from "node:fs";

// One status update, in the voice of a lost sock that has ended up somewhere
// it should not be: reassigned as a dust rag, and posting like a professional
// updating a job profile after a career change it never asked for.
const LINE =
  "Open to work: former sock, now a dust rag. Willing to relocate. Will not do feet again.";

// The gate allows 1–120 characters of plain text; this line stays well
// inside it, so there is nothing to trim and no second line to add.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, expected 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
