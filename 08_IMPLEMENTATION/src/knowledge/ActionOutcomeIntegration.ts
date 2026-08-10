import { ActionEngine } from "./ActionEngine";
import { Outcome } from "./Outcome";
import { MemoryLearningEngine } from "./MemoryLearningEngine";
import { Memory } from "./Memory";

export class ActionOutcomeIntegration {

  private actions:
    ActionEngine;

  private learning:
    MemoryLearningEngine;

  constructor() {

    this.actions =
      new ActionEngine();

    this.learning =
      new MemoryLearningEngine();
  }

  completeAction(
    action: {
      id: string;
      decisionId: string;
      description: string;
      expectedOutcome: string;
      createdAt: Date;
    },
    result: string,
    success: boolean,
    memory: Memory
  ) {

    const completed =
      this.actions.complete(
        action,
        result,
        success
      );

    const outcome: Outcome = {
      id:
        `OUTCOME-${Date.now()}`,
      actionId:
        completed.id,
      result:
        completed.actualOutcome ??
        "No outcome recorded",
      success:
        completed.success ??
        false,
      impact:
        completed.success
          ? 0.8
          : 0.3,
      learning:
        completed.success
          ? "Action validated through reality"
          : "Action requires adjustment",
      createdAt:
        new Date()
    };

    const learningResult =
      this.learning.learn(
        {
          ...memory
        },
        {
          success:
            outcome.success
        }
      );

    return {
      outcome,
      learning:
        learningResult
    };
  }
}
