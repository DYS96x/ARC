import path from "node:path";
import { getArcConfig } from "../../core/config";

export function getWorkspaceRoot(): string {
  return getArcConfig().workspace;
}

export function resolveWorkspacePath(
  ...segments: string[]
): string {
  return path.join(getWorkspaceRoot(), ...segments);
}

export function getClientRoot(): string {
  const config = getArcConfig();

  return resolveWorkspacePath(
    config.clientsDirectory,
  );
}

export function getReportRoot(): string {
  const config = getArcConfig();

  return resolveWorkspacePath(
    config.reportsDirectory,
  );
}

export function getProductRoot(): string {
  const config = getArcConfig();

  return resolveWorkspacePath(
    config.productsDirectory,
  );
}
