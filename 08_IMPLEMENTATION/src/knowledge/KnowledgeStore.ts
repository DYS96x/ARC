import { Knowledge } from "./Knowledge";

export class KnowledgeStore {
  private knowledge: Map<string, Knowledge>;

  constructor() {
    this.knowledge = new Map();
  }

  add(item: Knowledge): void {
    this.knowledge.set(item.id, item);
  }

  get(id: string): Knowledge | undefined {
    return this.knowledge.get(id);
  }

  getAll(): Knowledge[] {
    return Array.from(this.knowledge.values());
  }

  count(): number {
    return this.knowledge.size;
  }
}