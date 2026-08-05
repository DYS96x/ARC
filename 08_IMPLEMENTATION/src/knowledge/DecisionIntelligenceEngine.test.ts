import { DecisionIntelligenceEngine } from "./DecisionIntelligenceEngine";


describe(
  "Decision Intelligence Engine",
  () => {



    it(
      "scores decisions using memory experience",
      () => {


        const engine =
          new DecisionIntelligenceEngine();



        const result =
          engine.evaluate(

            "ACTION-A",

            {

              relevantMemories:
                [],

              averageConfidence:
                0.8,

              averageImpact:
                0.7

            }

          );



        expect(
          result.option
        )
        .toBe("ACTION-A");



        expect(
          result.score
        )
        .toBe(0.76);



        expect(
          result.confidence
        )
        .toBe(0.8);


      }
    );



  }
);