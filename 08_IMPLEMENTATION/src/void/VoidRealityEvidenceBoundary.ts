export interface VoidRealityEvidence {
  decision: string;
  action: string;
  expectedOutcome: string;
  actualOutcome: string;
  observedAt: Date;
  source: string;
}

export interface ProtectedRealityEvidence
  extends VoidRealityEvidence {
  protectedAt: Date;
}

/**
 * VOID reality-integrity boundary.
 *
 * VOID preserves evidence entering ARC.
 *
 * VOID does not:
 * - decide whether an outcome succeeded
 * - validate ARC reasoning
 * - adjust ARC confidence
 * - recommend action
 * - grant authority
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidRealityEvidenceBoundary {

  protect(
    evidence: VoidRealityEvidence
  ): ProtectedRealityEvidence {

    return {
      ...evidence,
      protectedAt: new Date()
    };
  }
}
