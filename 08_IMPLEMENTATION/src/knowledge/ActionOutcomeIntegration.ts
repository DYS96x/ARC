import { ActionEngine } from "./ActionEngine";
import { Memory } from "./Memory";

export interface PendingRealityObservation {
  actionId: string;
  decisionId: string;
  expectedOutcome: string;
  actualOutcome: string;
  observedAt: Date;
}

export class ActionOutcomeIntegration {

  private actions:
    ActionEngine;

  constructor() {

    this.actions =
      new ActionEngine();
  }

  recordObservation(
    action: {
      id: string;
      decisionId: string;
      description: string;
      expectedOutcome: string;
      createdAt: Date;
    },
    result: string,
    memory: Memory
  ) {

    const completed =
      this.actions.complete(
        action,
        result
      );

    const observation:
      PendingRealityObservation = {
        actionId:
          completed.id,
        decisionId:
          completed.decisionId,
        expectedOutcome:
          completed.expectedOutcome,
        actualOutcome:
          completed.actualOutcome ??
          "No outcome recorded",
        observedAt:
          completed.completedAt ??
          new Date()
      };

    return {
      observation,
      memory
    };
  }
}