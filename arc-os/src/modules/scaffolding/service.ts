import path from "node:path";
import {
  ensureDirectory,
  pathExists,
  writeTextFile,
} from "../../infrastructure/filesystem";
import { writeAuditEvent } from "../../infrastructure/logging";
import { getProjectRoot } from "../../core/config";
import {
  createCommandTemplate,
  createConfigTemplate,
  createIndexTemplate,
  createLoggerTemplate,
  createReadmeTemplate,
  createServiceTemplate,
  createTemplatesTemplate,
  createTestTemplate,
  createTypesTemplate,
  createValidatorTemplate,
} from "./templates";
import {
  createModuleIdentifier,
  createModuleSlug,
  createModuleTitle,
  validateModuleInput,
} from "./validator";
import type {
  CreateModuleInput,
  CreateModuleResult,
} from "./types";

export function createModule(
  input: CreateModuleInput,
): CreateModuleResult {
  const errors = validateModuleInput(input);

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  const slug = createModuleSlug(input.name);
  const identifier = createModuleIdentifier(slug);
  const title = createModuleTitle(slug);

  const modulePath = path.join(
    getProjectRoot(),
    "src",
    "modules",
    slug,
  );

  const expectedFiles = [
    "index.ts",
    "command.ts",
    "service.ts",
    "validator.ts",
    "types.ts",
    "templates.ts",
    "logger.ts",
    "config.ts",
    "README.md",
  ];

  const existingFiles = expectedFiles.filter((fileName) =>
    pathExists(path.join(modulePath, fileName)),
  );

  if (existingFiles.length > 0) {
    throw new Error(
      `Module already contains implementation files: ${modulePath}`,
    );
  }

  const templateInput = {
    slug,
    identifier,
    title,
  };

  const createdFolders = [
    ensureDirectory(modulePath),
    ensureDirectory(path.join(modulePath, "tests")),
  ];

  const fileMap = new Map<string, string>([
    ["index.ts", createIndexTemplate(templateInput)],
    ["command.ts", createCommandTemplate(templateInput)],
    ["service.ts", createServiceTemplate(templateInput)],
    ["validator.ts", createValidatorTemplate(templateInput)],
    ["types.ts", createTypesTemplate(templateInput)],
    ["templates.ts", createTemplatesTemplate()],
    ["logger.ts", createLoggerTemplate()],
    ["config.ts", createConfigTemplate(templateInput)],
    ["README.md", createReadmeTemplate(templateInput)],
    [
      path.join("tests", `${slug}.test.ts`),
      createTestTemplate(templateInput),
    ],
  ]);

  const createdFiles: string[] = [];

  for (const [relativePath, content] of fileMap) {
    const filePath = path.join(modulePath, relativePath);

    writeTextFile(filePath, content);
    createdFiles.push(filePath);
  }

  writeAuditEvent({
    event: "MODULE_CREATED",
    module: "scaffolding",
    status: "SUCCESS",
    metadata: {
      moduleName: slug,
      modulePath,
      createdFiles: createdFiles.length,
    },
  });

  return {
    name: slug,
    modulePath,
    createdFolders,
    createdFiles,
  };
}
