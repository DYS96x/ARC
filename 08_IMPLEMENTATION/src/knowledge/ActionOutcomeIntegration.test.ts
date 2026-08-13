import { ActionOutcomeIntegration } from "./ActionOutcomeIntegration";

describe("Action Outcome Integration", () => {

  it("records reality observation without declaring validation success", () => {

    const engine =
      new ActionOutcomeIntegration();

    const result =
      engine.recordObservation(
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

    expect(
      result.observation.actualOutcome
    )
      .toBe(
        "Reality confirmed"
      );

    expect(
      "success" in result.observation
    )
      .toBe(false);

    expect(
      result.memory.confirmations
    )
      .toBe(1);
  });

  it("records contradictory reality without weakening memory before validation", () => {

    const engine =
      new ActionOutcomeIntegration();

    const result =
      engine.recordObservation(
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

    expect(
      result.observation.actualOutcome
    )
      .toBe(
        "Reality contradicted expectation"
      );

    expect(
      result.memory.confidence
    )
      .toBe(0.8);

    expect(
      result.memory.confirmations
    )
      .toBe(1);
  });

});