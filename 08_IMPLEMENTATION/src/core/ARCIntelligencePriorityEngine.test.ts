import { ARCIntelligencePriorityEngine } from "./ARCIntelligencePriorityEngine";


describe(
  "ARC Intelligence Priority Engine",
  () => {


    it(
      "identifies highest intelligence priority",
      () => {


        const engine =
          new ARCIntelligencePriorityEngine();



        engine.addPriority(

          "EXPLORE",

          0.60

        );



        engine.addPriority(

          "PROTECT SYSTEM",

          0.95

        );



        const highest =
          engine.getHighestPriority();



        expect(
          highest?.objective
        )
        .toBe(
          "PROTECT SYSTEM"
        );



        expect(
          highest?.priority
        )
        .toBe(
          0.95
        );


      }

    );


  }

);