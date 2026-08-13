import { ActionEngine } from "./ActionEngine";

describe("Action Engine", () => {

  it("creates actions from decisions without executing them", () => {

    const engine =
      new ActionEngine();

    const action =
      engine.createFromDecision({
        id: "DECISION-001",
        signalId: "SIGNAL-001",
        description:
          "Investigate strong signal",
        confidence: 0.9,
        impact: 0.8,
        risk: 0.1,
        expectedOutcome:
          "Validate hypothesis",
        createdAt:
          new Date()
      });

    expect(action.decisionId)
      .toBe("DECISION-001");

    expect(action.success)
      .toBeUndefined();
  });

  it("records a reality observation without declaring success", () => {

    const engine =
      new ActionEngine();

    const completed =
      engine.complete(
        {
          id: "ACTION-001",
          decisionId: "DECISION-001",
          description:
            "Run experiment",
          expectedOutcome:
            "Positive result",
          createdAt:
            new Date()
        },
        "Reality confirmed"
      );

    expect(completed.actualOutcome)
      .toBe("Reality confirmed");

    expect(completed.success)
      .toBeUndefined();

    expect(completed.learning)
      .toBe(
        "Reality observation recorded; validation pending"
      );
  });

  it("records contradictory reality without declaring failure", () => {

    const engine =
      new ActionEngine();

    const completed =
      engine.complete(
        {
          id: "ACTION-002",
          decisionId: "DECISION-002",
          description:
            "Run experiment",
          expectedOutcome:
            "Positive result",
          createdAt:
            new Date()
        },
        "Reality contradicted expectation"
      );

    expect(completed.actualOutcome)
      .toBe(
        "Reality contradicted expectation"
      );

    expect(completed.success)
      .toBeUndefined();
  });

});