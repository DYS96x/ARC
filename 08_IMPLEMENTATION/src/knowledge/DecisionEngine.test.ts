import { DecisionEngine } from "./DecisionEngine";


describe("Decision Engine", () => {


  it("creates decisions from signals", () => {


    const engine =
      new DecisionEngine();


    const decision =
      engine.createFromSignal({

        id: "SIGNAL-001",

        source: "PATTERN-001",

        description:
          "Strong pattern signal",

        strength: 0.9,

        confidence: 0.9,

        importance: 0.8,

        createdAt: new Date()

      });


    expect(
      decision.signalId
    )
    .toBe("SIGNAL-001");


    expect(
      decision.confidence
    )
    .toBe(0.9);


  });



  it("evaluates decision confidence", () => {


    const engine =
      new DecisionEngine();


    expect(

      engine.evaluate({

        id: "DECISION-001",

        signalId: "SIGNAL-001",

        description:
          "High confidence decision",

        confidence: 0.9,

        impact: 0.8,

        risk: 0.1,

        expectedOutcome:
          "Positive validation",

        createdAt:
          new Date()

      })

    )
    .toBe("approved");


  });


});