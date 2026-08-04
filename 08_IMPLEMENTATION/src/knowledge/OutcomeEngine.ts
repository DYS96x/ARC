import { Action } from "./Action";
import { Outcome } from "./Outcome";


export class OutcomeEngine {


  createFromAction(
    action: Action
  ): Outcome {

    return {

      id: `OUTCOME-${Date.now()}`,

      actionId:
        action.id,

      result:
        action.actualOutcome ??
        "Awaiting reality feedback",

      success:
        action.success ?? false,

      impact:
        action.success ? 1 : 0,

      learning:
        action.learning ??
        "No learning recorded",

      createdAt:
        new Date()

    };

  }



  evaluate(
    outcome: Outcome
  ): string {

    if (
      outcome.success &&
      outcome.impact >= 0.8
    ) {
      return "validated";
    }


    if (
      outcome.impact >= 0.4
    ) {
      return "partial";
    }


    return "needs-review";

  }

}