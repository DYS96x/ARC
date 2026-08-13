export interface VoidComparableEvidence {
  evidenceId: string;
  subject: string;
  property: string;
  scope: string;
  value: string;
  observedAt: Date;
  source: string;
}

export type VoidEvidenceConflictStatus =
  | "NO_CONFLICT"
  | "CONFLICT_PRESENT"
  | "NOT_COMPARABLE";

export interface VoidEvidenceConflict {
  status: VoidEvidenceConflictStatus;
  evidenceA: VoidComparableEvidence;
  evidenceB: VoidComparableEvidence;
}

/**
 * VOID evidence contradiction boundary.
 *
 * VOID may identify structural disagreement between
 * explicitly comparable evidence records.
 *
 * VOID does not:
 * - determine which evidence is true
 * - determine which source is more reliable
 * - explain why the conflict exists
 * - change confidence
 * - recommend an interpretation
 * - discard either evidence record
 * - grant authority
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidEvidenceContradictionBoundary {

  compare(
    evidenceA: VoidComparableEvidence,
    evidenceB: VoidComparableEvidence
  ): VoidEvidenceConflict {

    const comparable =
      evidenceA.subject === evidenceB.subject &&
      evidenceA.property === evidenceB.property &&
      evidenceA.scope === evidenceB.scope &&
      evidenceA.observedAt.getTime() ===
        evidenceB.observedAt.getTime();

    if (!comparable) {
      return {
        status: "NOT_COMPARABLE",
        evidenceA,
        evidenceB
      };
    }

    if (evidenceA.value !== evidenceB.value) {
      return {
        status: "CONFLICT_PRESENT",
        evidenceA,
        evidenceB
      };
    }

    return {
      status: "NO_CONFLICT",
      evidenceA,
      evidenceB
    };
  }
}
