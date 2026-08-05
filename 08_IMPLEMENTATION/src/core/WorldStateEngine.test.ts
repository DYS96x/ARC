import { WorldStateEngine } from "./WorldStateEngine";


describe(
  "World State Engine",
  () => {


    it(
      "stores and updates world entities",
      () => {


        const world =
          new WorldStateEngine();



        const entity =
          world.register({

            id:
              "WORLD-001",

            type:
              "PLANET",

            state:
              {
                status:
                  "STABLE"
              }

          });



        expect(
          entity.id
        )
        .toBe(
          "WORLD-001"
        );



        const updated =
          world.updateState(

            "WORLD-001",

            {
              status:
                "CHANGING"
            }

          );



        expect(
          updated?.state.status
        )
        .toBe(
          "CHANGING"
        );



        expect(
          world.getEntities().length
        )
        .toBe(1);


      }
    );


  }
);