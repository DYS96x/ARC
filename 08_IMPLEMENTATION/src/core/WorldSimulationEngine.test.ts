import { WorldSimulationEngine } from "./WorldSimulationEngine";
import { WorldStateEngine } from "./WorldStateEngine";
import { WorldRelationshipEngine } from "./WorldRelationshipEngine";
import { WorldEventMemory } from "./WorldEventMemory";


describe(
  "World Simulation Engine",
  () => {


    it(
      "simulates a world event",
      () => {


        const simulation =
          new WorldSimulationEngine(

            new WorldStateEngine(),

            new WorldRelationshipEngine(),

            new WorldEventMemory()

          );



        const result =
          simulation.simulate(
            "STORM-INCREASE"
          );



        expect(
          result.event
        )
        .toBe(
          "STORM-INCREASE"
        );



        expect(
          result.confidence
        )
        .toBe(0.5);



      }
    );


  }
);