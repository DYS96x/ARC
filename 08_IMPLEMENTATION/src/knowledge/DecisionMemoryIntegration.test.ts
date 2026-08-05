import { DecisionMemoryIntegration } from "./DecisionMemoryIntegration";


describe("Decision Memory Integration", () => {


  it("builds decision context from memories", () => {


    const engine =
      new DecisionMemoryIntegration();



    const context =
      engine.buildContext([

        {

          id:
            "MEM-001",

          source:
            "Experience",

          content:
            "Action succeeded",

          confidence:
            0.9,

          confirmations:
            5,

          impact:
            0.8,

          createdAt:
            new Date()

        },

        {

          id:
            "MEM-002",

          source:
            "Experience",

          content:
            "Action succeeded again",

          confidence:
            0.7,

          confirmations:
            3,

          impact:
            0.6,

          createdAt:
            new Date()

        }

      ]);



    expect(
      context.relevantMemories.length
    )
    .toBe(2);



    expect(
      context.averageConfidence
    )
    .toBe(0.8);



    expect(
      context.averageImpact
    )
    .toBe(0.7);


  });


});