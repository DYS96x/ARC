import { Relationship } from "../Relationship";
import { Pattern } from "./Pattern";

export class PatternEngine {

  discover(
    relationships: Relationship[]
  ): Pattern | null {

    if (relationships.length < 2) {
      return null;
    }

    return {
      id: "PATTERN-001",
      name: "Emerging Relationship Pattern",
      relationships: relationships.map(
        relationship => relationship.id
      ),
      confidence:
        relationships.reduce(
          (total, relationship) =>
            total + relationship.strength,
          0
        ) / relationships.length,
      createdAt: new Date()
    };
  }
}