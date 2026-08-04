import fs from "node:fs";
import path from "node:path";

type Check = {
  name: string;
  passed: boolean;
  detail: string;
};

export function runDoctor(): void {
  const workspace = "C:\\ARC";

  const checks: Check[] = [
    {
      name: "ARC workspace",
      passed: fs.existsSync(workspace),
      detail: workspace,
    },
    {
      name: "Public directory",
      passed: fs.existsSync(path.join(workspace, "00_PUBLIC")),
      detail: path.join(workspace, "00_PUBLIC"),
    },
    {
      name: "Internal directory",
      passed: fs.existsSync(path.join(workspace, "02_INTERNAL")),
      detail: path.join(workspace, "02_INTERNAL"),
    },
    {
      name: "Client directory",
      passed: fs.existsSync(path.join(workspace, "04_CLIENTS")),
      detail: path.join(workspace, "04_CLIENTS"),
    },
    {
      name: "Report directory",
      passed: fs.existsSync(path.join(workspace, "05_REPORTS")),
      detail: path.join(workspace, "05_REPORTS"),
    },
    {
      name: "Documentation app",
      passed: fs.existsSync(path.join(workspace, "arc-docs")),
      detail: path.join(workspace, "arc-docs"),
    },
  ];

  console.log("\nARC Doctor\n");

  for (const check of checks) {
    const status = check.passed ? "PASS" : "FAIL";
    console.log(`[${status}] ${check.name}`);
    console.log(`       ${check.detail}`);
  }

  const failed = checks.filter((check) => !check.passed);

  console.log("");

  if (failed.length === 0) {
    console.log("ARC environment is healthy.");
    return;
  }

  console.log(`${failed.length} ARC environment check(s) failed.`);
  process.exitCode = 1;
}
