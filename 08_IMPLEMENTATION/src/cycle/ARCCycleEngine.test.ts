import { ARCCycleEngine } from "./ARCCycleEngine";


describe("ARC Cycle Engine", () => {


  it("runs the complete reality learning loop", () => {


    const engine =
      new ARCCycleEngine();



    const result =
      engine.processReality({

        signal:
          "Reality observation",

      });



    expect(
      result.knowledgeCreated
    )
    .toBe(true);



    expect(
      result.decisionCreated
    )
    .toBe(true);



    expect(
      result.outcomeRecorded
    )
    .toBe(true);



    expect(
      result.memoryUpdated
    )
    .toBe(true);


  });


});