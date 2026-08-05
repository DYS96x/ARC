import { Memory } from "./Memory";
import { MemoryEvolutionEngine } from "./MemoryEvolutionEngine";
import { MemoryFeedbackEngine } from "./MemoryFeedbackEngine";


export interface MemoryLearningResult {

  memory: Memory;

  strength: number;

}



export class MemoryLearningEngine {


  private feedback:
    MemoryFeedbackEngine;


  private evolution:
    MemoryEvolutionEngine;



  constructor() {

    this.feedback =
      new MemoryFeedbackEngine();


    this.evolution =
      new MemoryEvolutionEngine();

  }



  learn(
    memory: Memory,
    outcome: {
      success: boolean;
    }
  ): MemoryLearningResult {


    const updatedMemory =
      this.feedback.applyOutcome(
        memory,
        outcome
      );


    const strength =
      this.evolution.calculateStrength({

        confidence:
          updatedMemory.confidence,

        confirmations:
          updatedMemory.confirmations,

        impact:
          updatedMemory.impact,

        age:
          0

      });



    return {

      memory:
        updatedMemory,

      strength

    };

  }


}