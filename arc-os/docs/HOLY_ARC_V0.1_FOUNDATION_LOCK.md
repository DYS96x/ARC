# HOLY ARC v0.1 — Foundation Lock

Version: 0.1.0  
Status: Foundation Locked  
Classification: Internal  
Platform: HOLY ARC  
Architecture: Stable

---

## Mission

Build a modular Platform Operating System that continuously increases the capability of future work.

---

## Ecosystem Position

```text
                    DYS96 ECOSYSTEM
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
   6AME 9ESIGN                            VOID
 (Systems Studio)                (Intelligence Operating System)
        │                                     │
        └──────────────────┬──────────────────┘
                           │
                        HOLY ARC
               (Platform Operating System)
                           │
      ┌──────────────┬──────────────┬──────────────┬──────────────┐
      │              │              │              │
     WOS         Services      World Engine    Platform APIs
(Coordination)  (Execution)    (Simulation)    (Integration)
                           │
                           ▼
                    Experience Layer
                           │
      ┌──────────────┬──────────────┬──────────────┐
      │              │              │
   FACEXOFF     Future Products   Client Solutions
```

---

# Platform Architecture

HOLY ARC is organised into four implementation layers:

```text
HOLY ARC
│
├── Infrastructure
├── Shared
├── Modules
└── Experiences
```

---

## Infrastructure

Infrastructure owns reusable technical capability.

Current capabilities:

- Filesystem
- Workspace resolution
- Configuration
- Audit logging

Infrastructure must not contain product-specific or module-specific business logic.

---

## Shared

Shared owns reusable business and platform utilities.

Current capabilities:

- Validation
- ID generation
- Templates
- Contracts

A capability belongs in Shared when multiple modules can reuse it without transferring ownership of their primary responsibilities.

---

## Modules

Modules own business responsibilities.

Current modules:

- Clients
- Reports
- Scaffolding

Planned modules:

- Knowledge
- Products
- Documentation
- Git
- Studio

Each module owns one primary responsibility.

---

## Experiences

Experiences deliver user-facing value.

Examples:

- FACEXOFF
- Future products
- Client solutions
- Internal operating interfaces

Experiences express intent and consume platform capabilities.

They do not recreate HOLY ARC infrastructure or shared services.

---

# Module Constitution

Every HOLY ARC module must contain:

```text
MODULE.md
README.md
command.ts
service.ts
validator.ts
templates.ts
logger.ts
config.ts
types.ts
tests/
```

---

## MODULE.md

`MODULE.md` is the constitutional identity of a module.

It must define:

- Mission
- Primary responsibility
- Non-responsibilities
- Dependencies
- Capabilities provided
- Inputs
- Outputs
- Events
- Errors
- Multiplier
- Maturity
- Lifecycle
- Roadmap
- Engineering rules
- Success criteria

---

## README.md

`README.md` is the developer implementation guide.

It may contain:

- CLI examples
- Internal implementation notes
- Development instructions
- File descriptions
- API usage
- Testing instructions

Architecture belongs in `MODULE.md`.

Implementation guidance belongs in `README.md`.

---

# Multiplier Law

A module is not complete merely because it works.

A module is complete when it measurably increases the capability of future work.

The multiplier is measured across five dimensions:

| Dimension | Meaning |
|---|---|
| Reuse | Can other modules, products or client solutions reuse it? |
| Speed | Does it reduce future execution or development time? |
| Safety | Does it reduce mistakes, exposure or operational risk? |
| Knowledge | Does it preserve evidence and reusable learning? |
| Scale | Does it support more clients, products, users or operations? |

Each dimension is scored from `0–10`.

The current multiplier is the average of all five dimensions.

Multiplier claims must eventually be supported by evidence.

---

## Multiplier Evidence

Valid evidence may include:

- Usage by another module
- Usage by an experience
- Reduced repeated manual work
- Measured time saved
- Reduced failure rate
- Reduced security exposure
- Reusable knowledge produced
- Increased operating capacity
- Stable interfaces reused across the platform

---

# Maturity Model

Every module has a visible maturity state.

| Level | Meaning |
|---|---|
| Seed | Module structure and identity exist |
| Growing | Core capability is being implemented |
| Stable | Tested and ready for normal use |
| Platform | Reused by multiple modules or experiences |
| Foundational | Critical capability used throughout HOLY ARC |

---

## Seed

Requirements:

- Module structure exists
- Primary responsibility is proposed
- Initial contracts exist
- Baseline documentation exists

---

## Growing

Requirements:

- Primary responsibility is locked
- Core service is implemented
- Validation exists
- Audit events exist
- Initial tests pass

---

## Stable

Requirements:

- Main workflows are complete
- Failure paths are tested
- Documentation matches implementation
- No unresolved critical defects
- Multiplier evidence has begun

---

## Platform

Requirements:

- Reused by multiple modules or experiences
- Interfaces are stable
- Duplicate capability has been removed elsewhere
- Multiplier improvement is measurable

---

## Foundational

Requirements:

- Used throughout HOLY ARC
- Failure would materially affect the platform
- Governance exists
- Recovery controls exist
- Architecture and contracts are formally locked

---

# Engineering Laws

## Law 01 — Single Responsibility

One module owns one primary responsibility.

No responsibility should be silently shared between modules.

---

## Law 02 — Infrastructure Is Reused

Modules must use shared infrastructure instead of creating duplicate filesystem, logging, workspace or configuration systems.

---

## Law 03 — Shared Capability Is Promoted

When capability becomes reusable across multiple modules, it should move into Shared or Infrastructure.

---

## Law 04 — Experiences Do Not Rebuild the Platform

Experiences consume HOLY ARC capabilities through controlled contracts.

---

## Law 05 — Audit Evidence Is Required

Meaningful platform actions must emit audit evidence.

---

## Law 06 — Documentation Is Architecture

Documentation must remain aligned with actual responsibility, contracts and implementation.

---

## Law 07 — Multiplier Must Increase

Every module and sprint must make future work easier, faster, safer, more reusable or more scalable.

---

## Law 08 — Reality Is Final Authority

Architecture, multiplier scores and maturity claims must be tested against real outcomes.

---

# Module Lifecycle

Every module follows:

```text
Intent
  ↓
Command
  ↓
Validation
  ↓
Service
  ↓
Logging
  ↓
Knowledge
  ↓
Multiplier
  ↓
Result
  ↓
Feedback
```

Feedback may move in every meaningful direction.

HOLY ARC is a living system, not a one-way pipeline.

---

# Sprint OS Alignment

Every HOLY ARC sprint follows:

```text
Mission
  ↓
Responsibility
  ↓
Contracts
  ↓
Implementation
  ↓
Evidence
  ↓
Knowledge
  ↓
Multiplier
  ↓
Repeat
```

A sprint is not complete because code was written.

It is complete when platform capability has increased and evidence has been recorded.

---

# Foundation Completed

The following foundation is operational:

- ARC CLI
- Global `arc` command
- Central configuration
- Workspace resolution
- Shared filesystem service
- Audit logging
- Shared ID generation
- Shared validation
- Client Module
- Module Generator
- MODULE.md standard
- Multiplier model
- Maturity model
- Public/private publishing boundary
- Internal architecture hierarchy

---

# Current Platform Commands

```powershell
arc help
arc version
arc doctor
arc client new <client name>
arc module new <module name>
```

---

# Version Lock

```text
Platform: HOLY ARC
Version: 0.1.0
Status: Foundation Locked
Architecture: Stable
Breaking Changes: Require an ADR
```

---

# Change Control

Breaking changes to the v0.1 foundation require:

1. A documented architecture problem
2. Evidence that the current structure is inadequate
3. Impact analysis
4. Architecture Decision Record
5. Migration plan
6. Formal acceptance
7. Version update

Ordinary feature development must not silently change the foundation.

---

# Next Phase — HOLY ARC v0.2

Priority sequence:

1. Reports Module
2. Knowledge Module
3. Products Module
4. Documentation Module
5. Git Module
6. Studio Module

All new modules must be generated and governed through ARC OS.

---

# Final Principle

HOLY ARC is not measured by the quantity of code it contains.

It is measured by the future capability it creates.

Every module should strengthen the platform.

Every product should prove the platform.

Every outcome should create feedback.

Every lesson should increase the multiplier of what comes next.