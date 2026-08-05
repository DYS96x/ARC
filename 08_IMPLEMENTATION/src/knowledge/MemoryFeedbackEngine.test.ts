import { OutcomeEngine } from "./OutcomeEngine";


describe("Outcome Engine", () => {


  it("creates outcomes from completed actions", () => {


    const engine =
      new OutcomeEngine();


    const outcome =
      engine.createFromAction({

        id:
          "ACTION-001",

        decisionId:
          "DECISION-001",

        description:
          "Run experiment",

        expectedOutcome:
          "Positive result",

        actualOutcome:
          "Reality confirmed",

        success:
          true,

        createdAt:
          new Date()

      });



    expect(
      outcome.actionId
    )
    .toBe("ACTION-001");


    expect(
      outcome.success
    )
    .toBe(true);


  });


});