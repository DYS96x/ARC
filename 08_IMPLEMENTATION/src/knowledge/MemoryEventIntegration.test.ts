import { EventBus } from "../core/events/EventBus";
import { MemoryEvolutionEngine } from "./MemoryEvolutionEngine";


describe("Memory Event Integration", () => {


  it("receives intelligence events for memory formation", () => {


    const bus =
      new EventBus();


    const memoryEngine =
      new MemoryEvolutionEngine();


    let received = false;


    bus.subscribe(
      "intelligence.generated",
      () => {

        received = true;

        memoryEngine.calculateStrength({

          confidence: 0.8,

          confirmations: 1,

          impact: 0.8,

          age: 0

        });

      }
    );


    bus.publish({

      id:
        "EVENT-001",

      type:
        "intelligence.generated",

      sourceId:
        "INTEL-001",

      payload:
        {
          confidence: 0.8
        },

      timestamp:
        new Date()

    });


    expect(received)
      .toBe(true);


  });


});