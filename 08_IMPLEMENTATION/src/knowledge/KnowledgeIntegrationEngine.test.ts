import { KnowledgeIntegrationEngine } from "./KnowledgeIntegrationEngine";
import { KnowledgeType } from "./KnowledgeType";


describe("Knowledge Integration Engine", () => {


  it("creates relationships between knowledge objects", () => {

    const engine =
      new KnowledgeIntegrationEngine();


    const relationship =
      engine.createRelationship(
        {
          id: "KNOW-001",
          type: KnowledgeType.Observation,
          title: "Reality signal",
          description: "Observed reality input",
          source: "Observation Engine",
          confidence: 0.8,
          createdAt: new Date(),
          updatedAt: new Date(),
          relationships: []
        },
        {
          id: "KNOW-002",
          type: KnowledgeType.Learning,
          title: "New understanding",
          description: "Learning created from evidence",
          source: "Knowledge System",
          confidence: 0.7,
          createdAt: new Date(),
          updatedAt: new Date(),
          relationships: []
        }
      );


    expect(relationship.from)
      .toBe("KNOW-001");


    expect(relationship.to)
      .toBe("KNOW-002");

  });



  it("creates patterns from relationships", () => {

    const engine =
      new KnowledgeIntegrationEngine();


    const pattern =
      engine.createPattern([
        {
          id: "REL-001",
          from: "A",
          to: "B",
          type: "connects",
          strength: 0.8,
          createdAt: new Date()
        },
        {
          id: "REL-002",
          from: "B",
          to: "C",
          type: "connects",
          strength: 0.6,
          createdAt: new Date()
        }
      ]);


    expect(pattern?.confidence)
      .toBe(0.7);

  });



  it("creates learning knowledge from outcome", () => {

    const engine =
      new KnowledgeIntegrationEngine();


    const learning =
      engine.createLearningFromOutcome({
        id: "OUTCOME-001",
        actionId: "ACTION-001",
        result: "System improved",
        success: true,
        impact: 0.9,
        learning: "Improvement validated through reality",
        createdAt: new Date()
      });


    expect(learning.type)
      .toBe(KnowledgeType.Learning);


    expect(learning.source)
      .toBe("Outcome Engine");


    expect(learning.confidence)
      .toBe(0.9);

  });



  it("creates rule knowledge from validated patterns", () => {

    const engine =
      new KnowledgeIntegrationEngine();


    const rule =
      engine.createRuleFromPattern({
        id: "PATTERN-001",
        name: "Repeated behaviour",
        relationships: [
          "REL-001",
          "REL-002"
        ],
        confidence: 0.9,
        createdAt: new Date()
      });


    expect(rule.type)
      .toBe(KnowledgeType.Rule);


    expect(rule.source)
      .toBe("Pattern Evolution");


    expect(rule.confidence)
      .toBe(0.9);

  });

});