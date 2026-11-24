// Writes this entry's one-line excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I rescheduled the deadline to a parallel timeline where I was on time. This one just hasn't synced yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
