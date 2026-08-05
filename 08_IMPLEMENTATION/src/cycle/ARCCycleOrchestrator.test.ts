import { ARCCycleOrchestrator } from "./ARCCycleOrchestrator";


describe("ARC Cycle Orchestrator", () => {


  it("runs the complete ARC experience loop", () => {


    const cycle =
      new ARCCycleOrchestrator();



    const result =
      cycle.process(
        "Reality signal detected"
      );



    expect(
      result.reality
    )
    .toBe(
      "Reality signal detected"
    );


    expect(
      result.observation.observed
    )
    .toBe(
      "Reality signal detected"
    );


    expect(
      result.knowledge.created
    )
    .toBe(true);


    expect(
      result.decision.created
    )
    .toBe(true);


    expect(
      result.action.executed
    )
    .toBe(true);


    expect(
      result.outcome.success
    )
    .toBe(true);


    expect(
      result.memory.updated
    )
    .toBe(true);


    expect(
      result.learning.learned
    )
    .toBe(true);


  });


});