import { PatternEngine } from "./PatternEngine";


describe("Pattern Engine", () => {

  it("discovers patterns from relationships", () => {

    const engine = new PatternEngine();

    const pattern = engine.discover([
      {
        id: "REL-001",
        from: "A",
        to: "B",
        type: "supports",
        strength: 0.8,
        createdAt: new Date()
      },
      {
        id: "REL-002",
        from: "B",
        to: "C",
        type: "creates",
        strength: 0.6,
        createdAt: new Date()
      }
    ]);

    expect(pattern?.relationships.length)
      .toBe(2);

    expect(pattern?.confidence)
      .toBe(0.7);

  });

});