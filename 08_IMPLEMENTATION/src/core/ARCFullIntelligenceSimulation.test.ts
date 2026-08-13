import {
  ARCFullIntelligenceSimulation
} from "./ARCFullIntelligenceSimulation";

describe(
  "ARC Full Intelligence Simulation",
  () => {

    it(
      "stops at recommendation without inventing an execution outcome",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.run(
            "REALITY-SIGNAL-001",
            {
              confidence: 0.9,
              hasAuthority: true,
              hasPermission: true,
              requiresApproval: true,
              approvalGranted: true
            }
          );

        expect(
          result.experience.reality
        )
          .toBe(
            "REALITY-SIGNAL-001"
          );

        expect(
          result.experience.governance.status
        )
          .toBe(
            "APPROVED"
          );

        expect(
          result.experience.action.status
        )
          .toBe(
            "READY"
          );

        expect(
          result.recommendation.option
        )
          .toBe(
            "ACTION-A"
          );

        expect(
          "validation" in result
        )
          .toBe(false);

        expect(
          "confidence" in result
        )
          .toBe(false);
      }
    );

    it(
      "learns only after observed reality validates the expected outcome",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome({
            decision:
              "ACTION-A",
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
          result.outcome.actualOutcome
        )
          .toBe(
            "Reality confirmed expected behaviour"
          );

        expect(
          result.validation.status
        )
          .toBe("VALIDATED");

        expect(
          result.validation.success
        )
          .toBe(true);

        expect(
          result.confidence.confidence
        )
          .toBe(0.6);

        expect(
          result.confidence.attempts
        )
          .toBe(1);

        expect(
          arc.getRecordedOutcomes().length
        )
          .toBe(1);
      }
    );

    it(
      "reduces confidence only after observed reality invalidates the expectation",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome({
            decision:
              "ACTION-A",
            action:
              "APPLY CHANGE",
            expectedOutcome:
              "Reality confirmed expected behaviour",
            actualOutcome:
              "Reality contradicted expectation",
            observedAt:
              new Date()
          });

        expect(
          result.outcome.actualOutcome
        )
          .toBe(
            "Reality contradicted expectation"
          );

        expect(
          result.validation.status
        )
          .toBe("INVALIDATED");

        expect(
          result.validation.success
        )
          .toBe(false);

        expect(
          result.confidence.confidence
        )
          .toBe(0.4);
      }
    );

    it(
      "does not change confidence when observed reality is inconclusive",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome({
            decision:
              "ACTION-A",
            action:
              "APPLY CHANGE",
            expectedOutcome:
              "Reality confirmed expected behaviour",
            actualOutcome:
              "",
            observedAt:
              new Date()
          });

        expect(
          result.validation.status
        )
          .toBe("INCONCLUSIVE");

        expect(
          result.validation.success
        )
          .toBeUndefined();

        expect(
          result.confidence.confidence
        )
          .toBe(0.5);
      }
    );

  }
);
