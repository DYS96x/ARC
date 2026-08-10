import {
  ARCOutcomeRecorder
} from "./ARCOutcomeRecorder";

describe(
  "ARC Outcome Recorder",
  () => {

    it(
      "records an explicit observed outcome without inventing success",
      () => {

        const recorder =
          new ARCOutcomeRecorder();

        const outcome =
          recorder.record({
            decision:
              "DECISION-001",
            action:
              "APPLY CHANGE",
            result:
              "Reality confirmed expected behaviour",
            success:
              true,
            observedAt:
              new Date()
          });

        expect(
          outcome.decision
        )
        .toBe(
          "DECISION-001"
        );

        expect(
          outcome.success
        )
        .toBe(true);

        expect(
          recorder.getOutcomes().length
        )
        .toBe(1);
      }
    );

    it(
      "preserves an observed failure as reality evidence",
      () => {

        const recorder =
          new ARCOutcomeRecorder();

        const outcome =
          recorder.record({
            decision:
              "DECISION-002",
            action:
              "APPLY CHANGE",
            result:
              "Reality contradicted expectation",
            success:
              false,
            observedAt:
              new Date()
          });

        expect(
          outcome.success
        )
        .toBe(false);

        expect(
          recorder.findByDecision(
            "DECISION-002"
          ).length
        )
        .toBe(1);
      }
    );

  }
);
