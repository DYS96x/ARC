# ADR-0002 — DYS96 Ecosystem Separation

## Status

Accepted

## Date

2026-08-04

## Owner

DYS96 Ecosystem

---

## Context

The ecosystem previously used overlapping definitions for:

- 6AME 9ESIGN
- VOID
- HOLY ARC
- WOS
- Services
- World Engine
- Platform APIs
- Experiences

This created uncertainty around:

- Business ownership
- Intelligence ownership
- Platform responsibility
- Execution responsibility
- Product boundaries
- Client solution boundaries

A stable Level 0 architecture was required before HOLY ARC implementation continued.

---

## Decision

The DYS96 Ecosystem will use the following canonical separation:

### DYS96 Ecosystem

The complete ecosystem, identity, portfolio and long-term architecture.

### 6AME 9ESIGN

The Systems Studio.

Owns:

- Vision
- Strategy
- Clients
- Revenue
- Partnerships
- Systems design
- Product portfolio
- Commercial delivery

### VOID

The Intelligence Operating System.

Owns:

- Observation
- Discovery
- Memory
- Reasoning
- Pattern recognition
- Prediction
- Recommendation
- Explanation
- Planning
- Learning

### HOLY ARC

The Platform Operating System.

Connects business intent and intelligence to reusable platform capabilities.

### WOS

The Coordination System.

Owns:

- Workflows
- Orchestration
- Scheduling
- Tasks
- Events
- Approvals
- Permissions
- Automation
- Escalation

### Services

The Execution System.

Owns:

- Reports
- Documents
- Export
- Notifications
- Integrations
- Publishing
- Deployment
- Operational automation

### World Engine

The Simulation and Context System.

Models:

- Organisations
- Users
- Geography
- Economies
- Environments
- Relationships
- Signals
- Consequences
- Digital twins
- Possible future states

### Platform APIs

The Integration System.

Provides controlled and versioned access between the platform and its experiences.

### Experience Layer

The user-facing value layer.

Includes:

- FACEXOFF
- Future products
- Client solutions
- Internal interfaces
- Partner applications

---

## Canonical Responsibility Law

6AME 9ESIGN designs.

VOID thinks.

HOLY ARC enables.

WOS coordinates.

Services execute.

World Engine simulates context.

Platform APIs integrate.

Experiences deliver value.

---

## Consequences

### Positive

- Every major layer has one primary responsibility.
- Intelligence is separated from execution.
- The business is separated from the platform.
- Products can reuse shared capabilities.
- Client solutions fit inside the same architecture.
- Repository ownership becomes clearer.
- Future systems can scale without redefining the ecosystem.

### Constraints

- Experiences must not bypass HOLY ARC.
- VOID must not directly perform high-impact execution.
- Shared capabilities belong in HOLY ARC.
- Product-specific logic remains inside the experience.
- Platform APIs must remain versioned and controlled.
- Major architectural changes require a new ADR.

---

## Related Documents

- `02_INTERNAL/ARCHITECTURE/00_DYS96_ECOSYSTEM.md`
- `00_FOUNDATION/ARC_CONSTITUTION.md`
- `05_PLATFORMS/ARC_ARCHITECTURE_BLUEPRINT.md`
- `05_PLATFORMS/ARC_ENGINE_CONTRACTS.md`

---

## Review Trigger

Review this decision only when:

- A new ecosystem-level layer is proposed
- Responsibility boundaries materially change
- VOID or HOLY ARC changes classification
- The Experience Layer requires a new platform relationship
- Reality proves the current separation is inadequate