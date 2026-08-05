import { RealityValidationEngine } from "./RealityValidationEngine";


describe(
  "Reality Validation Engine",
  () => {


    it(
      "adjusts confidence from real outcomes",
      () => {


        const engine =
          new RealityValidationEngine();



        const result =
          engine.validate(
            "ACTION-A",
            true
          );



        expect(
          result.decision
        )
        .toBe("ACTION-A");



        expect(
          result.success
        )
        .toBe(true);



        expect(
          result.confidenceAdjustment
        )
        .toBe(0.1);


      }
    );


  }
);