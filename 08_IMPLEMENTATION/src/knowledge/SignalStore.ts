import { Signal } from "./Signal";

export class SignalStore {

  private signals: Map<string, Signal>;

  constructor() {
    this.signals = new Map();
  }


  add(
    signal: Signal
  ): void {

    this.signals.set(
      signal.id,
      signal
    );

  }


  get(
    id: string
  ): Signal | undefined {

    return this.signals.get(id);

  }


  getAll(): Signal[] {

    return Array.from(
      this.signals.values()
    );

  }


  count(): number {

    return this.signals.size;

  }

}