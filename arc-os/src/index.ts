#!/usr/bin/env node

import { showHelp } from "./commands/help";
import { showVersion } from "./commands/version";
import { runDoctor } from "./commands/doctor";
import { runClientCommand } from "./modules/clients";
import { runReportsCommand } from "./modules/reports";
import { runModuleCommand } from "./modules/scaffolding";

const command = process.argv[2]?.toLowerCase() ?? "help";
const args = process.argv.slice(3);

switch (command) {
  case "help":
  case "--help":
  case "-h":
    showHelp();
    break;

  case "version":
  case "--version":
  case "-v":
    showVersion();
    break;

  case "doctor":
    runDoctor();
    break;

  case "client":
    runClientCommand(args);
    break;

  case "report":
  case "reports":
    runReportsCommand(args);
    break;

  case "module":
    runModuleCommand(args);
    break;

  default:
    console.error(`Unknown ARC command: ${command}`);
    console.error('Run "arc help" to see available commands.');
    process.exitCode = 1;
}