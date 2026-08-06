import { WorldLearningEngine } from "./WorldLearningEngine";


describe(
  "World Learning Engine",
  () => {


    it(
      "creates learning from reality feedback",
      () => {


        const engine =
          new WorldLearningEngine();



        const result =
          engine.learn(

            "BUILD-NEW-SUPPLY-CHAIN",

            "DISTRIBUTED-SOURCES-INCREASE-STABILITY",

            0.9

          );



        expect(
          result.source
        )
        .toBe(
          "BUILD-NEW-SUPPLY-CHAIN"
        );



        expect(
          result.lesson
        )
        .toBe(
          "DISTRIBUTED-SOURCES-INCREASE-STABILITY"
        );



        expect(
          result.confidence
        )
        .toBe(
          0.9
        );



        expect(
          engine.getLearnings().length
        )
        .toBe(1);


      }

    );


  }

);