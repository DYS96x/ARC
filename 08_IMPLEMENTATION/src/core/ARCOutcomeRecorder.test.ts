import {
  ARCOutcomeRecorder
} from "./ARCOutcomeRecorder";

describe(
  "ARC Outcome Recorder",
  () => {

    it(
      "records observed reality evidence without inventing a verdict",
      () => {

        const recorder =
          new ARCOutcomeRecorder();

        const outcome =
          recorder.record({
            decision:
              "DECISION-001",
            action:
              "APPLY CHANGE",
            expectedOutcome:
              "Reality confirmed expected behaviour",
            actualOutcome:
              "Reality confirmed expected behaviour",
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
          outcome.expectedOutcome
        )
          .toBe(
            "Reality confirmed expected behaviour"
          );

        expect(
          outcome.actualOutcome
        )
          .toBe(
            "Reality confirmed expected behaviour"
          );

        expect(
          recorder.getOutcomes().length
        )
          .toBe(1);
      }
    );

    it(
      "preserves contradictory observed reality without interpreting it",
      () => {

        const recorder =
          new ARCOutcomeRecorder();

        const outcome =
          recorder.record({
            decision:
              "DECISION-002",
            action:
              "APPLY CHANGE",
            expectedOutcome:
              "Positive result",
            actualOutcome:
              "Reality contradicted expectation",
            observedAt:
              new Date()
          });

        expect(
          outcome.actualOutcome
        )
          .toBe(
            "Reality contradicted expectation"
          );

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
