# DYS96 Ecosystem Architecture Index

Version: 1.0  
Status: Active  
Classification: Internal

---

## Purpose

This index defines the official architecture hierarchy of the DYS96 Ecosystem.

Every platform, product, service, module, repository, workflow and client solution must identify where it belongs inside this hierarchy.

No major system should exist without a traceable architectural position.

---

# Level 0 — Ecosystem

## DYS96 Ecosystem

The complete ecosystem, identity, portfolio and long-term architecture.

Canonical document:

- [DYS96 Ecosystem Architecture](./00_DYS96_ECOSYSTEM.md)

Decision record:

- [ADR-0002 — DYS96 Ecosystem Separation](../ADR/ADR-0002-DYS96-ECOSYSTEM-SEPARATION.md)

---

# Level 1 — Primary Systems

## 6AME 9ESIGN

Classification:

Systems Studio

Responsibility:

- Vision
- Strategy
- Clients
- Revenue
- Partnerships
- Systems design
- Product portfolio
- Commercial delivery

---

## VOID

Classification:

Intelligence Operating System

Responsibility:

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

---

## HOLY ARC

Classification:

Platform Operating System

Responsibility:

- Platform coordination
- Shared capabilities
- Intelligence access
- Execution access
- Simulation access
- Integration boundaries
- Experience support

---

# Level 2 — HOLY ARC Systems

## WOS

Classification:

Coordination System

Responsibility:

- Workflows
- Orchestration
- Scheduling
- Tasks
- Events
- Approvals
- Permissions
- Automation
- Escalation

---

## Services

Classification:

Execution System

Responsibility:

- Reports
- Documents
- Export
- Notifications
- Integrations
- Publishing
- Deployment
- Operational automation

---

## World Engine

Classification:

Simulation and Context System

Responsibility:

- Organisational models
- User models
- Geography
- Economies
- Environments
- Relationships
- Signals
- Consequences
- Digital twins
- Future-state simulation

---

## Platform APIs

Classification:

Integration System

Responsibility:

- Versioned contracts
- Internal integration
- External integration
- Product access
- Client-system access
- AI-agent access
- Event exchange
- Security boundaries

---

# Level 3 — Experience Layer

## FACEXOFF

Classification:

Flagship Experience

Responsibility:

- Prove the platform in reality
- Validate shared capabilities
- Generate real-world learning
- Strengthen HOLY ARC
- Demonstrate ecosystem value

---

## Future Products

Classification:

Product Experiences

Responsibility:

- Deliver focused user value
- Reuse HOLY ARC capabilities
- Avoid rebuilding shared platform systems
- Return validated learning to the platform

---

## Client Solutions

Classification:

Client Experiences

Responsibility:

- Deliver tailored Business Operating Systems
- Apply HOLY ARC safely
- Respect client boundaries
- Preserve security and ownership
- Return sanitised learning into ARC knowledge

---

# Canonical Responsibility Law

6AME 9ESIGN designs.

VOID thinks.

HOLY ARC enables.

WOS coordinates.

Services execute.

World Engine simulates context.

Platform APIs integrate.

Experiences deliver value.

---

# Repository Traceability

Every repository must declare:

- Ecosystem level
- Owning system
- Primary responsibility
- Dependencies
- Interfaces
- Security classification
- Related ADRs
- Related architecture documents

Example:

```text
Repository: facexoff

Ecosystem Level: 3
Owner: Experience Layer
Platform: HOLY ARC
Intelligence: VOID
Coordination: WOS
Execution: Services
Context: World Engine
Integration: Platform APIs