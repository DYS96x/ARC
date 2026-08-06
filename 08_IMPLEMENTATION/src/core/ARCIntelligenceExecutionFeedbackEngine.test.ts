import { ARCIntelligenceExecutionFeedbackEngine } from "./ARCIntelligenceExecutionFeedbackEngine";


describe(
  "ARC Intelligence Execution Feedback Engine",
  () => {


    it(
      "records execution outcomes and learns from results",
      () => {


        const engine =
          new ARCIntelligenceExecutionFeedbackEngine();



        const feedback =
          engine.recordOutcome(

            "IMPROVE DECISION SYSTEM",

            true,

            0.95

          );



        expect(
          feedback.objective
        )
        .toBe(
          "IMPROVE DECISION SYSTEM"
        );



        expect(
          feedback.success
        )
        .toBe(
          true
        );



        expect(
          feedback.confidence
        )
        .toBe(
          0.95
        );



        expect(
          engine.getFeedback().length
        )
        .toBe(
          1
        );


      }

    );


  }

);