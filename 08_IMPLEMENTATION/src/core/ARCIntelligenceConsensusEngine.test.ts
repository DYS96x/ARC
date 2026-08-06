import { ARCIntelligenceConsensusEngine } from "./ARCIntelligenceConsensusEngine";


describe(
  "ARC Intelligence Consensus Engine",
  () => {


    it(
      "selects highest confidence intelligence recommendation",
      () => {


        const engine =
          new ARCIntelligenceConsensusEngine();



        engine.addSignal(

          "CONTEXT ENGINE",

          0.70,

          "EXPLORE"

        );


        engine.addSignal(

          "RISK ENGINE",

          0.95,

          "WAIT"

        );



        const consensus =
          engine.getConsensus();



        expect(
          consensus?.source
        )
        .toBe(
          "RISK ENGINE"
        );



        expect(
          consensus?.confidence
        )
        .toBe(
          0.95
        );


      }

    );


  }

);