import { WorldActionEngine } from "./WorldActionEngine";


describe(
  "World Action Engine",
  () => {


    it(
      "executes actions from decisions",
      () => {


        const engine =
          new WorldActionEngine();



        const result =
          engine.execute(

            "RESOURCE-SHORTAGE",

            "BUILD-NEW-SUPPLY-CHAIN"

          );



        expect(
          result.decision
        )
        .toBe(
          "RESOURCE-SHORTAGE"
        );



        expect(
          result.action
        )
        .toBe(
          "BUILD-NEW-SUPPLY-CHAIN"
        );



        expect(
          result.status
        )
        .toBe(
          "EXECUTED"
        );



        expect(
          engine.getActions().length
        )
        .toBe(1);


      }

    );


  }

);