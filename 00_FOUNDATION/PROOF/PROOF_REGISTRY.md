# ARC Proof Registry

## Purpose

ARC does not treat architectural intent as proof.

A capability becomes proven only when observable evidence demonstrates that the implementation behaves according to its defined boundary.

This registry records what the ARC ecosystem has actually demonstrated.

---

# Proof Principle

> Claims describe intent.
>
> Tests challenge implementation.
>
> Evidence records what occurred.
>
> Proof establishes what has actually been demonstrated.

A passing test proves only the behaviour exercised by that test.

It does not prove behaviour that was not tested.

---

# Proof States

## PROVEN

Executable evidence demonstrates the defined claim.

## PARTIALLY PROVEN

Some required behaviour has executable evidence, but the complete claim has not been demonstrated.

## UNPROVEN

The capability may exist in architecture or implementation, but sufficient executable evidence has not been established.

## INVALIDATED

Observed evidence demonstrates that a previous proof claim no longer holds.

---

# Proof Registry

## PROOF-001 — Ecosystem Authority Separation

**State:** PROVEN

VOID protects evidence.

ARC understands evidence.

HOLY ARC governs what may happen next.

Operational capabilities perform approved action.

Evidence:

- `b7dc97f` — separate ARC, VOID, and HOLY ARC authority
- `b892ec0` — align ecosystem ownership and authority
- `cb83280` — separate HOLY ARC authority from ARC intelligence

---

## PROOF-002 — Reality Evidence Protection

**State:** PROVEN

Observed reality evidence crosses the VOID protection boundary before ARC interpretation.

Evidence:

- `9064670` — protect reality evidence before ARC interpretation

---

## PROOF-003 — Evidence Provenance

**State:** PROVEN

Protected evidence preserves explicit provenance describing where and when evidence entered the protected reality boundary.

Evidence:

- `6ad851e` — preserve reality evidence provenance

---

## PROOF-004 — Structural Evidence Contradiction Detection

**State:** PROVEN

VOID can identify structural disagreement between explicitly comparable evidence without adjudicating which evidence is true.

Evidence:

- `60ec44e` — detect structural evidence contradictions

---

## PROOF-005 — Protected Evidence Integrity

**State:** PROVEN

VOID can detect whether protected evidence or its provenance changed after protection without interpreting the meaning of that change.

Evidence:

- `0bb32ee` — verify protected evidence integrity

---

# Current Demonstrated Boundary

Reality

↓

VOID protects evidence

↓

VOID preserves provenance

↓

VOID verifies structural integrity

↓

VOID identifies structural contradiction

↓

ARC interprets and learns

↓

HOLY ARC governs what may happen next

↓

Approved execution

↓

Reality

---

# Proof Boundary

This registry does not claim that ARC as a whole is proven.

Only specifically demonstrated capabilities may receive the PROVEN state.

Architecture alone is not proof.

Implementation alone is not proof.

A passing test does not prove behaviour outside the scope of that test.

---

# Proof Rule

Architecture

↓

Boundary

↓

Implementation

↓

Test

↓

Observed Evidence

↓

Proof

If reality contradicts an existing proof claim, its proof state must change.

Reality remains the final validator.

---

## PROOF-006 — Protected Evidence Identity

### Claim

Protected reality evidence receives an evidence identity at the VOID reality boundary.

That identity is inherited by downstream VOID comparison structures rather than supplied independently by comparison context.

Evidence identity is included in protected-evidence integrity verification, so mutation of the identity changes the integrity fingerprint.

### Demonstrated Behaviour

Current executable tests demonstrate that:

- protected reality evidence receives an `evidenceId`
- VOID is the production owner of evidence identity creation
- comparison structures inherit the protected evidence identity
- comparison context does not independently own evidence identity
- evidence identity participates in the integrity fingerprint
- changing evidence identity is detected as an integrity change
- identity does not determine truth
- identity does not determine source reliability
- identity does not grant authority
- identity does not create interpretation

### Implementation Evidence

- `08_IMPLEMENTATION/src/void/VoidRealityEvidenceBoundary.ts`
- `08_IMPLEMENTATION/src/void/VoidEvidenceComparisonAdapter.ts`
- `08_IMPLEMENTATION/src/void/VoidEvidenceIntegrityBoundary.ts`

### Executable Evidence

- `08_IMPLEMENTATION/src/void/VoidRealityEvidenceBoundary.test.ts`
- `08_IMPLEMENTATION/src/void/VoidEvidenceComparisonAdapter.test.ts`
- `08_IMPLEMENTATION/src/void/VoidEvidenceIntegrityBoundary.test.ts`
- `08_IMPLEMENTATION/src/void/VoidEvidenceIntegrityPipeline.test.ts`

### Reproduction

From `08_IMPLEMENTATION`:

`npm test -- src/void/VoidRealityEvidenceBoundary.test.ts src/void/VoidEvidenceIntegrityBoundary.test.ts src/void/VoidEvidenceComparisonAdapter.test.ts src/void/VoidEvidenceContradictionBoundary.test.ts src/void/VoidEvidenceIntegrityPipeline.test.ts --runInBand`

Then:

`npx tsc --noEmit`

### Boundary

This proof demonstrates evidence identity ownership and integrity behaviour exercised by the listed tests.

It does not prove that an evidence record is true.

It does not prove that a source is reliable.

It does not prove semantic equivalence between evidence records.

It does not grant execution authority.

Interpretation remains ARC responsibility.

Authority remains HOLY ARC responsibility.

Reality remains the final validator.
