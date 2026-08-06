import { ARCIntelligenceSelfImprovementEngine } from "./ARCIntelligenceSelfImprovementEngine";


describe(
  "ARC Intelligence Self Improvement Engine",
  () => {


    it(
      "creates improvement proposals from capability weaknesses",
      () => {


        const engine =
          new ARCIntelligenceSelfImprovementEngine();



        const improvement =
          engine.createImprovement(

            "ADAPTIVE_ROUTING",

            "LOW CONFIDENCE IN COMPLEX SCENARIOS"

          );



        expect(
          improvement.capability
        )
        .toBe(
          "ADAPTIVE_ROUTING"
        );



        expect(
          improvement.issue
        )
        .toBe(
          "LOW CONFIDENCE IN COMPLEX SCENARIOS"
        );



        expect(
          engine.getImprovements().length
        )
        .toBe(
          1
        );


      }

    );


  }

);