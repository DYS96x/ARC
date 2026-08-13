import { Decision } from "./Decision";
import { Action } from "./Action";

export class ActionEngine {

  createFromDecision(
    decision: Decision
  ): Action {

    return {
      id: `ACTION-${Date.now()}`,
      decisionId: decision.id,
      description:
        `Action proposed from decision: ${decision.description}`,
      expectedOutcome:
        decision.expectedOutcome,
      createdAt:
        new Date()
    };
  }

  complete(
    action: Action,
    outcome: string
  ): Action {

    return {
      ...action,
      actualOutcome:
        outcome,
      learning:
        "Reality observation recorded; validation pending",
      completedAt:
        new Date()
    };
  }
}