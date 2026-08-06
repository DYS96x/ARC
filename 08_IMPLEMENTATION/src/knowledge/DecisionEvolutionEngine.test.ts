import { DecisionEvolutionEngine } from "./DecisionEvolutionEngine";


describe(
  "Decision Evolution Engine",
  () => {


    it(
      "evolves future decisions from learned lessons",
      () => {


        const engine =
          new DecisionEvolutionEngine();



        const result =
          engine.evolve(

            "RESOURCE-DISTRIBUTION",

            "DISTRIBUTED-SYSTEMS-IMPROVE-STABILITY",

            0.15

          );



        expect(
          result.decision
        )
        .toBe(
          "RESOURCE-DISTRIBUTION"
        );



        expect(
          result.lesson
        )
        .toBe(
          "DISTRIBUTED-SYSTEMS-IMPROVE-STABILITY"
        );



        expect(
          result.adjustment
        )
        .toBe(
          0.15
        );



        expect(
          engine.getEvolutions().length
        )
        .toBe(1);


      }

    );


  }

);