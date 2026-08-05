import { MemoryLearningEngine } from "./MemoryLearningEngine";


describe("Memory Learning Engine", () => {


  it("updates memory and recalculates strength", () => {


    const engine =
      new MemoryLearningEngine();



    const result =
      engine.learn(

        {

          id:
            "MEM-001",

          source:
            "Intelligence",

          content:
            "Prediction succeeded",

          confidence:
            0.8,

          confirmations:
            1,

          impact:
            0.8,

          createdAt:
            new Date()

        },

        {
          success:
            true
        }

      );



    expect(
      result.memory.confirmations
    )
    .toBe(2);



    expect(
      result.strength
    )
    .toBeGreaterThan(0.8);


  });


});