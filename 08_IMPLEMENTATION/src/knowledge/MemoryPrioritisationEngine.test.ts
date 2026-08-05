import { MemoryPrioritisationEngine } from "./MemoryPrioritisationEngine";


describe("Memory Prioritisation Engine", () => {


  it("ranks strong memories as high priority", () => {


    const engine =
      new MemoryPrioritisationEngine();


    const result =
      engine.prioritise({

        id:
          "MEM-001",

        confidence:
          0.9,

        confirmations:
          10,

        impact:
          0.9,

        age:
          1

      });



    expect(result.priority)
      .toBe("high");


    expect(result.strength)
      .toBeGreaterThan(0.9);


  });



});