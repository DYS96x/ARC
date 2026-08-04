import { Pattern } from "./patterns/Pattern";
import { Signal } from "./Signal";

export class SignalEngine {

  createFromPattern(
    pattern: Pattern
  ): Signal {

    return {
      id: `SIGNAL-${Date.now()}`,

      source: pattern.id,

      description: pattern.name,

      strength: pattern.confidence,

      confidence: pattern.confidence,

      importance: pattern.confidence,

      createdAt: new Date()
    };

  }


  evaluate(
    signal: Signal
  ): string {

    if (signal.importance >= 0.8) {
      return "high";
    }


    if (signal.importance >= 0.4) {
      return "medium";
    }


    return "low";

  }

}