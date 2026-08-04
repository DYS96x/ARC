import { Signal } from "./Signal";
import { Decision } from "./Decision";


export class DecisionEngine {


  createFromSignal(
    signal: Signal
  ): Decision {

    return {

      id: `DECISION-${Date.now()}`,

      signalId: signal.id,

      description:
        `Decision created from ${signal.source}`,

      confidence:
        signal.confidence,

      impact:
        signal.importance,

      risk:
        1 - signal.confidence,

      expectedOutcome:
        "Requires validation through reality",

      createdAt:
        new Date()

    };

  }


  evaluate(
    decision: Decision
  ): string {


    if (
      decision.confidence >= 0.8 &&
      decision.risk <= 0.2
    ) {

      return "approved";

    }


    if (
      decision.confidence >= 0.5
    ) {

      return "review";

    }


    return "uncertain";

  }

}