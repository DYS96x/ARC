export type RealityValidationStatus =
  | "VALIDATED"
  | "INVALIDATED"
  | "INCONCLUSIVE";

export interface RealityObservation {
  decision: string;
  expectedOutcome: string;
  actualOutcome: string;
}

export interface ValidationResult {
  decision: string;
  status: RealityValidationStatus;
  success?: boolean;
  confidenceAdjustment: number;
}

export class RealityValidationEngine {

  validate(
    observation: RealityObservation
  ): ValidationResult {

    const expected =
      observation.expectedOutcome
        .trim()
        .toLowerCase();

    const actual =
      observation.actualOutcome
        .trim()
        .toLowerCase();

    if (
      expected.length === 0 ||
      actual.length === 0
    ) {
      return {
        decision:
          observation.decision,
        status:
          "INCONCLUSIVE",
        confidenceAdjustment:
          0
      };
    }

    if (actual === expected) {
      return {
        decision:
          observation.decision,
        status:
          "VALIDATED",
        success:
          true,
        confidenceAdjustment:
          0.1
      };
    }

    return {
      decision:
        observation.decision,
      status:
        "INVALIDATED",
      success:
        false,
      confidenceAdjustment:
        -0.1
    };
  }
}