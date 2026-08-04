import { KnowledgeGraph } from "./KnowledgeGraph";
import { Relationship } from "./Relationship";

describe("Knowledge Graph", () => {
  it("stores and retrieves relationships", () => {
    const graph = new KnowledgeGraph();

    const relationship: Relationship = {
      id: "REL-001",
      from: "OBSERVATION-001",
      to: "KNOWLEDGE-001",
      type: "creates",
      strength: 1,
      createdAt: new Date()
    };

    graph.addRelationship(relationship);

    const result = graph.getRelationship("REL-001");

    expect(result).toEqual(relationship);
  });

  it("counts relationships inside the graph", () => {
    const graph = new KnowledgeGraph();

    graph.addRelationship({
      id: "REL-001",
      from: "A",
      to: "B",
      type: "supports",
      strength: 0.8,
      createdAt: new Date()
    });

    graph.addRelationship({
      id: "REL-002",
      from: "B",
      to: "C",
      type: "evolves",
      strength: 0.9,
      createdAt: new Date()
    });

    expect(graph.count()).toBe(2);
  });
});