import { Knowledge } from "./Knowledge";
import { KnowledgeStore } from "./KnowledgeStore";

export class KnowledgeService {
  constructor(
    private readonly store: KnowledgeStore
  ) {}

  record(item: Knowledge): Knowledge {
    this.store.add(item);

    return item;
  }

  find(id: string): Knowledge | undefined {
    return this.store.get(id);
  }

  all(): Knowledge[] {
    return this.store.getAll();
  }
}