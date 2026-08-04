import { Relationship } from "./Relationship";

export class KnowledgeGraph {
  private relationships: Map<string, Relationship>;

  constructor() {
    this.relationships = new Map();
  }

  addRelationship(
    relationship: Relationship
  ): void {
    this.relationships.set(
      relationship.id,
      relationship
    );
  }

  getRelationship(
    id: string
  ): Relationship | undefined {
    return this.relationships.get(id);
  }

  getAllRelationships(): Relationship[] {
    return Array.from(
      this.relationships.values()
    );
  }

  count(): number {
    return this.relationships.size;
  }
}