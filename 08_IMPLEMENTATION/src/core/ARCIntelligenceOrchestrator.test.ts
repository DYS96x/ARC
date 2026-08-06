import { ARCIntelligenceOrchestrator } from "./ARCIntelligenceOrchestrator";


describe(
  "ARC Intelligence Orchestrator",
  () => {


    it(
      "coordinates intelligence engines",
      () => {


        const orchestrator =
          new ARCIntelligenceOrchestrator();



        const result =
          orchestrator.orchestrate({

            source:
              "WORLD-EVENT",


            objective:
              "UNDERSTAND-CHANGE"

          });



        expect(
          result.source
        )
        .toBe(
          "WORLD-EVENT"
        );



        expect(
          result.objective
        )
        .toBe(
          "UNDERSTAND-CHANGE"
        );



        expect(
          result.engines.length
        )
        .toBe(4);



        expect(
          orchestrator.getRoutes().length
        )
        .toBe(1);


      }

    );


  }

);