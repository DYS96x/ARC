import {
  ARCIntelligencePlanningEngine
} from "./ARCIntelligencePlanningEngine";

describe(
  "ARC Intelligence Planning Engine",
  () => {

    it(
      "ranks objective candidates without granting authority",
      () => {

        const engine =
          new ARCIntelligencePlanningEngine();

        engine.addCandidate(
          "IMPROVE MEMORY SYSTEM",
          0.75
        );

        engine.addCandidate(
          "IMPROVE DECISION SYSTEM",
          0.95
        );

        const candidate =
          engine.selectTopCandidate();

        expect(
          candidate?.objective
        )
          .toBe(
            "IMPROVE DECISION SYSTEM"
          );

        expect(
          candidate?.priority
        )
          .toBe(
            0.95
          );

        expect(
          engine.getCandidates().length
        )
          .toBe(2);
      }
    );

  }
);
