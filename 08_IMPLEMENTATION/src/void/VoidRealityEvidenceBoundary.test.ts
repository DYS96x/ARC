import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

describe(
  "VOID Reality Evidence Boundary",
  () => {

    it(
      "preserves evidence content and records explicit provenance",
      () => {

        const boundary =
          new VoidRealityEvidenceBoundary();

        const observedAt =
          new Date("2026-08-13T00:00:00.000Z");

        const beforeProtection =
          new Date();

        const evidence =
          boundary.protect({
            decision:
              "DECISION-001",
            action:
              "APPLY CHANGE",
            expectedOutcome:
              "Positive result",
            actualOutcome:
              "Reality contradicted expectation",
            provenance: {
              source:
                "REALITY-OBSERVATION",
              observedAt
            }
          });

        const afterProtection =
          new Date();

        expect(evidence.decision)
          .toBe("DECISION-001");

        expect(evidence.actualOutcome)
          .toBe(
            "Reality contradicted expectation"
          );

        expect(evidence.provenance.source)
          .toBe(
            "REALITY-OBSERVATION"
          );

        expect(evidence.provenance.observedAt)
          .toBe(observedAt);

        expect(
          evidence.provenance.receivedAt.getTime()
        ).toBeGreaterThanOrEqual(
          beforeProtection.getTime()
        );

        expect(
          evidence.provenance.protectedAt.getTime()
        ).toBeLessThanOrEqual(
          afterProtection.getTime()
        );

        expect(
          "success" in evidence
        ).toBe(false);

        expect(
          "confidenceAdjustment" in evidence
        ).toBe(false);

        expect(
          "status" in evidence
        ).toBe(false);

        expect(
          "integrityState" in evidence
        ).toBe(false);
      }
    );

    it(
      "preserves uncertainty without inventing an interpretation",
      () => {

        const boundary =
          new VoidRealityEvidenceBoundary();

        const evidence =
          boundary.protect({
            decision:
              "DECISION-002",
            action:
              "RUN EXPERIMENT",
            expectedOutcome:
              "Positive result",
            actualOutcome:
              "",
            provenance: {
              source:
                "REALITY-OBSERVATION",
              observedAt:
                new Date()
            }
          });

        expect(evidence.actualOutcome)
          .toBe("");

        expect(
          "success" in evidence
        ).toBe(false);

        expect(
          "status" in evidence
        ).toBe(false);

        expect(
          "confidenceAdjustment" in evidence
        ).toBe(false);

        expect(
          "integrityState" in evidence
        ).toBe(false);
      }
    );

    it(
      "keeps evidence content separate from provenance metadata",
      () => {

        const boundary =
          new VoidRealityEvidenceBoundary();

        const evidence =
          boundary.protect({
            decision:
              "DECISION-003",
            action:
              "OBSERVE RESULT",
            expectedOutcome:
              "Expected state",
            actualOutcome:
              "Observed state",
            provenance: {
              source:
                "SENSOR-001",
              observedAt:
                new Date()
            }
          });

        expect(
          "source" in evidence
        ).toBe(false);

        expect(
          "observedAt" in evidence
        ).toBe(false);

        expect(
          evidence.provenance.source
        ).toBe("SENSOR-001");
      }
    );

  }
);
