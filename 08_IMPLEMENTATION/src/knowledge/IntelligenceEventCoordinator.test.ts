import { EventBus } from "../core/events/EventBus";
import { IntelligenceEventCoordinator } from "./IntelligenceEventCoordinator";


describe(
  "Intelligence Event Coordinator",
  () => {


    it(
      "reacts to memory events and runs intelligence",
      () => {


        const events =
          new EventBus();



        const coordinator =
          new IntelligenceEventCoordinator(
            events
          );



        coordinator.register();



        events.publish({

          id:
            crypto.randomUUID(),


          type:
            "MemoryUpdated",


          sourceId:
            "ARC-CYCLE",


          payload:
            {

              outcome:
                {
                  success:
                    true
                }

            },


          timestamp:
            new Date()

        });



        expect(
          coordinator.triggered
        )
        .toBe(true);



        expect(
          coordinator
          .getIntelligence()
          .getPatterns()
          .length
        )
        .toBe(1);


      }
    );


  }
);