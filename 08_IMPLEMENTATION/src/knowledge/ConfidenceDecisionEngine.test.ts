import { ConfidenceDecisionEngine } from "./ConfidenceDecisionEngine";
import { ConfidenceEvolutionEngine } from "./ConfidenceEvolutionEngine";


describe(
  "Confidence Decision Engine",
  () => {


    it(
      "selects decisions using confidence history",
      () => {


        const evolution =
          new ConfidenceEvolutionEngine();



        evolution.update(
          "ACTION-A",
          0.3
        );



        const engine =
          new ConfidenceDecisionEngine(
            evolution
          );



        const result =
          engine.choose([

            "ACTION-A",

            "ACTION-B"

          ]);



        expect(
          result[0].decision
        )
        .toBe(
          "ACTION-A"
        );



        expect(
          result[0].confidence
        )
        .toBeGreaterThan(
          result[1].confidence
        );


      }
    );


  }
);