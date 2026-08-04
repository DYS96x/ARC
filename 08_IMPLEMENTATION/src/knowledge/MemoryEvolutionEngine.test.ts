import { MemoryEvolutionEngine } from "./MemoryEvolutionEngine";


describe("Memory Evolution Engine", () => {


  it("increases memory strength from repeated successful validation", () => {


    const engine =
      new MemoryEvolutionEngine();


    const result =
      engine.calculateStrength({

        confidence: 0.8,

        confirmations: 5,

        impact: 0.7,

        age: 1

      });


    expect(result)
      .toBeGreaterThan(0.8);


  });



  it("reduces memory strength when confidence is low", () => {


    const engine =
      new MemoryEvolutionEngine();


    const result =
      engine.calculateStrength({

        confidence: 0.2,

        confirmations: 0,

        impact: 0.1,

        age: 10

      });


    expect(result)
      .toBeLessThan(0.2);


  });


});