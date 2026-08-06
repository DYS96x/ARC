import { ARCIntelligenceSelfEvaluationEngine } from "./ARCIntelligenceSelfEvaluationEngine";


describe(
  "ARC Intelligence Self Evaluation Engine",
  () => {


    it(
      "evaluates capability performance and identifies weaknesses",
      () => {


        const engine =
          new ARCIntelligenceSelfEvaluationEngine();



        const evaluation =
          engine.evaluateCapability(

            "MEMORY SYSTEM",

            0.65

          );



        expect(
          evaluation.capability
        )
        .toBe(
          "MEMORY SYSTEM"
        );


        expect(
          evaluation.score
        )
        .toBe(
          0.65
        );


        expect(
          evaluation.status
        )
        .toBe(
          "NEEDS IMPROVEMENT"
        );


        expect(
          engine.getEvaluations().length
        )
        .toBe(
          1
        );


      }

    );


  }

);