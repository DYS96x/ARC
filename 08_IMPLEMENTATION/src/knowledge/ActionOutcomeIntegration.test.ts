import { ActionOutcomeIntegration } from "./ActionOutcomeIntegration";

describe("Action Outcome Integration", () => {

  it("feeds successful reality outcomes back into memory learning", () => {

    const engine =
      new ActionOutcomeIntegration();

    const result =
      engine.completeAction(
        {
          id: "ACTION-001",
          decisionId: "DECISION-001",
          description:
            "Run experiment",
          expectedOutcome:
            "Positive",
          createdAt:
            new Date()
        },
        "Reality confirmed",
        true,
        {
          id: "MEM-001",
          source:
            "Decision",
          content:
            "Previous action",
          confidence:
            0.8,
          confirmations:
            1,
          impact:
            0.8,
          createdAt:
            new Date()
        }
      );

    expect(result.outcome.success)
      .toBe(true);

    expect(
      result.learning.memory.confirmations
    )
      .toBe(2);
  });

  it("preserves failed reality outcomes for learning", () => {

    const engine =
      new ActionOutcomeIntegration();

    const result =
      engine.completeAction(
        {
          id: "ACTION-002",
          decisionId: "DECISION-002",
          description:
            "Run experiment",
          expectedOutcome:
            "Positive",
          createdAt:
            new Date()
        },
        "Reality contradicted expectation",
        false,
        {
          id: "MEM-002",
          source:
            "Decision",
          content:
            "Previous action",
          confidence:
            0.8,
          confirmations:
            1,
          impact:
            0.8,
          createdAt:
            new Date()
        }
      );

    expect(result.outcome.success)
      .toBe(false);

    expect(result.outcome.learning)
      .toBe(
        "Action requires adjustment"
      );
  });

});
