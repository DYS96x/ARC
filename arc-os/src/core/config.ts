import fs from "node:fs";
import path from "node:path";

export type ArcConfig = {
  ecosystem: string;
  studio: string;
  intelligenceSystem: string;
  platform: string;
  workspace: string;
  publicDirectory: string;
  partnerDirectory: string;
  internalDirectory: string;
  restrictedDirectory: string;
  clientsDirectory: string;
  reportsDirectory: string;
  productsDirectory: string;
  docsApplication: string;
  versionFile: string;
  logDirectory: string;
};

const projectRoot = path.resolve(__dirname, "../..");
const configPath = path.join(
  projectRoot,
  "config",
  "arc.config.json",
);

let cachedConfig: ArcConfig | undefined;

export function getProjectRoot(): string {
  return projectRoot;
}

export function getArcConfig(): ArcConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `ARC configuration file not found: ${configPath}`,
    );
  }

  const raw = fs.readFileSync(configPath, "utf8");
  cachedConfig = JSON.parse(raw) as ArcConfig;

  return cachedConfig;
}
