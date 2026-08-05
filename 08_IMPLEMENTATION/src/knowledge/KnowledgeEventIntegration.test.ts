import { EventBus } from "../core/events/EventBus";
import { KnowledgeIntegrationEngine } from "./KnowledgeIntegrationEngine";


describe("Knowledge Event Integration", () => {


  it("emits event when knowledge is created", () => {


    const bus =
      new EventBus();


    let received = false;


    bus.subscribe(
      "knowledge.created",
      () => {

        received = true;

      }
    );


    const engine =
      new KnowledgeIntegrationEngine(bus);


    engine.createLearningFromOutcome({

      id:
        "OUTCOME-001",

      actionId:
        "ACTION-001",

      result:
        "System improved",

      success:
        true,

      impact:
        0.9,

      learning:
        "Improvement validated through reality",

      createdAt:
        new Date()

    });


    expect(received)
      .toBe(true);


  });


});