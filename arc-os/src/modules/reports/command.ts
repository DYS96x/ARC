import { spawnSync } from "node:child_process";
import {
  createReport,
  findReports,
  listReports,
} from "./service";
import type { ReportRecord } from "./types";

const plannedActions = [
  "review",
  "approve",
  "export",
  "sent",
  "archive",
] as const;

function showReportHelp(): void {
  console.log(`
ARC Reports

Usage:
  arc report <action>

Implemented:
  new <client> <title>       Create a private report draft
  list [filter]              List reports with an optional filter
  open <reference>           Open a matching report in VS Code

Planned:
  review                     Move a report into review
  approve                    Approve a reviewed report
  export                     Export an approved report
  sent                       Mark a report as sent
  archive                    Archive a completed report

Examples:
  arc report new "infrastructure-test-client" "Operating System Review"
  arc report list
  arc report list draft
  arc report open "REPORT-dbc59473"
  arc report open "Operating System Review"
`);
}

function shorten(
  value: string,
  maximumLength: number,
): string {
  if (value.length <= maximumLength) {
    return value;
  }

  return `${value.slice(0, maximumLength - 3)}...`;
}

function printReports(
  reports: ReportRecord[],
): void {
  if (reports.length === 0) {
    console.log("No reports found.");
    return;
  }

  console.log("");
  console.log(
    [
      "STATUS".padEnd(11),
      "CLIENT".padEnd(30),
      "REPORT".padEnd(34),
      "REPORT ID",
    ].join("  "),
  );

  console.log(
    [
      "------".padEnd(11),
      "------".padEnd(30),
      "------".padEnd(34),
      "---------",
    ].join("  "),
  );

  for (const report of reports) {
    console.log(
      [
        shorten(report.status, 11).padEnd(11),
        shorten(report.clientName, 30).padEnd(30),
        shorten(report.title, 34).padEnd(34),
        report.id,
      ].join("  "),
    );
  }

  console.log("");
  console.log(`Total reports: ${reports.length}`);
}

function openReportInCode(
  report: ReportRecord,
): void {
  const result = spawnSync(
    "code",
    ["-r", report.sourcePath],
    {
      shell: true,
      stdio: "inherit",
    },
  );

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      `VS Code exited with status ${result.status ?? "unknown"}.`,
    );
  }
}

export function runReportsCommand(
  args: string[],
): void {
  const action = args[0]?.trim().toLowerCase();

  if (
    !action ||
    action === "help" ||
    action === "--help" ||
    action === "-h"
  ) {
    showReportHelp();
    return;
  }

  if (action === "new") {
    const clientReference = args[1]?.trim();
    const title = args.slice(2).join(" ").trim();

    if (!clientReference || !title) {
      console.error(
        'Usage: arc report new "<client>" "<report title>"',
      );
      process.exitCode = 1;
      return;
    }

    try {
      const result = createReport({
        clientReference,
        title,
        classification: "Internal",
      });

      console.log("");
      console.log("Report created successfully.");
      console.log(`Report ID: ${result.report.id}`);
      console.log(`Client: ${result.report.clientName}`);
      console.log(`Report: ${result.report.title}`);
      console.log(`Status: ${result.report.status}`);
      console.log(`Location: ${result.report.workspacePath}`);
      return;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown report creation error.";

      console.error(`Report creation failed: ${message}`);
      process.exitCode = 1;
      return;
    }
  }

  if (action === "list") {
    const filter = args.slice(1).join(" ").trim();

    try {
      const reports = listReports(
        filter || undefined,
      );

      printReports(reports);
      return;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown report listing error.";

      console.error(`Report listing failed: ${message}`);
      process.exitCode = 1;
      return;
    }
  }

  if (action === "open") {
    const reference = args.slice(1).join(" ").trim();

    if (!reference) {
      console.error(
        'Usage: arc report open "<report reference>"',
      );
      process.exitCode = 1;
      return;
    }

    try {
      const matches = findReports(reference);

      if (matches.length === 0) {
        console.error(
          `No report matched: ${reference}`,
        );
        process.exitCode = 1;
        return;
      }

      if (matches.length > 1) {
        console.error(
          `Multiple reports matched: ${reference}`,
        );

        printReports(matches);

        console.error(
          "Use a longer report ID or a more specific title.",
        );

        process.exitCode = 1;
        return;
      }

      const report = matches[0];

      openReportInCode(report);

      console.log("");
      console.log("Report opened successfully.");
      console.log(`Report ID: ${report.id}`);
      console.log(`Report: ${report.title}`);
      console.log(`Location: ${report.sourcePath}`);
      return;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown report opening error.";

      console.error(`Report opening failed: ${message}`);
      process.exitCode = 1;
      return;
    }
  }

  if (
    plannedActions.includes(
      action as (typeof plannedActions)[number],
    )
  ) {
    console.log(
      `The report "${action}" command is planned but not implemented yet.`,
    );
    return;
  }

  console.error(`Unknown report action: ${action}`);
  console.error(
    'Run "arc report help" to see available commands.',
  );
  process.exitCode = 1;
}