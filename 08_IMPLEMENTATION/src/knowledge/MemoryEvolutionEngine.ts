export class MemoryEvolutionEngine {


  calculateStrength(
    memory: {
      confidence: number;
      confirmations: number;
      impact: number;
      age: number;
    }
  ): number {


    const strength =
      memory.confidence +
      (memory.confirmations * 0.02) +
      (memory.impact * 0.1) -
      (memory.age * 0.02);


    return Math.max(
      Math.min(strength, 1),
      0
    );

  }


}