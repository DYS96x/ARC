import { ARCIntelligenceReflectionEngine } from "./ARCIntelligenceReflectionEngine";


describe(
  "ARC Intelligence Reflection Engine",
  () => {


    it(
      "evaluates intelligence performance after outcome",
      () => {


        const engine =
          new ARCIntelligenceReflectionEngine();



        const reflection =
          engine.reflect(

            "SELECT ROUTE A",

            0.90,

            0.70

          );



        expect(
          reflection.decision
        )
        .toBe(
          "SELECT ROUTE A"
        );



        expect(
          reflection.improvementRequired
        )
        .toBe(
          true
        );



        expect(
          engine.getReflections().length
        )
        .toBe(
          1
        );


      }

    );


  }

);