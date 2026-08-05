import { EventBus } from "../core/events/EventBus";
import { MemoryStore } from "./MemoryStore";


export class MemoryEventListener {


  constructor(
    private events: EventBus,
    private memoryStore: MemoryStore
  ) {

    this.register();

  }



  private register() {

    this.events.subscribe(
      "intelligence.generated",
      (event) => {


        this.memoryStore.add({

          id:
            `MEM-${Date.now()}`,

          source:
            event.sourceId,

          content:
            JSON.stringify(event.payload),

          confidence:
            typeof event.payload.confidence === "number"
              ? event.payload.confidence
              : 0,

          confirmations:
            0,

          impact:
            0,

          createdAt:
            new Date()

        });


      }
    );

  }


}