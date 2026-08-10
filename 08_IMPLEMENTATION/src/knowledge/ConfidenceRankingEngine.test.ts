import { ConfidenceRankingEngine } from "./ConfidenceRankingEngine";
import { ConfidenceEvolutionEngine } from "./ConfidenceEvolutionEngine";


describe(
  "Confidence Ranking Engine",
  () => {


    it(
      "ranks decision candidates using confidence history without granting authority",
      () => {


        const evolution =
          new ConfidenceEvolutionEngine();



        evolution.update(
          "ACTION-A",
          0.3
        );



        const engine =
          new ConfidenceRankingEngine(
            evolution
          );



        const result =
          engine.rank([

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