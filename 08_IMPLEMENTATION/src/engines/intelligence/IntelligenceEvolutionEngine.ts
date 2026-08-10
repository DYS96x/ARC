import { PatternEvolutionEngine } from "../../knowledge/patterns/PatternEvolutionEngine";


export class IntelligenceEvolutionEngine {


  private patternEvolution =
    new PatternEvolutionEngine();


  evolve(
    pattern: {
      confidence: number;
    },
    validation: string
  ) {


    if (validation === "confirmed") {

      return this.patternEvolution.strengthen(
        pattern as any,
        0.2
      );

    }


    if (validation === "invalidated") {

      return this.patternEvolution.weaken(
        pattern as any,
        0.2
      );

    }


    return pattern;

  }


}