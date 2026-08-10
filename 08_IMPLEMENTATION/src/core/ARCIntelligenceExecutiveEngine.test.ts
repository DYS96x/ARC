import {
  ARCIntelligenceExecutiveEngine
} from "./ARCIntelligenceExecutiveEngine";

describe(
  "ARC Intelligence Executive Engine",
  () => {

    it(
      "selects an approved objective without claiming execution authority",
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

        const selected =
          engine.selectNextObjective();

        expect(selected?.objective)
          .toBe(
            "APPROVED LOWER PRIORITY ACTION"
          );

        expect(selected?.governanceStatus)
          .toBe("APPROVED");

        expect(selected?.status)
          .toBe("SELECTED");

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
      "does not select an objective awaiting approval",
      () => {

        const engine =
          new ARCIntelligenceExecutiveEngine();

        engine.addObjective(
          "AWAITING GOVERNED APPROVAL",
          1.0,
          "ESCALATE"
        );

        const selected =
          engine.selectNextObjective();

        expect(selected)
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

        const selected =
          engine.selectNextObjective();

        expect(selected?.objective)
          .toBe(
            "APPROVED HIGH PRIORITY"
          );

        expect(selected?.priority)
          .toBe(0.90);

        expect(selected?.governanceStatus)
          .toBe("APPROVED");

        expect(selected?.status)
          .toBe("SELECTED");
      }
    );

  }
);
