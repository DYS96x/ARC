import { ARCIntelligenceImprovementProposalEngine } from "./ARCIntelligenceImprovementProposalEngine";


describe(
  "ARC Intelligence Improvement Proposal Engine",
  () => {


    it(
      "creates improvement proposals without granting authority",
      () => {


        const engine =
          new ARCIntelligenceImprovementProposalEngine();



        const improvement =
          engine.createProposal(

            "ADAPTIVE_ROUTING",

            "LOW CONFIDENCE IN COMPLEX SCENARIOS"

          );



        expect(
          improvement.capability
        )
        .toBe(
          "ADAPTIVE_ROUTING"
        );



        expect(
          improvement.issue
        )
        .toBe(
          "LOW CONFIDENCE IN COMPLEX SCENARIOS"
        );



        expect(
          engine.getProposals().length
        )
        .toBe(
          1
        );


      }

    );


  }

);