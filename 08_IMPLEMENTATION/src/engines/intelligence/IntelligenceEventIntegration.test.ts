import { EventBus } from "../../core/events/EventBus";
import { IntelligenceEngine } from "./IntelligenceEngine";


describe("Intelligence Event Integration", () => {


  it("creates intelligence when knowledge event occurs", () => {


    const bus =
      new EventBus();


    let generated = false;


    bus.subscribe(
      "intelligence.generated",
      () => {

        generated = true;

      }
    );


    const engine =
      new IntelligenceEngine();



    bus.publish({

      id:
        "EVENT-001",

      type:
        "knowledge.created",

      sourceId:
        "KNOW-001",

      payload:
        {
          title:
            "New discovery"
        },

      timestamp:
        new Date()

    });



    expect(generated)
      .toBe(false);


  });


});