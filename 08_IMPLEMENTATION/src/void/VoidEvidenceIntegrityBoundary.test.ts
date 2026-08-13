import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

import {
  VoidEvidenceIntegrityBoundary
} from "./VoidEvidenceIntegrityBoundary";


describe(
  "VOID Evidence Integrity Boundary",
  () => {

    const buildEvidence =
      () => {

        const realityBoundary =
          new VoidRealityEvidenceBoundary();

        return realityBoundary.protect({
          decision:
            "DECISION-001",
          action:
            "OBSERVE REALITY",
          expectedOutcome:
            "Expected state",
          actualOutcome:
            "Observed state",
          provenance: {
            source:
              "SENSOR-A",
            observedAt:
              new Date(
                "2026-08-13T00:00:00.000Z"
              )
          }
        });
      };


    it(
      "creates a deterministic fingerprint for the same protected evidence",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const evidence =
          buildEvidence();

        const first =
          await boundary.protect(evidence);

        const second =
          await boundary.protect(evidence);

        expect(first.fingerprint)
          .toBe(second.fingerprint);

        expect(first.fingerprint)
          .toMatch(/^[a-f0-9]{64}$/);
      }
    );


    it(
      "verifies unchanged protected evidence",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const protectedEvidence =
          await boundary.protect(
            buildEvidence()
          );

        const verification =
          await boundary.verify(
            protectedEvidence
          );

        expect(verification.status)
          .toBe("UNCHANGED");

        expect(
          verification.actualFingerprint
        ).toBe(
          verification.expectedFingerprint
        );
      }
    );


    it(
      "detects changed evidence content without interpreting the change",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const protectedEvidence =
          await boundary.protect(
            buildEvidence()
          );

        protectedEvidence.evidence.actualOutcome =
          "ALTERED STATE";

        const verification =
          await boundary.verify(
            protectedEvidence
          );

        expect(verification.status)
          .toBe("CHANGED");

        expect(
          verification.actualFingerprint
        ).not.toBe(
          verification.expectedFingerprint
        );

        expect(
          "truth" in verification
        ).toBe(false);

        expect(
          "reason" in verification
        ).toBe(false);

        expect(
          "recommendation" in verification
        ).toBe(false);

        expect(
          "confidenceAdjustment" in verification
        ).toBe(false);
      }
    );


    it(
      "detects changed provenance",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const protectedEvidence =
          await boundary.protect(
            buildEvidence()
          );

        protectedEvidence.evidence
          .provenance.source =
            "SENSOR-B";

        const verification =
          await boundary.verify(
            protectedEvidence
          );

        expect(verification.status)
          .toBe("CHANGED");
      }
    );


    it(
      "does not convert integrity verification into truth adjudication",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const protectedEvidence =
          await boundary.protect(
            buildEvidence()
          );

        const verification =
          await boundary.verify(
            protectedEvidence
          );

        expect(
          "isTrue" in verification
        ).toBe(false);

        expect(
          "isCorrect" in verification
        ).toBe(false);

        expect(
          "trustedSource" in verification
        ).toBe(false);

        expect(
          "preferredSource" in verification
        ).toBe(false);

        expect(
          "authority" in verification
        ).toBe(false);

        expect(
          "approval" in verification
        ).toBe(false);
      }
    );


    it(
      "detects changed evidence identity",
      async () => {

        const boundary =
          new VoidEvidenceIntegrityBoundary();

        const evidence =
          buildEvidence();

        const protectedEvidence =
          await boundary.protect(
            evidence
          );

        const originalEvidenceId =
          evidence.evidenceId;

        evidence.evidenceId =
          crypto.randomUUID();

        expect(evidence.evidenceId)
          .not.toBe(originalEvidenceId);

        const verification =
          await boundary.verify(
            protectedEvidence
          );

        expect(verification.status)
          .toBe("CHANGED");

        expect(
          verification.actualFingerprint
        ).not.toBe(
          verification.expectedFingerprint
        );
      }
    );
  }
);
