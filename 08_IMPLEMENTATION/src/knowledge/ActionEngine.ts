import { Decision } from "./Decision";
import { Action } from "./Action";


export class ActionEngine {


  createFromDecision(
    decision: Decision
  ): Action {

    return {

      id: `ACTION-${Date.now()}`,

      decisionId:
        decision.id,

      description:
        `Execute decision: ${decision.description}`,

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

      success:
        true,

      learning:
        "Outcome recorded from reality",

      completedAt:
        new Date()

    };

  }


}