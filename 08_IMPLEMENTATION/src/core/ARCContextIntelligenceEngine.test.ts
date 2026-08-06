import { ARCContextIntelligenceEngine } from "./ARCContextIntelligenceEngine";


describe(
  "ARC Context Intelligence Engine",
  () => {


    it(
      "identifies relevant intelligence paths",
      () => {


        const engine =
          new ARCContextIntelligenceEngine();



        const result =
          engine.analyse(

            "WORLD-EVENT-CHANGE",

            "HIGH"

          );



        expect(
          result.situation
        )
        .toBe(
          "WORLD-EVENT-CHANGE"
        );



        expect(
          result.priority
        )
        .toBe(
          "HIGH"
        );



        expect(
          result.engines.length
        )
        .toBe(3);



        expect(
          engine.getContexts().length
        )
        .toBe(1);


      }

    );


  }

);