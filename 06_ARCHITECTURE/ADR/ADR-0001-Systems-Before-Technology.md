# ADR-0001 — Systems Before Technology

## Status

Accepted

---

## Context

Many software projects begin with technology choices before understanding the underlying system.

This creates solutions that optimise implementation before understanding reality.

Common outcomes include:

- Unnecessary complexity
- Poor alignment between systems and users
- Hidden dependencies
- Expensive redesign
- Technology choices based on assumptions rather than evidence

ARC recognises that systems are living networks of relationships.

Before technology is selected, ARC must understand:

- System purpose
- User needs
- Environmental constraints
- Known relationships
- Unknown relationship gaps
- Feedback mechanisms

Reality is the final authority.

---

## Decision

ARC will design systems before selecting technology.

Technology is an implementation capability, not the foundation of understanding.

The relationship order is:

Reality

↕

Observation

↕

Relationships

↕

System Understanding

↕

Architecture

↕

Technology

Technology must support validated system relationships.

---

## Known Relationships

The following relationships are understood:

System Purpose ↔ Architecture

Architecture ↔ Technology

Technology ↔ Implementation

Implementation ↔ Reality Feedback

These relationships are validated through testing and observation.

---

## Unknown Relationship Gaps

ARC recognises that not all relationships are immediately visible.

Examples:

System Behaviour → ?

User Experience → ?

Technology Impact → ?

These gaps are discovery targets.

Unknown relationships must be investigated before major decisions are locked.

---

## Alternatives Considered

### Technology-first development

Rejected.

Reason:

Technology choices may create solutions before the actual system problem is understood.

---

### Feature-first development

Rejected.

Reason:

Features without system relationships create isolated capabilities.

---

### Tool-driven architecture

Rejected.

Reason:

Tools should serve architecture, not define it.

---

## Consequences

### Positive

- Stronger long-term architecture
- Reduced technical debt
- Better technology alignment
- Clearer system relationships
- Improved adaptability
- Greater discovery capability

### Negative

- Longer discovery phase
- Increased upfront analysis
- Requires continuous learning
- May reveal unknown complexity earlier

---

## Reality Feedback

This decision is validated through:

- User outcomes
- System performance
- Implementation feedback
- New relationship discoveries
- Reduction of unnecessary complexity

If reality contradicts assumptions, architecture must adapt.

---

## Evolution Path

This ADR evolves as ARC discovers new relationships between:

- People
- Systems
- Technology
- Knowledge
- Reality

Future evidence may improve or change this decision.

---

## Related Documents

ARC Principles

ARC Methodology

Studio Operating System

Engineering Standards

---

## Review Date

2030-01-01