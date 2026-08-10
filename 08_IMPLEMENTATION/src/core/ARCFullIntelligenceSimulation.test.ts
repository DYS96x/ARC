import { ARCFullIntelligenceSimulation } from "./ARCFullIntelligenceSimulation";

describe(
  "ARC Full Intelligence Simulation",
  () => {

    it(
      "completes a full intelligence loop through explicit governance",
      () => {

        const arc =
          new ARCFullIntelligenceSimulation();

        const result =
          arc.run(
            "REALITY-SIGNAL-001",
            {
              confidence:
                0.9,
              hasAuthority:
                true,
              hasPermission:
                true,
              requiresApproval:
                true,
              approvalGranted:
                true
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
          result.validation.success
        )
        .toBe(true);

        expect(
          result.confidence.confidence
        )
        .toBe(0.6);
      }
    );
  }
);
