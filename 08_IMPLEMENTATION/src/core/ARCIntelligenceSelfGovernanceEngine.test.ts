import { ARCIntelligenceSelfGovernanceEngine } from "./ARCIntelligenceSelfGovernanceEngine";


describe(
  "ARC Intelligence Self Governance Engine",
  () => {


    it(
      "creates governance rules and filters decisions",
      () => {


        const engine =
          new ARCIntelligenceSelfGovernanceEngine();



        engine.addRule(

          "PROTECT SYSTEM INTEGRITY",

          0.95

        );


        engine.addRule(

          "OPTIMISE PERFORMANCE",

          0.80

        );



        const decision =
          engine.evaluateDecision(

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
          engine.getRules().length
        )
        .toBe(
          2
        );


      }

    );


  }

);