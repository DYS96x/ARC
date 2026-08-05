import { EventBus } from "./EventBus";


describe("ARC Event Bus", () => {


  it("publishes events to subscribers", () => {


    const bus =
      new EventBus();


    let received = false;


    bus.subscribe(
      "knowledge.created",
      () => {

        received = true;

      }
    );


    bus.publish({

      id:
        "EVENT-001",

      type:
        "knowledge.created",

      sourceId:
        "TEST-SOURCE",

      payload:
        {
          id: "KNOW-001"
        },

      timestamp:
        new Date()

    });


    expect(received)
      .toBe(true);


  });


});