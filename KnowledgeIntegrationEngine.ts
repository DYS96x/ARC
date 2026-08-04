import { Knowledge } from "./Knowledge";
import { KnowledgeType } from "./KnowledgeType";
import { Outcome } from "./Outcome";
import { Relationship } from "./Relationship";
import { Pattern } from "./patterns/Pattern";


export class KnowledgeIntegrationEngine {

  createRelationship(
    knowledgeA: Knowledge,
    knowledgeB: Knowledge
  ): Relationship {

    return {
      id: `REL-${Date.now()}`,
      from: knowledgeA.id,
      to: knowledgeB.id,
      type: "connected",
      strength: 0.5,
      createdAt: new Date()
    };
  }


  createPattern(
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
      name: "Integrated knowledge pattern",
      relationships: relationships.map(
        relationship => relationship.id
      ),
      confidence,
      createdAt: new Date()
    };
  }


  createLearningFromOutcome(
    outcome: Outcome
  ): Knowledge {

    return {

      id: `KNOW-${Date.now()}`,

      type: KnowledgeType.Learning,

      title:
        "Learning generated from outcome",

      description:
        outcome.learning,

      source:
        "Outcome Engine",

      confidence:
        outcome.impact,

      createdAt:
        new Date(),

      updatedAt:
        new Date(),

      relationships: []

    };

  }

}