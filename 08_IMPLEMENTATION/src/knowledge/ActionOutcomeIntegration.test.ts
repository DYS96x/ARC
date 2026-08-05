import { ActionOutcomeIntegration } from "./ActionOutcomeIntegration";


describe("Action Outcome Integration", () => {


  it("feeds reality outcomes back into memory learning", () => {


    const engine =
      new ActionOutcomeIntegration();



    const result =
      engine.completeAction(

        {

          id:
            "ACTION-001",

          decisionId:
            "DECISION-001",

          description:
            "Run experiment",

          expectedOutcome:
            "Positive",

          createdAt:
            new Date()

        },

        "Reality confirmed",

        {

          id:
            "MEM-001",

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
      result.outcome.success
    )
    .toBe(true);



    expect(
      result.learning.memory.confirmations
    )
    .toBe(2);


  });


});