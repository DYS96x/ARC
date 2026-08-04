import { IntelligenceEngine } from "./IntelligenceEngine";


describe("Intelligence Engine", () => {


  it("creates intelligence from validated knowledge", () => {

    const engine =
      new IntelligenceEngine();


    const output =
      engine.generateFromKnowledge({

        id: "KNOW-001",

        type: "rule",

        title:
          "Reliable pattern rule",

        description:
          "Pattern validated through reality",

        source:
          "Pattern Evolution",

        confidence:
          0.9,

        createdAt:
          new Date(),

        updatedAt:
          new Date(),

        relationships: []

      });


    expect(output.recommendation)
      .toBe(
        "Knowledge supports action"
      );


    expect(output.confidence)
      .toBe(0.9);


  });


});