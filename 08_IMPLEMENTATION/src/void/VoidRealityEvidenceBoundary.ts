export interface VoidEvidenceProvenanceInput {
  source: string;
  observedAt: Date;
}

export interface VoidEvidenceProvenance
  extends VoidEvidenceProvenanceInput {
  receivedAt: Date;
  protectedAt: Date;
}

export interface VoidRealityEvidence {
  decision: string;
  action: string;
  expectedOutcome: string;
  actualOutcome: string;
  provenance: VoidEvidenceProvenanceInput;
}

export interface ProtectedRealityEvidence
  extends Omit<VoidRealityEvidence, "provenance"> {
  provenance: VoidEvidenceProvenance;
}

/**
 * VOID reality-integrity boundary.
 *
 * VOID preserves evidence and its provenance
 * before ARC interpretation.
 *
 * VOID does not:
 * - decide whether evidence is true
 * - decide whether an outcome succeeded
 * - validate ARC reasoning
 * - adjust ARC confidence
 * - recommend action
 * - grant authority
 *
 * Evidence content remains unchanged.
 * Provenance records where and when evidence
 * entered the protected reality boundary.
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidRealityEvidenceBoundary {

  protect(
    evidence: VoidRealityEvidence
  ): ProtectedRealityEvidence {

    const receivedAt =
      new Date();

    const protectedAt =
      new Date();

    return {
      decision:
        evidence.decision,
      action:
        evidence.action,
      expectedOutcome:
        evidence.expectedOutcome,
      actualOutcome:
        evidence.actualOutcome,
      provenance: {
        source:
          evidence.provenance.source,
        observedAt:
          evidence.provenance.observedAt,
        receivedAt,
        protectedAt
      }
    };
  }
}
