import path from "node:path";
import { getArcConfig } from "../../core/config";
import { appendTextFile } from "../filesystem";
import { resolveWorkspacePath } from "../workspace";

export type AuditEvent = {
  event: string;
  module: string;
  status: "SUCCESS" | "FAILURE" | "INFO";
  subjectId?: string;
  message?: string;
  metadata?: Record<string, unknown>;
};

export function writeAuditEvent(
  event: AuditEvent,
): void {
  const config = getArcConfig();

  const logPath = path.join(
    resolveWorkspacePath(config.logDirectory),
    "arc-os.jsonl",
  );

  const record = {
    timestamp: new Date().toISOString(),
    platform: config.platform,
    ...event,
  };

  appendTextFile(
    logPath,
    `${JSON.stringify(record)}\n`,
  );
}
