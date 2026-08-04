import type { CreateModuleInput } from "./types";

export function validateModuleInput(
  input: CreateModuleInput,
): string[] {
  const errors: string[] = [];
  const name = input.name.trim();

  if (!name) {
    errors.push("Module name is required.");
  }

  if (name.length < 2) {
    errors.push("Module name must contain at least 2 characters.");
  }

  if (name.length > 50) {
    errors.push("Module name must be 50 characters or fewer.");
  }

  if (!/^[a-zA-Z0-9-_ ]+$/.test(name)) {
    errors.push(
      "Module name may contain only letters, numbers, spaces, hyphens and underscores.",
    );
  }

  return errors;
}

export function createModuleSlug(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createModuleIdentifier(
  slug: string,
): string {
  return slug.replace(/-([a-z0-9])/g, (_, character: string) =>
    character.toUpperCase(),
  );
}

export function createModuleTitle(slug: string): string {
  return slug
    .split("-")
    .map(
      (part) =>
        `${part.charAt(0).toUpperCase()}${part.slice(1)}`,
    )
    .join(" ");
}
