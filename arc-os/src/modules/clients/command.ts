import { createClient } from "./service";

export function runClientCommand(args: string[]): void {
  const action = args[0]?.toLowerCase();

  if (action !== "new") {
    console.error("Usage: arc client new <client name>");
    process.exitCode = 1;
    return;
  }

  const clientName = args.slice(1).join(" ").trim();

  if (!clientName) {
    console.error("Client name is required.");
    console.error('Example: arc client new "Example Client"');
    process.exitCode = 1;
    return;
  }

  try {
    const result = createClient({
      name: clientName,
      classification: "Internal",
    });

    console.log("");
    console.log("Client created successfully.");
    console.log(`Client ID: ${result.client.id}`);
    console.log(`Client: ${result.client.name}`);
    console.log(`Location: ${result.client.workspacePath}`);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown client creation error.";

    console.error(`Client creation failed: ${message}`);
    process.exitCode = 1;
  }
}
