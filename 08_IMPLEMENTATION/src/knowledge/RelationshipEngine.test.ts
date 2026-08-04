import { RelationshipEngine } from "./RelationshipEngine";
import { Relationship } from "./Relationship";


describe("Relationship Engine", () => {

  const relationship: Relationship = {
    id: "REL-001",
    from: "Observation",
    to: "Knowledge",
    type: "creates",
    strength: 0.5,
    createdAt: new Date()
  };


  it("strengthens relationships through feedback", () => {

    const engine = new RelationshipEngine();

    const result = engine.strengthen(
      relationship,
      0.3
    );

    expect(result.strength)
      .toBe(0.8);

  });


  it("weakens relationships when reality disagrees", () => {

    const engine = new RelationshipEngine();

    const result = engine.weaken(
      relationship,
      0.2
    );

    expect(result.strength)
      .toBe(0.3);

  });


  it("evaluates relationship maturity", () => {

    const engine = new RelationshipEngine();

    expect(
      engine.evaluate(relationship)
    )
    .toBe("developing");

  });

});