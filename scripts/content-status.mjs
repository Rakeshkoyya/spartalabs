#!/usr/bin/env node
/**
 * Lists everything on the site that is still a placeholder.
 *
 * With client names and team photos both off the table, the numbers carry the
 * whole trust argument — so it needs to be one command to see what is still
 * missing, not a grep people remember to run.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const ROOTS = ["src", "docs"];

const CHECKS = [
  { id: "content", label: "Content the client still owes us", re: /TODO\(content\)/ },
  { id: "legal", label: "Needs legal review", re: /TODO\(legal\)/ },
  { id: "pending", label: "Unconfirmed figures rendered as pending", re: /pending:\s*true/ },
  // Trailing comma keeps the `"draft" | "approved"` type declaration out of the count.
  { id: "draft", label: "Case study bodies not yet approved", re: /bodyStatus:\s*"draft",/, only: "src/content" },
  { id: "missing", label: "Fields with no value yet", re: /:\s*null,\s*(\/\/.*)?$/, only: "src/content" },
];

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx|md)$/.test(entry)) yield full;
  }
}

const findings = new Map(CHECKS.map((check) => [check.id, []]));

for (const root of ROOTS) {
  for (const file of walk(join(ROOT, root))) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, index) => {
      const rel = relative(ROOT, file);
      for (const check of CHECKS) {
        if (check.only && !rel.startsWith(check.only)) continue;
        if (check.re.test(line)) {
          findings.get(check.id).push(`${rel}:${index + 1}  ${line.trim()}`);
        }
      }
    });
  }
}

let total = 0;
for (const check of CHECKS) {
  const hits = findings.get(check.id);
  total += hits.length;
  console.log(`\n${check.label} — ${hits.length}`);
  if (hits.length === 0) {
    console.log("  none");
    continue;
  }
  for (const hit of hits) console.log(`  ${hit}`);
}

console.log(`\n${total} item${total === 1 ? "" : "s"} outstanding before launch.`);
console.log("See docs/ACTION-PLAN.md §11 and §12 for what unblocks each one.\n");
