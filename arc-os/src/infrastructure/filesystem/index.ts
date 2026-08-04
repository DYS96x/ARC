import fs from "node:fs";
import path from "node:path";

export function pathExists(targetPath: string): boolean {
  return fs.existsSync(targetPath);
}

export function ensureDirectory(
  directoryPath: string,
): string {
  fs.mkdirSync(directoryPath, {
    recursive: true,
  });

  return directoryPath;
}

export function writeTextFile(
  filePath: string,
  content: string,
): string {
  ensureDirectory(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");

  return filePath;
}

export function writeJsonFile(
  filePath: string,
  value: unknown,
): string {
  return writeTextFile(
    filePath,
    `${JSON.stringify(value, null, 2)}\n`,
  );
}

export function appendTextFile(
  filePath: string,
  content: string,
): string {
  ensureDirectory(path.dirname(filePath));
  fs.appendFileSync(filePath, content, "utf8");

  return filePath;
}
