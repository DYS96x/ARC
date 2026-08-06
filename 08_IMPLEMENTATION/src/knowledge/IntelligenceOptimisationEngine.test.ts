import { IntelligenceOptimisationEngine } from "./IntelligenceOptimisationEngine";


describe(
  "Intelligence Optimisation Engine",
  () => {


    it(
      "records improvements to ARC systems",
      () => {


        const engine =
          new IntelligenceOptimisationEngine();



        const result =
          engine.optimise(

            "DECISION-ENGINE",

            "CONFIDENCE-ACCURACY",

            0.12

          );



        expect(
          result.system
        )
        .toBe(
          "DECISION-ENGINE"
        );



        expect(
          result.metric
        )
        .toBe(
          "CONFIDENCE-ACCURACY"
        );



        expect(
          result.improvement
        )
        .toBe(
          0.12
        );



        expect(
          engine.getOptimisations().length
        )
        .toBe(1);


      }

    );


  }

);