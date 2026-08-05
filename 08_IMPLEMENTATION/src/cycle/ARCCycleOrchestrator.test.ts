import { ARCCycleOrchestrator } from "./ARCCycleOrchestrator";


describe(
  "ARC Cycle Orchestrator",
  () => {


    it(
      "runs reality through the complete learning loop",
      () => {


        const arc =
          new ARCCycleOrchestrator();



        const result =
          arc.process(
            "New reality signal"
          );



        expect(
          result.observation.observed
        )
        .toBe(
          "New reality signal"
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
          result.outcome.success
        )
        .toBe(true);


        expect(
          result.learning.learned
        )
        .toBe(true);


      });


  });