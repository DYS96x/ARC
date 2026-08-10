import { ImprovementPriorityEngine } from "./ImprovementPriorityEngine";


describe(
  "Autonomous Priority Engine",
  () => {


    it(
      "ranks systems for future improvement",
      () => {


        const engine =
          new ImprovementPriorityEngine();



        const result =
          engine.prioritise(

            "DECISION-ENGINE",

            "LOW-CONFIDENCE-PREDICTIONS",

            0.95

          );



        expect(
          result.system
        )
        .toBe(
          "DECISION-ENGINE"
        );



        expect(
          result.reason
        )
        .toBe(
          "LOW-CONFIDENCE-PREDICTIONS"
        );



        expect(
          result.priority
        )
        .toBe(
          0.95
        );



        expect(
          engine.getPriorities().length
        )
        .toBe(1);


      }

    );


  }

);