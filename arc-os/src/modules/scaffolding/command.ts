import { createModule } from "./service";

export function runModuleCommand(
  args: string[],
): void {
  const action = args[0]?.toLowerCase();

  if (action !== "new") {
    console.error("Usage: arc module new <module name>");
    process.exitCode = 1;
    return;
  }

  const moduleName = args.slice(1).join(" ").trim();

  if (!moduleName) {
    console.error("Module name is required.");
    console.error('Example: arc module new "reports"');
    process.exitCode = 1;
    return;
  }

  try {
    const result = createModule({
      name: moduleName,
    });

    console.log("");
    console.log("HOLY ARC module created successfully.");
    console.log(`Module: ${result.name}`);
    console.log(`Location: ${result.modulePath}`);
    console.log(`Files created: ${result.createdFiles.length}`);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown module creation error.";

    console.error(`Module creation failed: ${message}`);
    process.exitCode = 1;
  }
}
