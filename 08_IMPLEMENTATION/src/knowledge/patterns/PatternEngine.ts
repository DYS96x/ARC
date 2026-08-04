import { Relationship } from "../Relationship";
import { Pattern } from "./Pattern";

export class PatternEngine {

  discover(
    relationships: Relationship[]
  ): Pattern | null {

    if (relationships.length < 2) {
      return null;
    }

    const confidence =
      relationships.reduce(
        (total, relationship) =>
          total + relationship.strength,
        0
      ) / relationships.length;


    return {
      id: `PATTERN-${Date.now()}`,

      name:
        "Discovered relationship pattern",

      relationships:
        relationships.map(
          relationship => relationship.id
        ),

      confidence,

      createdAt:
        new Date()
    };
  }

}