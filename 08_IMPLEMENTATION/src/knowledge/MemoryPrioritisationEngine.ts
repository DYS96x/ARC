import { MemoryEvolutionEngine } from "./MemoryEvolutionEngine";


export interface MemoryPriority {

  id: string;

  strength: number;

  priority:
    "high" |
    "medium" |
    "low";

}



export class MemoryPrioritisationEngine {


  private evolution:
    MemoryEvolutionEngine;


  constructor() {

    this.evolution =
      new MemoryEvolutionEngine();

  }



  prioritise(
    memory: {
      id: string;
      confidence: number;
      confirmations: number;
      impact: number;
      age: number;
    }
  ): MemoryPriority {


    const strength =
      this.evolution.calculateStrength(
        memory
      );


    let priority:
      "high" |
      "medium" |
      "low";


    if (strength >= 0.8) {

      priority = "high";

    } else if (strength >= 0.5) {

      priority = "medium";

    } else {

      priority = "low";

    }



    return {

      id:
        memory.id,

      strength,

      priority

    };

  }


}