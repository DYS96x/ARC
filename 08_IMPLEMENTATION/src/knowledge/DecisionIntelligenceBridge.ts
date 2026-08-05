import { DecisionEngine } from "./DecisionEngine";
import { DecisionIntelligenceEngine } from "./DecisionIntelligenceEngine";
import { Decision } from "./Decision";


export class DecisionIntelligenceBridge {


  private intelligence:
    DecisionIntelligenceEngine;


  private decisions:
    DecisionEngine;



  constructor() {

    this.intelligence =
      new DecisionIntelligenceEngine();


    this.decisions =
      new DecisionEngine();

  }



  evaluateDecision(
    decision: Decision,
    context: {
      averageConfidence: number;
      averageImpact: number;
      relevantMemories: import("./Memory").Memory[];
    }
  ) {


    const recommendation =
      this.intelligence.evaluate(
        decision.description,
        context
      );



    const enrichedDecision = {

      ...decision,

      confidence:
        recommendation.confidence,

      impact:
        recommendation.score,

      risk:
        1 - recommendation.confidence

    };



    return {

      recommendation,

      result:
        this.decisions.evaluate(
          enrichedDecision
        )

    };

  }


}