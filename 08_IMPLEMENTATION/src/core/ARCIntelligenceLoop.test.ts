import { ARCIntelligenceLoop } from "./ARCIntelligenceLoop";


describe(
  "ARC Intelligence Loop",
  () => {


    it(
      "runs complete self learning cycle",
      () => {


        const loop =
          new ARCIntelligenceLoop();



        const result =
          loop.process({

            success:
              true

          });



        expect(
          result.processed
        )
        .toBe(true);



        expect(

          loop
          .getIntelligence()
          .getIntelligence()
          .getPatterns()
          .length

        )
        .toBe(1);


      }
    );


  }
);