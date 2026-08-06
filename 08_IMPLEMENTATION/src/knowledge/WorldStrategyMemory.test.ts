import { WorldStrategyMemory } from "./WorldStrategyMemory";


describe(
  "World Strategy Memory",
  () => {


    it(
      "stores successful strategies for future decisions",
      () => {


        const memory =
          new WorldStrategyMemory();



        const result =
          memory.store(

            "RESOURCE-SHORTAGE",

            "DISTRIBUTED-SUPPLY-NETWORK",

            0.92

          );



        expect(
          result.situation
        )
        .toBe(
          "RESOURCE-SHORTAGE"
        );



        expect(
          result.strategy
        )
        .toBe(
          "DISTRIBUTED-SUPPLY-NETWORK"
        );



        expect(
          result.successRate
        )
        .toBe(
          0.92
        );



        expect(
          memory.getStrategies().length
        )
        .toBe(1);


      }

    );


  }

);