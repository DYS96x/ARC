import { EventBus } from "../core/events/EventBus";
import { LearningEventListener } from "./LearningEventListener";


describe(
  "Learning Event Listener",
  () => {


    it(
      "reacts to learning events",
      () => {


        const events =
          new EventBus();


        const listener =
          new LearningEventListener(
            events
          );


        listener.register();


        events.publish({

          id:
            crypto.randomUUID(),

          type:
            "LearningCreated",

          sourceId:
            "ARC-CYCLE",

          payload:
            {
              learned:
                true
            },

          timestamp:
            new Date()

        });


        expect(
          listener.received
        )
        .toBe(true);


      }
    );


  }
);