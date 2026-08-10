import {
  ARCIntelligenceExecutiveEngine
} from "./ARCIntelligenceExecutiveEngine";

describe(
  "ARC Intelligence Executive Engine",
  () => {

    it(
      "does not execute a higher priority rejected objective",
      () => {

        const engine =
          new ARCIntelligenceExecutiveEngine();

        engine.addObjective(
          "UNAUTHORISED HIGH PRIORITY ACTION",
          1.0,
          "REJECTED"
        );

        engine.addObjective(
          "APPROVED LOWER PRIORITY ACTION",
          0.75,
          "APPROVED"
        );

        const action =
          engine.executeNextObjective();

        expect(action?.objective)
          .toBe(
            "APPROVED LOWER PRIORITY ACTION"
          );

        expect(action?.governanceStatus)
          .toBe("APPROVED");

        expect(action?.status)
          .toBe("EXECUTED");

        const rejected =
          engine.getObjectives().find(
            item =>
              item.objective ===
              "UNAUTHORISED HIGH PRIORITY ACTION"
          );

        expect(rejected?.status)
          .toBe("PENDING");
      }
    );

    it(
      "does not execute an objective awaiting approval",
      () => {

        const engine =
          new ARCIntelligenceExecutiveEngine();

        engine.addObjective(
          "AWAITING GOVERNED APPROVAL",
          1.0,
          "ESCALATE"
        );

        const action =
          engine.executeNextObjective();

        expect(action)
          .toBeUndefined();

        expect(
          engine.getObjectives()[0].status
        )
          .toBe("PENDING");
      }
    );

    it(
      "selects highest priority only among approved objectives",
      () => {

        const engine =
          new ARCIntelligenceExecutiveEngine();

        engine.addObjective(
          "APPROVED LOW PRIORITY",
          0.60,
          "APPROVED"
        );

        engine.addObjective(
          "APPROVED HIGH PRIORITY",
          0.90,
          "APPROVED"
        );

        engine.addObjective(
          "REJECTED HIGHEST PRIORITY",
          1.0,
          "REJECTED"
        );

        const action =
          engine.executeNextObjective();

        expect(action?.objective)
          .toBe(
            "APPROVED HIGH PRIORITY"
          );

        expect(action?.priority)
          .toBe(0.90);

        expect(action?.governanceStatus)
          .toBe("APPROVED");

        expect(action?.status)
          .toBe("EXECUTED");
      }
    );

  }
);
