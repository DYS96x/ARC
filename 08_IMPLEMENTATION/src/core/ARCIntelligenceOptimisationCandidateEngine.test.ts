import { ARCIntelligenceOptimisationCandidateEngine } from "./ARCIntelligenceOptimisationCandidateEngine";


describe(
  "ARC Intelligence Autonomous Optimisation Engine",
  () => {


    it(
      "selects highest value optimisation",
      () => {


        const engine =
          new ARCIntelligenceOptimisationCandidateEngine();



        engine.addOptimisation(

          "MEMORY-UPGRADE",

          0.65

        );


        engine.addOptimisation(

          "DECISION-UPGRADE",

          0.92

        );



        const best =
          engine.selectBestOptimisation();



        expect(
          best?.name
        )
        .toBe(
          "DECISION-UPGRADE"
        );



        expect(
          best?.value
        )
        .toBe(
          0.92
        );


      }

    );


  }

);