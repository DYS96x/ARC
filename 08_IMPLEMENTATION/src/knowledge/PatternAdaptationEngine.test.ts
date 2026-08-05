import { PatternAdaptationEngine } from "./PatternAdaptationEngine";


describe(
  "Pattern Adaptation Engine",
  () => {


    it(
      "creates patterns from memory",
      () => {


        const engine =
          new PatternAdaptationEngine();



        const pattern =
          engine.learn({

            outcome:
              {
                success:
                  true
              },

            updated:
              true

          });



        expect(
          pattern.detected
        )
        .toBe(true);



        expect(
          engine.getPatterns().length
        )
        .toBe(1);


      }
    );


  }
);