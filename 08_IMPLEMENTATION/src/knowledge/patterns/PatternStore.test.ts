import { PatternStore } from "./PatternStore";

describe("Pattern Store", () => {

  it("stores discovered patterns", () => {

    const store = new PatternStore();

    store.add({
      id: "PATTERN-001",
      name: "User behaviour pattern",
      relationships: [
        "REL-001",
        "REL-002"
      ],
      confidence: 0.8,
      createdAt: new Date()
    });

    expect(
      store.count()
    ).toBe(1);

  });

});