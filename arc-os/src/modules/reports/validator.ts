import type { CreateReportInput } from "./types";

export function validateCreateReportInput(
  input: CreateReportInput,
): string[] {
  const errors: string[] = [];

  const clientReference = input.clientReference.trim();
  const title = input.title.trim();

  if (!clientReference) {
    errors.push("Client reference is required.");
  }

  if (!title) {
    errors.push("Report title is required.");
  }

  if (title.length < 3) {
    errors.push("Report title must contain at least 3 characters.");
  }

  if (title.length > 150) {
    errors.push("Report title must be 150 characters or fewer.");
  }

  if (/[<>:"/\\|?*]/.test(title)) {
    errors.push(
      "Report title contains characters that are invalid in Windows paths.",
    );
  }

  return errors;
}

export function createReportSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createClientReferenceSlug(
  clientReference: string,
): string {
  return clientReference
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}