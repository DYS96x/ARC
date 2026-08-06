import { ARCAdaptiveConfidenceEngine } from "./ARCAdaptiveConfidenceEngine";


describe(
  "ARC Adaptive Confidence Engine",
  () => {


    it(
      "updates confidence from outcomes",
      () => {


        const engine =
          new ARCAdaptiveConfidenceEngine();



        const result =
          engine.updateConfidence(

            "WORLD-CHANGE-ROUTE",

            0.90

          );



        expect(
          result.route
        )
        .toBe(
          "WORLD-CHANGE-ROUTE"
        );



        expect(
          result.confidence
        )
        .toBe(
          0.90
        );



        expect(
          result.updates
        )
        .toBe(
          1
        );


      }

    );


  }

);