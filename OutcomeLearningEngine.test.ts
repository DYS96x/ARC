import { OutcomeLearningEngine } from "./OutcomeLearningEngine";
import { Memory } from "./Memory";


describe("Outcome Learning Engine", () => {


  it("updates memory after successful outcome", () => {


    const engine =
      new OutcomeLearningEngine();



    const memory: Memory = {

      id:
        "MEMORY-001",

      confidence:
        0.8,

      confirmations:
        5,

      createdAt:
        new Date()

    };



    const updated =
      engine.learnFromOutcome(

        memory,

        {
          id:
            "OUTCOME-001",

          actionId:
            "ACTION-001",

          result:
            "Reality confirmed",

          success:
            true,

          impact:
            0.9,

          learning:
            "Decision validated",

          createdAt:
            new Date()
        }

      );



    expect(
      updated.confidence
    )
    .toBe(0.85);



    expect(
      updated.confirmations
    )
    .toBe(6);


  });


});