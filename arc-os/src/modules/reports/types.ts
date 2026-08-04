export type ReportStatus =
  | "Draft"
  | "Review"
  | "Approved"
  | "Exported"
  | "Sent"
  | "Archived";

export type ReportClassification =
  | "Public"
  | "Partner"
  | "Internal"
  | "Restricted";

export type ReportRecord = {
  id: string;
  title: string;
  slug: string;
  clientId: string;
  clientName: string;
  clientSlug: string;
  project?: string;
  status: ReportStatus;
  classification: ReportClassification;
  createdAt: string;
  updatedAt: string;
  workspacePath: string;
  sourcePath: string;
};

export type CreateReportInput = {
  clientReference: string;
  title: string;
  project?: string;
  classification?: ReportClassification;
};

export type CreateReportResult = {
  report: ReportRecord;
  createdFolders: string[];
  createdFiles: string[];
};