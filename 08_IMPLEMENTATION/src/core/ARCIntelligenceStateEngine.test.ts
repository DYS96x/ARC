import { ARCIntelligenceStateEngine } from "./ARCIntelligenceStateEngine";


describe(
  "ARC Intelligence State Engine",
  () => {


    it(
      "tracks current intelligence state",
      () => {


        const engine =
          new ARCIntelligenceStateEngine();



        const state =
          engine.updateState(

            "LEARNING",

            0.85

          );



        expect(
          state.status
        )
        .toBe(
          "LEARNING"
        );



        expect(
          state.confidence
        )
        .toBe(
          0.85
        );



        expect(
          engine.getState().status
        )
        .toBe(
          "LEARNING"
        );


      }

    );


  }

);