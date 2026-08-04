import { PatternEvolutionEngine } from "./PatternEvolutionEngine";

describe("Pattern Evolution Engine", () => {

  const pattern = {
    id: "PATTERN-001",
    name: "Repeated behaviour",
    relationships: [
      "REL-001",
      "REL-002"
    ],
    confidence: 0.5,
    createdAt: new Date()
  };


  it("strengthens patterns through confirmed reality", () => {

    const engine = new PatternEvolutionEngine();

    const result = engine.strengthen(
      pattern,
      0.3
    );

    expect(result.confidence)
      .toBe(0.8);

  });


  it("weakens patterns when evidence disagrees", () => {

    const engine = new PatternEvolutionEngine();

    const result = engine.weaken(
      pattern,
      0.2
    );

    expect(result.confidence)
      .toBe(0.3);

  });


  it("evaluates pattern maturity", () => {

    const engine = new PatternEvolutionEngine();

    expect(
      engine.evaluate(pattern)
    )
    .toBe("developing");

  });

});