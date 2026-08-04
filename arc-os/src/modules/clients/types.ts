export type ClientStatus =
  | "Prospect"
  | "Active"
  | "Completed"
  | "Archived";

export type SecurityClassification =
  | "Public"
  | "Partner"
  | "Internal"
  | "Restricted";

export type ClientRecord = {
  id: string;
  name: string;
  slug: string;
  status: ClientStatus;
  classification: SecurityClassification;
  createdAt: string;
  updatedAt: string;
  workspacePath: string;
};

export type CreateClientInput = {
  name: string;
  classification?: SecurityClassification;
};

export type CreateClientResult = {
  client: ClientRecord;
  createdFolders: string[];
  createdFiles: string[];
};
