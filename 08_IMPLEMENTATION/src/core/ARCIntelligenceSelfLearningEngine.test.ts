import { ARCIntelligenceSelfLearningEngine } from "./ARCIntelligenceSelfLearningEngine";


describe(
  "ARC Intelligence Self Learning Engine",
  () => {


    it(
      "learns improvement patterns from correction outcomes",
      () => {


        const engine =
          new ARCIntelligenceSelfLearningEngine();



        const learning =
          engine.recordLearning(

            "MEMORY SYSTEM",

            "RETENTION IMPROVED",

            0.85

          );



        expect(
          learning.capability
        )
        .toBe(
          "MEMORY SYSTEM"
        );


        expect(
          learning.result
        )
        .toBe(
          "RETENTION IMPROVED"
        );


        expect(
          learning.confidence
        )
        .toBe(
          0.85
        );


        expect(
          engine.getLearnings().length
        )
        .toBe(
          1
        );


      }

    );


  }

);