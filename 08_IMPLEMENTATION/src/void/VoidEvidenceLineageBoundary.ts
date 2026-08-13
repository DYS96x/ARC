export type VoidEvidenceLineageRelation =
  | "DERIVED_FROM"
  | "OBSERVED_FROM";

export interface VoidEvidenceLineageRequest {
  evidenceId: string;
  relatedEvidenceId: string;
  relation: VoidEvidenceLineageRelation;
}

export interface VoidEvidenceLineage {
  evidenceId: string;
  relatedEvidenceId: string;
  relation: VoidEvidenceLineageRelation;
  recordedAt: Date;
}

/**
 * VOID evidence-lineage boundary.
 *
 * VOID may preserve an explicitly supplied structural
 * relationship between evidence identities.
 *
 * VOID does not:
 * - infer a relationship
 * - infer causality
 * - determine truth
 * - determine source reliability
 * - determine which evidence is preferred
 * - change confidence
 * - explain the relationship
 * - recommend an interpretation
 * - grant authority
 *
 * Lineage records structure only.
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidEvidenceLineageBoundary {

  record(
    request: VoidEvidenceLineageRequest
  ): VoidEvidenceLineage {

    if (
      request.evidenceId ===
      request.relatedEvidenceId
    ) {
      throw new Error(
        "EVIDENCE_LINEAGE_SELF_REFERENCE"
      );
    }

    return {
      evidenceId:
        request.evidenceId,
      relatedEvidenceId:
        request.relatedEvidenceId,
      relation:
        request.relation,
      recordedAt:
        new Date()
    };
  }
}
