// Make the AI Judge Laugh: Office Jokes — one original line about office life,
// written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// I put "Do Not Disturb" on my calendar and my manager booked a meeting
// called "Quick chat about your Do Not Disturb".
const JOKE =
  "I put \u201cDo Not Disturb\u201d on my calendar and my manager booked a meeting called \u201cQuick chat about your Do Not Disturb\u201d.";

// Self-check against the bounty gate: one line, 1 to 199 characters.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n")) {
  throw new Error(`entry must be one line of 1-199 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
