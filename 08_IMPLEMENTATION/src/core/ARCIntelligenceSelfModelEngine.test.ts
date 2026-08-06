import { ARCIntelligenceSelfModelEngine } from "./ARCIntelligenceSelfModelEngine";


describe(
  "ARC Intelligence Self Model Engine",
  () => {


    it(
      "builds an internal model of intelligence capability",
      () => {


        const engine =
          new ARCIntelligenceSelfModelEngine();



        const model =
          engine.createModel(

            "MEMORY SYSTEM",

            0.92,

            "HIGH PERFORMANCE"

          );



        expect(
          model.system
        )
        .toBe(
          "MEMORY SYSTEM"
        );



        expect(
          model.confidence
        )
        .toBe(
          0.92
        );



        expect(
          model.state
        )
        .toBe(
          "HIGH PERFORMANCE"
        );



        expect(
          engine.getModels().length
        )
        .toBe(
          1
        );


      }

    );


  }

);