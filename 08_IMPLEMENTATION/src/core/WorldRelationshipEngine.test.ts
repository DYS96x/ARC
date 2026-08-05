import { WorldRelationshipEngine } from "./WorldRelationshipEngine";


describe(
  "World Relationship Engine",
  () => {


    it(
      "creates connections between world entities",
      () => {


        const world =
          new WorldRelationshipEngine();



        const relationship =
          world.connect(

            "PLANET-001",

            "CITY-001",

            "CONTAINS"

          );



        expect(
          relationship.sourceId
        )
        .toBe(
          "PLANET-001"
        );



        expect(
          relationship.targetId
        )
        .toBe(
          "CITY-001"
        );



        expect(
          relationship.type
        )
        .toBe(
          "CONTAINS"
        );



        expect(
          world.getRelationships().length
        )
        .toBe(1);



        expect(
          world.findConnections(
            "PLANET-001"
          ).length
        )
        .toBe(1);


      }
    );


  }
);