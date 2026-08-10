import {
  ARCIntelligenceExecutionMonitor
} from "./ARCIntelligenceExecutionMonitor";

describe(
  "ARC Intelligence Execution Monitor",
  () => {

    it(
      "records observed execution outcomes without performing execution",
      () => {

        const monitor =
          new ARCIntelligenceExecutionMonitor();

        const result =
          monitor.recordExecutionOutcome(
            "WORLD-CHANGE-ROUTE",
            [
              "WORLD",
              "DECISION",
              "FEEDBACK"
            ],
            "SUCCESS",
            0.92
          );

        expect(result.route)
          .toBe(
            "WORLD-CHANGE-ROUTE"
          );

        expect(result.outcome)
          .toBe(
            "SUCCESS"
          );

        expect(result.score)
          .toBe(
            0.92
          );

        expect(
          monitor.getRecords().length
        )
          .toBe(1);
      }
    );

  }
);
