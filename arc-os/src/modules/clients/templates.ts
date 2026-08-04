import type { ClientRecord } from "./types";

export function createClientReadme(client: ClientRecord): string {
  return `# ${client.name}

Client ID: ${client.id}

Status: ${client.status}

Security Classification: ${client.classification}

Created: ${client.createdAt}

---

## Workspace

- 01_BRIEF
- 02_MEETINGS
- 03_RESEARCH
- 04_EVIDENCE
- 05_REPORTS
- 06_DELIVERABLES
- 07_FINANCE
- 08_LEGAL
- 09_COMMUNICATION
- 10_ARCHIVE

---

## Governing Rule

This workspace contains private client information.

Nothing from this folder may enter 00_PUBLIC without deliberate review, sanitisation and approval.
`;
}

export function createClientBrief(client: ClientRecord): string {
  return `# ARC Client Brief

## Client

Name: ${client.name}

Client ID: ${client.id}

Status: ${client.status}

Security Classification: ${client.classification}

---

## Objective

Describe the outcome the client needs.

---

## Current Problem

Describe the current situation.

---

## Known Evidence

Record validated facts.

---

## Unknowns

Record assumptions and unanswered questions.

---

## Stakeholders

Who is affected?

Who decides?

Who approves?

---

## Deliverable

Describe what ARC will provide.

---

## Sending Requirements

Recipient:

Email subject:

Required format:

Deadline:

Confidentiality notice required:
`;
}
