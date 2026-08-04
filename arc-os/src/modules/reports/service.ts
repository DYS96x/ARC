import fs from "node:fs";
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
import { reportsModuleConfig } from "./config";
import {
  createReportDocument,
  createReportReadme,
} from "./templates";
import {
  createClientReferenceSlug,
  createReportSlug,
  validateCreateReportInput,
} from "./validator";
import type {
  CreateReportInput,
  CreateReportResult,
  ReportClassification,
  ReportRecord,
} from "./types";

type ClientMetadata = {
  id: string;
  name: string;
  slug: string;
  workspacePath: string;
};

const reportStageFolders = [
  reportsModuleConfig.draftsFolder,
  reportsModuleConfig.reviewFolder,
  reportsModuleConfig.approvedFolder,
  reportsModuleConfig.exportsFolder,
  reportsModuleConfig.sentFolder,
  reportsModuleConfig.archiveFolder,
] as const;

function loadClient(
  clientReference: string,
): ClientMetadata {
  const config = getArcConfig();
  const clientSlug = createClientReferenceSlug(clientReference);

  const clientPath = resolveWorkspacePath(
    config.clientsDirectory,
    "ACTIVE",
    clientSlug,
  );

  const metadataPath = path.join(
    clientPath,
    "client.json",
  );

  if (!pathExists(metadataPath)) {
    throw new Error(
      `Active client not found: ${clientReference}`,
    );
  }

  const raw = fs.readFileSync(metadataPath, "utf8");
  const cleanRaw = raw.replace(/^\uFEFF/, "");

  return JSON.parse(cleanRaw) as ClientMetadata;
}

function loadReportMetadata(
  metadataPath: string,
): ReportRecord | undefined {
  try {
    const raw = fs.readFileSync(metadataPath, "utf8");
    const cleanRaw = raw.replace(/^\uFEFF/, "");

    return JSON.parse(cleanRaw) as ReportRecord;
  } catch {
    return undefined;
  }
}

export function createReport(
  input: CreateReportInput,
): CreateReportResult {
  const errors = validateCreateReportInput(input);

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  const config = getArcConfig();
  const client = loadClient(input.clientReference);
  const now = new Date().toISOString();
  const reportSlug = createReportSlug(input.title);

  const classification: ReportClassification =
    input.classification ??
    reportsModuleConfig.defaultClassification;

  const reportId = createArcId("REPORT");
  const reportFolderName = `${reportId}-${reportSlug}`;

  const reportRoot = resolveWorkspacePath(
    config.reportsDirectory,
    reportsModuleConfig.draftsFolder,
    reportFolderName,
  );

  if (pathExists(reportRoot)) {
    throw new Error(
      `Report workspace already exists: ${reportRoot}`,
    );
  }

  const sourcePath = path.join(
    reportRoot,
    "REPORT.md",
  );

  const report: ReportRecord = {
    id: reportId,
    title: input.title.trim(),
    slug: reportSlug,
    clientId: client.id,
    clientName: client.name,
    clientSlug: client.slug,
    project: input.project?.trim() || undefined,
    status: "Draft",
    classification,
    createdAt: now,
    updatedAt: now,
    workspacePath: reportRoot,
    sourcePath,
  };

  const createdFolders: string[] = [];
  const createdFiles: string[] = [];

  try {
    ensureDirectory(reportRoot);
    createdFolders.push(reportRoot);

    createdFiles.push(
      writeJsonFile(
        path.join(reportRoot, "report.json"),
        report,
      ),
    );

    createdFiles.push(
      writeTextFile(
        sourcePath,
        createReportDocument(report),
      ),
    );

    createdFiles.push(
      writeTextFile(
        path.join(reportRoot, "README.md"),
        createReportReadme(report),
      ),
    );

    const clientReportLinkPath = path.join(
      client.workspacePath,
      "05_REPORTS",
      `${report.id}.json`,
    );

    createdFiles.push(
      writeJsonFile(clientReportLinkPath, {
        reportId: report.id,
        title: report.title,
        status: report.status,
        reportWorkspace: report.workspacePath,
        createdAt: report.createdAt,
      }),
    );

    writeAuditEvent({
      event: "REPORT_CREATED",
      module: "reports",
      status: "SUCCESS",
      subjectId: report.id,
      metadata: {
        reportTitle: report.title,
        clientId: report.clientId,
        clientName: report.clientName,
        classification: report.classification,
        workspacePath: report.workspacePath,
      },
    });

    return {
      report,
      createdFolders,
      createdFiles,
    };
  } catch (error) {
    writeAuditEvent({
      event: "REPORT_CREATION_FAILED",
      module: "reports",
      status: "FAILURE",
      message:
        error instanceof Error
          ? error.message
          : "Unknown report creation failure.",
      metadata: {
        clientReference: input.clientReference,
        reportTitle: input.title,
      },
    });

    throw error;
  }
}

export function listReports(
  filter?: string,
): ReportRecord[] {
  const config = getArcConfig();
  const reportsRoot = resolveWorkspacePath(
    config.reportsDirectory,
  );

  const reports: ReportRecord[] = [];

  for (const stageFolder of reportStageFolders) {
    const stagePath = path.join(
      reportsRoot,
      stageFolder,
    );

    if (!pathExists(stagePath)) {
      continue;
    }

    const entries = fs.readdirSync(stagePath, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const metadataPath = path.join(
        stagePath,
        entry.name,
        "report.json",
      );

      if (!pathExists(metadataPath)) {
        continue;
      }

      const report = loadReportMetadata(metadataPath);

      if (report) {
        reports.push(report);
      }
    }
  }

  const normalizedFilter = filter
    ?.trim()
    .toLowerCase();

  const filteredReports = normalizedFilter
    ? reports.filter((report) => {
        const searchableText = [
          report.id,
          report.title,
          report.slug,
          report.clientId,
          report.clientName,
          report.clientSlug,
          report.status,
          report.classification,
          report.project ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedFilter);
      })
    : reports;

  return filteredReports.sort(
    (first, second) =>
      new Date(second.updatedAt).getTime() -
      new Date(first.updatedAt).getTime(),
  );
}

export function findReports(
  reference: string,
): ReportRecord[] {
  const normalizedReference = reference
    .trim()
    .toLowerCase();

  if (!normalizedReference) {
    return [];
  }

  return listReports().filter((report) => {
    const searchableText = [
      report.id,
      report.title,
      report.slug,
      report.clientId,
      report.clientName,
      report.clientSlug,
      report.status,
      report.classification,
      report.project ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedReference);
  });
}