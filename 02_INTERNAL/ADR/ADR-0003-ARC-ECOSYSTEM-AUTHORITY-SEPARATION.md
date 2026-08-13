# ADR-0003 — ARC Ecosystem Authority Separation

Status: ACCEPTED  
Date: 2026-08-13

---

# Context

The ARC ecosystem evolved through multiple architectural generations.

Earlier architecture assigned overlapping responsibilities across VOID,
ARC, HOLY ARC, and execution systems.

In particular, historical documents described VOID as an intelligence
system responsible for reasoning, analysis, confidence, prediction, and
recommendation.

Implementation evolution demonstrated that these responsibilities require
clearer separation.

The ecosystem therefore establishes one canonical responsibility model.

---

# Decision

The ARC ecosystem SHALL use the following authority chain:

Reality
↓
VOID
↓
ARC
↓
HOLY ARC
↓
Operational Capabilities
↓
6AME 9ESIGN
↓
Products / Systems / Experiences

Each layer has one primary responsibility.

---

# Reality

Reality is the ultimate external source of evidence.

Reality is not controlled by any ARC system.

Observed outcomes may confirm, challenge, or invalidate existing
understanding.

No internal confidence score overrides observed reality.

---

# VOID — Reality Integrity

VOID protects the integrity of evidence entering and moving through the
ecosystem.

VOID owns:

- evidence integrity
- provenance
- source integrity
- contradiction detection
- manipulation detection
- uncertainty preservation
- reality-validation boundaries

VOID does not own:

- intelligence reasoning
- recommendation generation
- strategic decision authority
- governance authority
- execution authority

VOID protects reality.

VOID does not decide what reality should mean.

---

# ARC — Adaptive Intelligence

ARC transforms validated evidence and persistent memory into understanding.

ARC owns:

- persistent ecosystem memory
- knowledge relationships
- reasoning
- pattern discovery
- intelligence generation
- confidence estimation
- prediction
- recommendation
- learning from observed outcomes
- adaptation of understanding

ARC may recommend.

ARC may learn.

ARC may improve its understanding.

ARC may not grant itself authority.

ARC may not approve its own recommendations.

ARC may not silently execute recommendations.

---

# HOLY ARC — Constitutional Governance

HOLY ARC governs the relationship between intelligence, authority,
capability, and responsibility.

HOLY ARC owns:

- constitutional governance
- responsibility boundaries
- authority validation
- permission boundaries
- approval rules
- system relationship governance
- escalation
- challengeability
- constitutional traceability

HOLY ARC does not replace ARC intelligence.

HOLY ARC does not replace VOID evidence integrity.

HOLY ARC does not become the operational executor.

HOLY ARC governs.

---

# Operational Capabilities

Operational capabilities transform approved intent into controlled action.

Execution is permitted only when the required governance and permissions
exist.

Execution capability does not create its own authority.

Execution capability does not reinterpret rejected governance as approval.

Execution capability records what actually occurred.

---

# 6AME 9ESIGN

6AME 9ESIGN transforms governed capability into products, systems,
experiences, and commercial implementations.

It is the systems studio and product-building layer.

It does not replace the constitutional, intelligence, evidence, or
governance layers beneath it.

---

# Canonical Separation

The canonical shorthand is:

> Reality decides what happened.  
> VOID protects the evidence.  
> ARC understands the evidence.  
> HOLY ARC governs what may happen next.  
> Operational capabilities perform approved action.  
> 6AME 9ESIGN turns capability into products and experiences.

---

# Recommendation Is Not Authority

An ARC recommendation is intelligence output.

A recommendation does not constitute:

- approval
- permission
- authority
- execution

Confidence does not create authority.

Learning does not create authority.

Prediction does not create authority.

Improvement does not create authority.

---

# Execution Is Not Governance

Execution may occur only within approved scope.

The existence of an execution capability does not grant that capability
permission to decide whether execution should occur.

Governance and execution remain separate responsibilities.

---

# Historical Architecture

Earlier architecture remains part of the historical record.

Where earlier documents assign intelligence ownership to VOID or describe
HOLY ARC as a general platform operating system, those assignments are
superseded by this ADR.

Historical documents SHOULD NOT be silently deleted merely because their
architecture has been superseded.

Current canonical documents SHALL reference the responsibility model
defined here.

---

# Consequences

This decision establishes:

- VOID as Reality Integrity
- ARC as Adaptive Intelligence and persistent ecosystem memory
- HOLY ARC as Constitutional Governance
- operational capability as controlled execution
- 6AME 9ESIGN as systems studio and product layer

Future architecture, contracts, specifications, implementation, and public
documentation SHALL preserve these boundaries.

---

# Governing Principle

No component gains authority merely because it can:

- reason
- predict
- recommend
- learn
- adapt
- improve
- coordinate
- execute

Capability and authority are separate properties.

---

# Final Architecture

Reality → VOID → ARC → HOLY ARC → Approved Capability → 6AME 9ESIGN → Reality

Observed reality then returns evidence into the system.

This creates the governed learning loop:

Reality
→ Evidence
→ Integrity
→ Understanding
→ Governance
→ Action
→ Outcome
→ Reality

The loop may improve indefinitely.

Its authority boundaries may not silently disappear.
