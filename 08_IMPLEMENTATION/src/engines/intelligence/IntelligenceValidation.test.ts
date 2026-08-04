import { IntelligenceEngine } from "./IntelligenceEngine";


describe("Intelligence Validation", () => {


  it("validates intelligence against successful reality outcome", () => {

    const engine =
      new IntelligenceEngine();


    const validation =
      engine.validateOutcome(
        {
          id: "INTEL-001",

          request:
            "Analyse knowledge",

          recommendation:
            "Knowledge supports action",

          confidence:
            0.8,

          createdAt:
            new Date()
        },
        {
          id: "OUTCOME-001",

          actionId:
            "ACTION-001",

          result:
            "System improved",

          success:
            true,

          impact:
            1,

          learning:
            "Recommendation validated through reality",

          createdAt:
            new Date()
        }
      );


    expect(validation)
      .toBe("confirmed");

  });


});