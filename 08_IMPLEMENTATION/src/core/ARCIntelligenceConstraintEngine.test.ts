import { ARCIntelligenceConstraintEngine } from "./ARCIntelligenceConstraintEngine";


describe(
  "ARC Intelligence Constraint Engine",
  () => {


    it(
      "stores and retrieves intelligence constraints without granting authority",
      () => {


        const engine =
          new ARCIntelligenceConstraintEngine();



        engine.addConstraint(

          "PROTECT SYSTEM INTEGRITY",

          0.95

        );


        engine.addConstraint(

          "OPTIMISE PERFORMANCE",

          0.80

        );



        const decision =
          engine.findConstraint(

            "PROTECT SYSTEM INTEGRITY"

          );



        expect(
          decision?.rule
        )
        .toBe(
          "PROTECT SYSTEM INTEGRITY"
        );


        expect(
          decision?.priority
        )
        .toBe(
          0.95
        );


        expect(
          engine.getConstraints().length
        )
        .toBe(
          2
        );


      }

    );


  }

);
