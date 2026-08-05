import { EventBus } from "../core/events/EventBus";
import { MemoryStore } from "./MemoryStore";
import { MemoryEventListener } from "./MemoryEventListener";


describe("Memory Event Listener", () => {


  it("creates memory from intelligence events", () => {


    const events =
      new EventBus();


    const store =
      new MemoryStore();


    new MemoryEventListener(
      events,
      store
    );


    events.publish({

      id:
        "EVENT-001",

      type:
        "intelligence.generated",

      sourceId:
        "INTELLIGENCE",

      payload:
        {
          confidence: 0.9,
          recommendation:
            "Proceed"
        },

      timestamp:
        new Date()

    });



    expect(
      store.count()
    )
    .toBe(1);


  });


});