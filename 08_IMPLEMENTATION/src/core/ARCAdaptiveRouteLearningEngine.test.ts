import { ARCAdaptiveRouteLearningEngine } from "./ARCAdaptiveRouteLearningEngine";


describe(
  "ARC Adaptive Route Learning Engine",
  () => {


    it(
      "learns route performance from outcomes",
      () => {


        const engine =
          new ARCAdaptiveRouteLearningEngine();


        const result =
          engine.learnRoute(

            "WORLD-SIMULATION-DECISION",

            true

          );


        expect(
          result.route
        )
        .toBe(
          "WORLD-SIMULATION-DECISION"
        );


        expect(
          result.successRate
        )
        .toBe(
          1
        );


        expect(
          result.attempts
        )
        .toBe(
          1
        );


        expect(
          engine.getRoutes().length
        )
        .toBe(
          1
        );


      }

    );


  }

);