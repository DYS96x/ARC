import { Pattern } from "./Pattern";

export class PatternEvolutionEngine {

  strengthen(
    pattern: Pattern,
    amount: number
  ): Pattern {

    return {
      ...pattern,
      confidence: Math.min(
        pattern.confidence + amount,
        1
      )
    };
  }


  weaken(
    pattern: Pattern,
    amount: number
  ): Pattern {

    return {
      ...pattern,
      confidence: Math.max(
        pattern.confidence - amount,
        0
      )
    };
  }


  evaluate(
    pattern: Pattern
  ): string {

    if (pattern.confidence >= 0.8) {
      return "validated";
    }

    if (pattern.confidence >= 0.4) {
      return "developing";
    }

    return "uncertain";
  }

}