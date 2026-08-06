import { WorldDecisionEngine } from "./WorldDecisionEngine";


describe(
  "World Decision Engine",
  () => {


    it(
      "creates decisions from world situations",
      () => {


        const engine =
          new WorldDecisionEngine();



        const decision =
          engine.evaluate(

            "RESOURCE-SHORTAGE",

            "FIND-NEW-SOURCES",

            0.8

          );



        expect(
          decision.situation
        )
        .toBe(
          "RESOURCE-SHORTAGE"
        );



        expect(
          decision.action
        )
        .toBe(
          "FIND-NEW-SOURCES"
        );



        expect(
          decision.confidence
        )
        .toBe(
          0.8
        );



        expect(
          engine.getDecisions().length
        )
        .toBe(1);


      }

    );


  }

);