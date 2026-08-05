import { DecisionIntelligenceBridge } from "./DecisionIntelligenceBridge";


describe("Decision Intelligence Bridge", () => {


  it("uses memory intelligence before decision evaluation", () => {


    const bridge =
      new DecisionIntelligenceBridge();



    const result =
      bridge.evaluateDecision(

        {
          id:
            "DECISION-001",

          signalId:
            "SIGNAL-001",

          description:
            "Choose action",

          confidence:
            0.9,

          impact:
            0.8,

          risk:
            0.1,

          expectedOutcome:
            "Pending",

          createdAt:
            new Date()

        },

        {
          relevantMemories:
            [],

          averageConfidence:
            0.9,

          averageImpact:
            0.8

        }

      );



    expect(
      result.recommendation.confidence
    )
    .toBe(0.9);



    expect(
      result.result
    )
    .toBe("approved");


  });


});