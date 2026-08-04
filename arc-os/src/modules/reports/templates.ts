import type { ReportRecord } from "./types";

export function createReportDocument(
  report: ReportRecord,
): string {
  return `# ${report.title}

Report ID: ${report.id}

Client: ${report.clientName}

Client ID: ${report.clientId}

Project: ${report.project ?? "Not assigned"}

Prepared By: 6AME 9ESIGN

Created: ${report.createdAt}

Status: ${report.status}

Security Classification: ${report.classification}

---

# Executive Summary

Provide the central finding, why it matters, and the recommended action.

---

# Client Objective

What question, problem, or decision is this report addressing?

---

# Current Reality

Separate:

- Confirmed facts
- Client statements
- ARC observations
- Assumptions requiring validation

---

# Key Findings

## Finding 01

Evidence:

Impact:

Confidence:

---

## Finding 02

Evidence:

Impact:

Confidence:

---

# System Analysis

Describe:

- Participants
- Relationships
- Information flows
- Decisions
- Bottlenecks
- Risks
- Feedback loops

---

# Recommendations

## Recommendation 01

Action:

Owner:

Priority:

Expected outcome:

Risk:

---

# Implementation Path

## Immediate

Actions for the next 7 days.

## Near Term

Actions for the next 30–90 days.

## Long Term

Actions beyond 90 days.

---

# Risks and Controls

| Risk | Likelihood | Impact | Control | Owner |
|---|---|---|---|---|

---

# Decisions Required

List the decisions the client must make.

---

# Sources and Evidence

Record every source beneath the claim it supports.

---

# Next Steps

- Action:
- Owner:
- Deadline:
- Review point:

---

# Approval

Prepared by:

Reviewed by:

Approved by:

Approval date:
`;
}

export function createReportReadme(
  report: ReportRecord,
): string {
  return `# Report Workspace

## Identity

Report: ${report.title}

Report ID: ${report.id}

Client: ${report.clientName}

Status: ${report.status}

Classification: ${report.classification}

---

## Files

- REPORT.md — working report source
- report.json — report metadata
- README.md — workspace instructions

---

## Security Rule

This report is private by default.

It must not enter 00_PUBLIC without deliberate sanitisation, review and approval.

Export does not imply approval.

Approval does not imply sending.
`;
}