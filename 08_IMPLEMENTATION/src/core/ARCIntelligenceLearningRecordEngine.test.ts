import { ARCIntelligenceLearningRecordEngine } from "./ARCIntelligenceLearningRecordEngine";


describe(
  "ARC Intelligence Learning Record Engine",
  () => {


    it(
      "records learning evidence without granting authority",
      () => {


        const engine =
          new ARCIntelligenceLearningRecordEngine();



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