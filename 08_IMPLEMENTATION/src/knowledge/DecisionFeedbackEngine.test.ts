import { DecisionFeedbackEngine } from "./DecisionFeedbackEngine";


describe(
  "Decision Feedback Engine",
  () => {


    it(
      "creates feedback from recognised patterns",
      () => {


        const engine =
          new DecisionFeedbackEngine();



        const feedback =
          engine.analyse({

            detected:
              true,


            source:
              {

                outcome:
                  {

                    success:
                      true

                  }

              }

          });



        expect(
          feedback.improvement
        )
        .toBe(true);



        expect(
          engine.getFeedback().length
        )
        .toBe(1);


      }
    );


  }
);