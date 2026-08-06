import { PerformanceMemoryEngine } from "./PerformanceMemoryEngine";


describe(
  "Performance Memory Engine",
  () => {


    it(
      "stores system improvement history",
      () => {


        const engine =
          new PerformanceMemoryEngine();



        const result =
          engine.record(

            "DECISION-ENGINE",

            "IMPROVED-CONFIDENCE-MODEL",

            0.18

          );



        expect(
          result.system
        )
        .toBe(
          "DECISION-ENGINE"
        );



        expect(
          result.improvement
        )
        .toBe(
          "IMPROVED-CONFIDENCE-MODEL"
        );



        expect(
          result.result
        )
        .toBe(
          0.18
        );



        expect(
          engine.getMemories().length
        )
        .toBe(1);


      }

    );


  }

);