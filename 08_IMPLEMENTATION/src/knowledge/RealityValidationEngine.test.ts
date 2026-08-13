import {
  RealityValidationEngine
} from "./RealityValidationEngine";

describe(
  "Reality Validation Engine",
  () => {

    it(
      "validates matching observed reality",
      () => {

        const engine =
          new RealityValidationEngine();

        const result =
          engine.validate({
            decision:
              "ACTION-A",
            expectedOutcome:
              "Reality confirmed",
            actualOutcome:
              "Reality confirmed"
          });

        expect(result.decision)
          .toBe("ACTION-A");

        expect(result.status)
          .toBe("VALIDATED");

        expect(result.success)
          .toBe(true);

        expect(
          result.confidenceAdjustment
        )
          .toBe(0.1);
      }
    );

    it(
      "invalidates contradictory observed reality",
      () => {

        const engine =
          new RealityValidationEngine();

        const result =
          engine.validate({
            decision:
              "ACTION-B",
            expectedOutcome:
              "Positive result",
            actualOutcome:
              "Reality contradicted expectation"
          });

        expect(result.status)
          .toBe("INVALIDATED");

        expect(result.success)
          .toBe(false);

        expect(
          result.confidenceAdjustment
        )
          .toBe(-0.1);
      }
    );

    it(
      "does not invent a verdict without sufficient reality evidence",
      () => {

        const engine =
          new RealityValidationEngine();

        const result =
          engine.validate({
            decision:
              "ACTION-C",
            expectedOutcome:
              "Positive result",
            actualOutcome:
              ""
          });

        expect(result.status)
          .toBe("INCONCLUSIVE");

        expect(result.success)
          .toBeUndefined();

        expect(
          result.confidenceAdjustment
        )
          .toBe(0);
      }
    );

  }
);