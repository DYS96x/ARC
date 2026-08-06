import { ARCIntelligenceSelfCorrectionEngine } from "./ARCIntelligenceSelfCorrectionEngine";


describe(
  "ARC Intelligence Self Correction Engine",
  () => {


    it(
      "creates correction actions from capability weaknesses",
      () => {


        const engine =
          new ARCIntelligenceSelfCorrectionEngine();



        const correction =
          engine.createCorrection(

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
          engine.getCorrections().length
        )
        .toBe(
          1
        );


      }

    );


  }

);