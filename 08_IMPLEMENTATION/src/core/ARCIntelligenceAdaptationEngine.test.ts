import { ARCIntelligenceAdaptationEngine } from "./ARCIntelligenceAdaptationEngine";


describe(
  "ARC Intelligence Adaptation Engine",
  () => {


    it(
      "creates behavioural adjustments from reflection",
      () => {


        const engine =
          new ARCIntelligenceAdaptationEngine();



        const adaptation =
          engine.createAdaptation(

            "ROUTE-A",

            -0.15,

            "OVERCONFIDENT PREDICTION"

          );



        expect(
          adaptation.source
        )
        .toBe(
          "ROUTE-A"
        );



        expect(
          adaptation.adjustment
        )
        .toBe(
          -0.15
        );



        expect(
          engine.getAdaptations().length
        )
        .toBe(
          1
        );


      }

    );


  }

);