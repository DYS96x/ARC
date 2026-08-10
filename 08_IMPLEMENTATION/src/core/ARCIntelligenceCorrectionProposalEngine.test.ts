import { ARCIntelligenceCorrectionProposalEngine } from "./ARCIntelligenceCorrectionProposalEngine";


describe(
  "ARC Intelligence Correction Proposal Engine",
  () => {


    it(
      "creates correction proposals without executing them",
      () => {


        const engine =
          new ARCIntelligenceCorrectionProposalEngine();



        const correction =
          engine.createProposal(

            "MEMORY SYSTEM",

            "LOW RETENTION PERFORMANCE",

            0.25

          );



        expect(
          correction.capability
        )
        .toBe(
          "MEMORY SYSTEM"
        );


        expect(
          correction.issue
        )
        .toBe(
          "LOW RETENTION PERFORMANCE"
        );


        expect(
          correction.priority
        )
        .toBe(
          0.25
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