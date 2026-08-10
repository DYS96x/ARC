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
      "learns only from a recorded observed reality outcome",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome({
            decision:
              "ACTION-A",
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
          result.outcome.success
        )
          .toBe(true);

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
      "reduces confidence from a recorded contradictory reality outcome",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome({
            decision:
              "ACTION-A",
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
          result.outcome.success
        )
          .toBe(false);

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
  }
);
