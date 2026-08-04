import { Pattern } from "./Pattern";

export class PatternStore {
  private patterns: Map<string, Pattern>;

  constructor() {
    this.patterns = new Map();
  }

  add(pattern: Pattern): void {
    this.patterns.set(
      pattern.id,
      pattern
    );
  }

  get(id: string): Pattern | undefined {
    return this.patterns.get(id);
  }

  getAll(): Pattern[] {
    return Array.from(
      this.patterns.values()
    );
  }

  count(): number {
    return this.patterns.size;
  }
}