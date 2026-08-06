import { ARCIntelligenceExecutionMonitor } from "./ARCIntelligenceExecutionMonitor";


describe(
  "ARC Intelligence Execution Monitor",
  () => {


    it(
      "records intelligence execution outcomes",
      () => {


        const monitor =
          new ARCIntelligenceExecutionMonitor();



        const result =
          monitor.recordExecution(

            "WORLD-CHANGE-ROUTE",

            [

              "WORLD",

              "DECISION",

              "FEEDBACK"

            ],

            "SUCCESS",

            0.92

          );



        expect(
          result.route
        )
        .toBe(
          "WORLD-CHANGE-ROUTE"
        );



        expect(
          result.outcome
        )
        .toBe(
          "SUCCESS"
        );



        expect(
          result.score
        )
        .toBe(
          0.92
        );



        expect(
          monitor.getExecutions().length
        )
        .toBe(1);


      }

    );


  }

);