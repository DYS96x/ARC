import { MemoryEvolutionEngine } from "./MemoryEvolutionEngine";


describe("Memory Integration", () => {


  it("prioritises stronger knowledge memories", () => {


    const engine =
      new MemoryEvolutionEngine();


    const memory =
      engine.calculateStrength({

        confidence: 0.9,

        confirmations: 10,

        impact: 0.9,

        age: 1

      });


    expect(memory)
      .toBeGreaterThan(0.9);


  });


});