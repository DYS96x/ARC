import { IntelligenceEvolutionEngine } from "./IntelligenceEvolutionEngine";


describe("Intelligence Evolution Engine", () => {


  it("strengthens knowledge when intelligence is confirmed", () => {


    const engine =
      new IntelligenceEvolutionEngine();


    const result =
      engine.evolve(
        {
          confidence: 0.5
        },
        "confirmed"
      );


    expect(result.confidence)
      .toBe(0.7);

  });



  it("weakens knowledge when intelligence is rejected", () => {


    const engine =
      new IntelligenceEvolutionEngine();


    const result =
      engine.evolve(
        {
          confidence: 0.8
        },
        "rejected"
      );


    expect(result.confidence)
      .toBe(0.6);

  });


});