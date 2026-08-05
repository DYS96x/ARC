import { Outcome } from "./Outcome";
import { MemoryFeedbackEngine } from "./MemoryFeedbackEngine";
import { Memory } from "./Memory";


export class OutcomeLearningEngine {


  private feedback:
    MemoryFeedbackEngine;



  constructor() {

    this.feedback =
      new MemoryFeedbackEngine();

  }



  learnFromOutcome(
    memory: Memory,
    outcome: Outcome
  ): Memory {


    return this.feedback.applyOutcome(
      memory,
      {
        success:
          outcome.success
      }
    );

  }



  calculateLearningImpact(
    outcome: Outcome
  ): number {


    if (
      outcome.success
    ) {

      return outcome.impact;

    }


    return outcome.impact * 0.5;

  }


}