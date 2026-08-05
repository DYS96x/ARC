import { ConfidenceEvolutionEngine } from "./ConfidenceEvolutionEngine";


describe(
  "Confidence Evolution Engine",
  () => {


    it(
      "updates confidence from validation results",
      () => {


        const engine =
          new ConfidenceEvolutionEngine();



        const result =
          engine.update(
            "ACTION-A",
            0.1
          );



        expect(
          result.decision
        )
        .toBe("ACTION-A");



        expect(
          result.confidence
        )
        .toBe(0.6);



        expect(
          result.attempts
        )
        .toBe(1);


      }
    );


  }
);