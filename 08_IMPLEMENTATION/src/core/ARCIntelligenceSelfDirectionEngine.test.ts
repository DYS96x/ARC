import { ARCIntelligenceSelfDirectionEngine } from "./ARCIntelligenceSelfDirectionEngine";


describe(
  "ARC Intelligence Self Direction Engine",
  () => {


    it(
      "creates highest priority autonomous objective",
      () => {


        const engine =
          new ARCIntelligenceSelfDirectionEngine();



        engine.addObjective(

          "IMPROVE MEMORY SYSTEM",

          0.75

        );


        engine.addObjective(

          "IMPROVE DECISION SYSTEM",

          0.95

        );



        const goal =
          engine.selectNextObjective();



        expect(
          goal?.objective
        )
        .toBe(
          "IMPROVE DECISION SYSTEM"
        );


        expect(
          goal?.priority
        )
        .toBe(
          0.95
        );


      }

    );


  }

);