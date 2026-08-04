import type { CreateClientInput } from "./types";

export function validateCreateClientInput(
  input: CreateClientInput,
): string[] {
  const errors: string[] = [];

  const name = input.name.trim();

  if (!name) {
    errors.push("Client name is required.");
  }

  if (name.length < 2) {
    errors.push("Client name must contain at least 2 characters.");
  }

  if (name.length > 100) {
    errors.push("Client name must be 100 characters or fewer.");
  }

  if (/[<>:"/\\|?*]/.test(name)) {
    errors.push("Client name contains characters that are invalid in Windows paths.");
  }

  return errors;
}

export function createClientSlug(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
