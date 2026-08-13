# STD_004 — State

Version: 1.0.0  
Status: Draft  
Authority: HOLY ARC Laws  
Classification: Internal

---

# Standard

> Every ARC system shall define, manage and protect its state while maintaining separation between present condition, persistent memory, history and knowledge.

State describes what is happening.

State does not define what has happened.

---

# Purpose

Define how ARC systems represent, update, recover and govern state.

This standard ensures:

- Current context remains clear.
- Ownership remains explicit.
- History remains protected.
- Recovery is possible.
- Systems remain adaptable.

---

# Relationship To Laws

This standard derives from:

## LAW 001 — Responsibility

Every state has one accountable owner.

## LAW 002 — Evidence

Important state transitions may require evidence.

## LAW 003 — Relationships

State flows through governed relationships.

## LAW 004 — Truth

Current state does not automatically represent truth.

## LAW 005 — State

State must remain separate from memory and history.

## LAW 006 — Security

State must be protected according to authority.

## LAW 007 — Change

State evolution must be controlled and traceable.

---

# State Definition

State is the current condition of a system at a specific point in time.

Examples:

- Current workflow stage
- Active task
- Runtime status
- Current user context
- Pending decision
- System health
- Temporary configuration

---

# State Categories

ARC recognises different forms of state:

---

## Operational State

The current condition required for a system to operate.

Examples:

- Running
- Paused
- Failed
- Processing

---

## Workflow State

The current position of work.

Examples:

- Investigation
- Review
- Approval
- Delivery

---

## Context State

The information required to continue meaningful interaction.

Examples:

- Current objective
- Previous decision
- Active focus
- Open questions

---

## Runtime State

Temporary information required during execution.

Examples:

- Memory allocation
- Active processes
- Temporary calculations

---

# State Separation

State must remain separate from:

## Memory

Memory preserves information from previous events.

## History

History preserves what actually occurred.

## Knowledge

Knowledge represents learned understanding.

## Evidence

Evidence supports assessment and decisions.

---

# State Ownership

Every state object requires:

- Owner
- Purpose
- Lifecycle
- Access rules
- Recovery method

Ownership must remain singular.

---

# State Lifecycle

State shall follow:

```text
Created

↓

Active

↓

Updated

↓

Validated

↓

Completed

↓

Archived

↓

Disposed
```

Lifecycle may vary by system but must be defined.

---

# State Transitions

Every important transition should define:

- Previous state
- New state
- Trigger
- Responsible actor
- Evidence created
- Validation method

Invalid transitions must be detectable.

---

# State Recovery

Critical state requires recovery planning.

Recovery may include:

- Restoration
- Reconstruction
- Rollback
- Manual intervention

Recovery must preserve:

- History
- Ownership
- Evidence
- Security

---

# Synchronisation

When multiple systems require shared context:

Systems must define:

- Authoritative source
- Synchronisation method
- Conflict resolution
- Update timing
- Failure handling

Shared visibility does not create shared ownership.

---

# State Security

State access requires:

- Identity
- Authority
- Permission

Sensitive state must be protected.

---

# State Quality Tests

A state model passes when:

- Ownership is defined.
- Purpose is clear.
- Lifecycle exists.
- Transitions are understood.
- Recovery exists.
- History remains separate.
- Security boundaries are maintained.

---

# Violations

The following violate this standard:

- Treating state as permanent memory.
- Rewriting history through state changes.
- Multiple owners of the same state.
- Hidden state.
- Uncontrolled transitions.
- Missing recovery.
- Unauthorised access.

---

# Constitutional Mapping

STD_004 applies to:

- WOS workflow state
- ARC OS execution state
- Sprint OS sprint state
- CAF assessment state
- ARC reasoning context
- Future ARC platforms

---

# Final Principle

> State tells us where we are. Memory tells us where we have been. Knowledge tells us what we learned.