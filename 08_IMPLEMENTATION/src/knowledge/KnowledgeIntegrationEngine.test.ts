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

});