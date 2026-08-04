import { randomUUID } from "node:crypto";

export function createArcId(prefix: string): string {
  const safePrefix = prefix
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${safePrefix}-${randomUUID()}`;
}
