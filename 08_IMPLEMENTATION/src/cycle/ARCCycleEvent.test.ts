import { ARCCycleEvent } from "./ARCCycleEvent";


describe("ARC Cycle Event", () => {


  it("creates a cycle event", () => {


    const event: ARCCycleEvent = {

      id:
        "EVENT-001",

      type:
        "CycleProgressed",

      stage:
        "Observation",

      payload:
        {},

      timestamp:
        new Date()

    };


    expect(event.stage)
      .toBe("Observation");


  });


});