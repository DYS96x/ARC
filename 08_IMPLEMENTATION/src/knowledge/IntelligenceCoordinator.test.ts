import { IntelligenceCoordinator } from "./IntelligenceCoordinator";


describe(
  "Intelligence Coordinator",
  () => {


    it(
      "connects memory, patterns and decision feedback",
      () => {


        const intelligence =
          new IntelligenceCoordinator();



        const result =
          intelligence.process({

            outcome:
              {
                success:
                  true
              },

            updated:
              true

          });



        expect(
          result.pattern.detected
        )
        .toBe(true);



        expect(
          result.recommendation.improvement
        )
        .toBe(true);



        expect(
          intelligence.getPatterns().length
        )
        .toBe(1);



        expect(
          intelligence.getFeedback().length
        )
        .toBe(1);


      }
    );


  }
);