import {
  ProtectedRealityEvidence
} from "./VoidRealityEvidenceBoundary";


export interface VoidIntegrityProtectedEvidence {
  evidence: ProtectedRealityEvidence;
  fingerprint: string;
}

export type VoidIntegrityVerificationStatus =
  | "UNCHANGED"
  | "CHANGED";

export interface VoidIntegrityVerification {
  status: VoidIntegrityVerificationStatus;
  expectedFingerprint: string;
  actualFingerprint: string;
}


/**
 * VOID evidence-integrity boundary.
 *
 * VOID may:
 * - create a deterministic fingerprint of protected evidence
 * - later verify whether that protected representation changed
 *
 * VOID does not:
 * - determine whether evidence is true
 * - determine whether a source is trustworthy
 * - authenticate the real-world origin of evidence
 * - explain why evidence changed
 * - repair changed evidence
 * - discard evidence
 * - adjust confidence
 * - recommend action
 * - grant authority
 *
 * Integrity answers:
 *
 * "Is this the same protected evidence representation?"
 *
 * It does not answer:
 *
 * "Is this evidence true?"
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidEvidenceIntegrityBoundary {

  async protect(
    evidence: ProtectedRealityEvidence
  ): Promise<VoidIntegrityProtectedEvidence> {

    return {
      evidence,
      fingerprint:
        await this.fingerprint(evidence)
    };
  }


  async verify(
    protectedEvidence: VoidIntegrityProtectedEvidence
  ): Promise<VoidIntegrityVerification> {

    const actualFingerprint =
      await this.fingerprint(
        protectedEvidence.evidence
      );

    const status:
      VoidIntegrityVerificationStatus =
        actualFingerprint ===
        protectedEvidence.fingerprint
          ? "UNCHANGED"
          : "CHANGED";

    return {
      status,
      expectedFingerprint:
        protectedEvidence.fingerprint,
      actualFingerprint
    };
  }


  private async fingerprint(
    evidence: ProtectedRealityEvidence
  ): Promise<string> {

    const canonical =
      JSON.stringify({
        evidenceId:
          evidence.evidenceId,
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
            evidence.provenance.observedAt
              .toISOString(),
          receivedAt:
            evidence.provenance.receivedAt
              .toISOString(),
          protectedAt:
            evidence.provenance.protectedAt
              .toISOString()
        }
      });

    const encoded =
      new TextEncoder()
        .encode(canonical);

    const digest =
      await crypto.subtle.digest(
        "SHA-256",
        encoded
      );

    return Array.from(
      new Uint8Array(digest)
    )
      .map(
        byte =>
          byte
            .toString(16)
            .padStart(2, "0")
      )
      .join("");
  }
}
