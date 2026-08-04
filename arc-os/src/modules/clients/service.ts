import path from "node:path";
import { getArcConfig } from "../../core/config";
import {
  ensureDirectory,
  pathExists,
  writeJsonFile,
  writeTextFile,
} from "../../infrastructure/filesystem";
import { writeAuditEvent } from "../../infrastructure/logging";
import { resolveWorkspacePath } from "../../infrastructure/workspace";
import { createArcId } from "../../shared/ids";
import { clientModuleConfig } from "./config";
import {
  createClientBrief,
  createClientReadme,
} from "./templates";
import {
  createClientSlug,
  validateCreateClientInput,
} from "./validator";
import type {
  ClientRecord,
  CreateClientInput,
  CreateClientResult,
  SecurityClassification,
} from "./types";

export function createClient(
  input: CreateClientInput,
): CreateClientResult {
  const errors = validateCreateClientInput(input);

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  const config = getArcConfig();
  const now = new Date().toISOString();
  const slug = createClientSlug(input.name);

  const classification: SecurityClassification =
    input.classification ??
    clientModuleConfig.defaultClassification;

  const clientRoot = resolveWorkspacePath(
    config.clientsDirectory,
    clientModuleConfig.activeFolder,
    slug,
  );

  if (pathExists(clientRoot)) {
    throw new Error(
      `Client workspace already exists: ${clientRoot}`,
    );
  }

  const client: ClientRecord = {
    id: createArcId("CLIENT"),
    name: input.name.trim(),
    slug,
    status: "Active",
    classification,
    createdAt: now,
    updatedAt: now,
    workspacePath: clientRoot,
  };

  const createdFolders: string[] = [];
  const createdFiles: string[] = [];

  try {
    ensureDirectory(clientRoot);
    createdFolders.push(clientRoot);

    for (const folderName of clientModuleConfig.folders) {
      const folderPath = path.join(
        clientRoot,
        folderName,
      );

      ensureDirectory(folderPath);
      createdFolders.push(folderPath);
    }

    createdFiles.push(
      writeJsonFile(
        path.join(clientRoot, "client.json"),
        client,
      ),
    );

    createdFiles.push(
      writeTextFile(
        path.join(clientRoot, "README.md"),
        createClientReadme(client),
      ),
    );

    createdFiles.push(
      writeTextFile(
        path.join(
          clientRoot,
          "01_BRIEF",
          "CLIENT_BRIEF.md",
        ),
        createClientBrief(client),
      ),
    );

    writeAuditEvent({
      event: "CLIENT_CREATED",
      module: "clients",
      status: "SUCCESS",
      subjectId: client.id,
      metadata: {
        clientName: client.name,
        classification: client.classification,
        workspacePath: client.workspacePath,
      },
    });

    return {
      client,
      createdFolders,
      createdFiles,
    };
  } catch (error) {
    writeAuditEvent({
      event: "CLIENT_CREATION_FAILED",
      module: "clients",
      status: "FAILURE",
      message:
        error instanceof Error
          ? error.message
          : "Unknown client creation failure.",
      metadata: {
        clientName: input.name,
      },
    });

    throw error;
  }
}
