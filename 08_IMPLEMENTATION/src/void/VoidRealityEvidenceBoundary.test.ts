import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

describe(
  "VOID Reality Evidence Boundary",
  () => {

    it(
      "preserves observed reality without interpreting it",
      () => {

        const boundary =
          new VoidRealityEvidenceBoundary();

        const observedAt =
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
            observedAt,
            source:
              "REALITY-OBSERVATION"
          });

        expect(evidence.decision)
          .toBe("DECISION-001");

        expect(evidence.actualOutcome)
          .toBe(
            "Reality contradicted expectation"
          );

        expect(evidence.source)
          .toBe(
            "REALITY-OBSERVATION"
          );

        expect(evidence.observedAt)
          .toBe(observedAt);

        expect(
          "success" in evidence
        ).toBe(false);

        expect(
          "confidenceAdjustment" in evidence
        ).toBe(false);

        expect(
          "status" in evidence
        ).toBe(false);
      }
    );

    it(
      "does not remove uncertainty from incomplete evidence",
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
            observedAt:
              new Date(),
            source:
              "REALITY-OBSERVATION"
          });

        expect(evidence.actualOutcome)
          .toBe("");

        expect(
          "success" in evidence
        ).toBe(false);

        expect(
          "status" in evidence
        ).toBe(false);
      }
    );

  }
);
