import { ARCIntelligenceExecutiveEngine } from "./ARCIntelligenceExecutiveEngine";


describe(
  "ARC Intelligence Executive Engine",
  () => {


    it(
      "executes highest priority governed objective",
      () => {


        const engine =
          new ARCIntelligenceExecutiveEngine();



        engine.addObjective(

          "IMPROVE MEMORY SYSTEM",

          0.75

        );


        engine.addObjective(

          "IMPROVE DECISION SYSTEM",

          0.95

        );



        const action =
          engine.executeNextObjective();



        expect(
          action?.objective
        )
        .toBe(
          "IMPROVE DECISION SYSTEM"
        );


        expect(
          action?.priority
        )
        .toBe(
          0.95
        );


        expect(
          action?.status
        )
        .toBe(
          "EXECUTED"
        );


      }

    );


  }

);