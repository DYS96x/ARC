import { ARCFullIntelligenceSimulation } from "./ARCFullIntelligenceSimulation";

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
      "learns only after an explicit reality outcome is recorded",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome(
            "ACTION-A",
            true
          );

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
      }
    );

    it(
      "reduces confidence when explicit reality contradicts the decision",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.recordOutcome(
            "ACTION-A",
            false
          );

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