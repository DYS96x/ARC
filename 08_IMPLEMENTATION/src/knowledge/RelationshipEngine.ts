import { Relationship } from "./Relationship";

export class RelationshipEngine {

  strengthen(
    relationship: Relationship,
    amount: number
  ): Relationship {

    return {
      ...relationship,
      strength: Math.min(
        relationship.strength + amount,
        1
      )
    };
  }


  weaken(
    relationship: Relationship,
    amount: number
  ): Relationship {

    return {
      ...relationship,
      strength: Math.max(
        relationship.strength - amount,
        0
      )
    };
  }


  evaluate(
    relationship: Relationship
  ): string {

    if (relationship.strength >= 0.8) {
      return "strong";
    }

    if (relationship.strength >= 0.4) {
      return "developing";
    }

    return "weak";
  }
}