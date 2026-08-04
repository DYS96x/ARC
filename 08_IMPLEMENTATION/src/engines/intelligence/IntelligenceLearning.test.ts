import { PatternEvolutionEngine } from "../../knowledge/patterns/PatternEvolutionEngine";


describe("Pattern Learning Evolution", () => {


  it("strengthens knowledge when intelligence is validated", () => {


    const engine =
      new PatternEvolutionEngine();


    const pattern = {

      id: "PATTERN-001",

      name:
        "Reliable behaviour",

      relationships: [
        "REL-001"
      ],

      confidence:
        0.5,

      createdAt:
        new Date()

    };


    const updated =
      engine.strengthen(
        pattern,
        0.2
      );


    expect(updated.confidence)
      .toBe(0.7);


  });



  it("weakens knowledge when intelligence fails validation", () => {


    const engine =
      new PatternEvolutionEngine();


    const pattern = {

      id: "PATTERN-002",

      name:
        "Incorrect assumption",

      relationships: [
        "REL-002"
      ],

      confidence:
        0.8,

      createdAt:
        new Date()

    };


    const updated =
      engine.weaken(
        pattern,
        0.3
      );


    expect(updated.confidence)
      .toBe(0.5);


  });


});