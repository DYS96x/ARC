import fs from "node:fs";
import path from "node:path";

export function showVersion(): void {
  const versionPath = path.resolve(__dirname, "../../VERSION");

  if (!fs.existsSync(versionPath)) {
    console.log("ARC OS version: unknown");
    return;
  }

  const version = fs.readFileSync(versionPath, "utf8").trim();

  console.log(`ARC OS version: ${version}`);
}
