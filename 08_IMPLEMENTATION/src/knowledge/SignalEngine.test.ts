import { SignalEngine } from "./SignalEngine";


describe("Signal Engine", () => {

  it("creates signals from patterns", () => {

    const engine =
      new SignalEngine();


    const signal =
      engine.createFromPattern({
        id: "PATTERN-001",
        name: "Repeated behaviour",
        relationships: [
          "REL-001",
          "REL-002"
        ],
        confidence: 0.9,
        createdAt: new Date()
      });


    expect(signal.source)
      .toBe("PATTERN-001");


    expect(signal.strength)
      .toBe(0.9);

  });


  it("evaluates signal importance", () => {

    const engine =
      new SignalEngine();


    const result =
      engine.evaluate({
        id: "SIGNAL-001",
        source: "PATTERN-001",
        description: "Strong signal",
        strength: 0.9,
        confidence: 0.9,
        importance: 0.9,
        createdAt: new Date()
      });


    expect(result)
      .toBe("high");

  });

});