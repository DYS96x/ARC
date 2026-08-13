import {
  ProtectedRealityEvidence
} from "./VoidRealityEvidenceBoundary";

import {
  VoidComparableEvidence
} from "./VoidEvidenceContradictionBoundary";

export interface VoidEvidenceComparisonContext {
  evidenceId: string;
  subject: string;
  property: string;
  scope: string;
  value: string;
}

/**
 * VOID evidence comparison adapter.
 *
 * Converts protected reality evidence into an explicitly
 * comparable structural representation.
 *
 * Comparison meaning must be supplied by the caller.
 *
 * VOID does not infer:
 * - subject
 * - property
 * - scope
 * - comparable value
 * - truth
 * - source reliability
 * - interpretation
 *
 * Provenance remains inherited from protected evidence.
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidEvidenceComparisonAdapter {

  adapt(
    evidence: ProtectedRealityEvidence,
    context: VoidEvidenceComparisonContext
  ): VoidComparableEvidence {

    return {
      evidenceId:
        context.evidenceId,
      subject:
        context.subject,
      property:
        context.property,
      scope:
        context.scope,
      value:
        context.value,
      observedAt:
        evidence.provenance.observedAt,
      source:
        evidence.provenance.source
    };
  }
}
