import { DecisionMemoryContext } from "./DecisionMemoryIntegration";


export interface DecisionRecommendation {

  option: string;

  score: number;

  confidence: number;

}



export class DecisionIntelligenceEngine {



  evaluate(
    option: string,
    context: DecisionMemoryContext
  ): DecisionRecommendation {



    const score =
      Number(
        (
          (context.averageConfidence * 0.6) +
          (context.averageImpact * 0.4)
        ).toFixed(2)
      );



    return {

      option,

      score,

      confidence:
        context.averageConfidence

    };


  }



}