import { WorldEventMemory } from "./WorldEventMemory";


describe(
  "World Event Memory",
  () => {


    it(
      "records world events and retrieves history",
      () => {


        const memory =
          new WorldEventMemory();



        const event =
          memory.record({

            id:
              "EVENT-001",

            type:
              "STORM",

            sourceId:
              "PLANET-001",

            description:
              "Major storm event",

            timestamp:
              new Date(),

            impact:
              {
                damage:
                  "HIGH"
              }

          });



        expect(
          event.id
        )
        .toBe(
          "EVENT-001"
        );



        expect(
          memory.getEvents().length
        )
        .toBe(1);



        expect(
          memory.findEventsBySource(
            "PLANET-001"
          ).length
        )
        .toBe(1);


      }
    );


  }
);