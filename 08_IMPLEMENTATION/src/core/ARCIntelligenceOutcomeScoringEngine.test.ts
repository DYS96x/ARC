import { ARCIntelligenceOutcomeScoringEngine } from "./ARCIntelligenceOutcomeScoringEngine";


describe(
  "ARC Intelligence Outcome Scoring Engine",
  () => {


    it(
      "scores intelligence outcomes",
      () => {


        const engine =
          new ARCIntelligenceOutcomeScoringEngine();



        const result =
          engine.scoreOutcome(

            "WORLD-CHANGE-ROUTE",

            "POSITIVE-IMPACT",

            0.94

          );



        expect(
          result.execution
        )
        .toBe(
          "WORLD-CHANGE-ROUTE"
        );



        expect(
          result.outcome
        )
        .toBe(
          "POSITIVE-IMPACT"
        );



        expect(
          result.score
        )
        .toBe(
          0.94
        );



        expect(
          engine.getOutcomes().length
        )
        .toBe(1);


      }

    );


  }

);