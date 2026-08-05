import { EventBus } from "../core/events/EventBus";
import { MemoryReactionListener } from "./MemoryReactionListener";


describe(
  "Memory Reaction Listener",
  () => {


    it(
      "reacts to outcome events and updates memory",
      () => {


        const events =
          new EventBus();



        const listener =
          new MemoryReactionListener(
            events
          );



        listener.register();



        events.publish({

          id:
            crypto.randomUUID(),


          type:
            "OutcomeCreated",


          sourceId:
            "ARC-CYCLE",


          payload:
            {
              success:
                true
            },


          timestamp:
            new Date()

        });



        expect(
          listener.memoryUpdated
        )
        .toBe(true);


      }
    );


  }
);