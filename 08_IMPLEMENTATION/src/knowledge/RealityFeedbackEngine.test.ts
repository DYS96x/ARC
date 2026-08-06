import { RealityFeedbackEngine } from "./RealityFeedbackEngine";


describe(
  "Reality Feedback Engine",
  () => {


    it(
      "records reality outcomes from actions",
      () => {


        const engine =
          new RealityFeedbackEngine();



        const feedback =
          engine.record(

            "BUILD-NEW-SUPPLY-CHAIN",

            "RESOURCE-STABILITY-IMPROVED",

            true

          );



        expect(
          feedback.action
        )
        .toBe(
          "BUILD-NEW-SUPPLY-CHAIN"
        );



        expect(
          feedback.outcome
        )
        .toBe(
          "RESOURCE-STABILITY-IMPROVED"
        );



        expect(
          feedback.success
        )
        .toBe(
          true
        );



        expect(
          engine.getFeedback().length
        )
        .toBe(1);


      }

    );


  }

);