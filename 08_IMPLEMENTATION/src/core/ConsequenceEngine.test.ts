import { ConsequenceEngine } from "./ConsequenceEngine";


describe(
  "Consequence Engine",
  () => {


    it(
      "records world consequences",
      () => {


        const engine =
          new ConsequenceEngine();



        const consequence =
          engine.evaluate(

            "STORM-INCREASE",

            "CITY-DAMAGE",

            0.8

          );



        expect(
          consequence.trigger
        )
        .toBe(
          "STORM-INCREASE"
        );



        expect(
          consequence.result
        )
        .toBe(
          "CITY-DAMAGE"
        );



        expect(
          consequence.severity
        )
        .toBe(
          0.8
        );



        expect(
          engine.getConsequences().length
        )
        .toBe(1);



      }
    );


  }
);