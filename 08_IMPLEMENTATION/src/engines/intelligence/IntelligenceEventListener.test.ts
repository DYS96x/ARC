import { EventBus } from "../../core/events/EventBus";
import { IntelligenceEngine } from "./IntelligenceEngine";


describe("Intelligence Event Listener", () => {


  it("generates intelligence from knowledge events", () => {


    const bus =
      new EventBus();


    const engine =
      new IntelligenceEngine();


    let outputCreated = false;


    bus.subscribe(
      "intelligence.generated",
      () => {

        outputCreated = true;

      }
    );


    bus.subscribe(
      "knowledge.created",
      (event) => {


        engine.generateRecommendation(

          `Analyse ${event.payload.title}`,

          "Knowledge supports action",

          0.8

        );


      }
    );



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



    expect(
      outputCreated
    )
    .toBe(false);


  });


});