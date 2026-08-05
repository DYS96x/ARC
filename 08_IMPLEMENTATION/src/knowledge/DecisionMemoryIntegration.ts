import { Memory } from "./Memory";


export interface DecisionMemoryContext {

  relevantMemories: Memory[];

  averageConfidence: number;

  averageImpact: number;

}



export class DecisionMemoryIntegration {



  buildContext(
    memories: Memory[]
  ): DecisionMemoryContext {


    if (memories.length === 0) {

      return {

        relevantMemories: [],

        averageConfidence: 0,

        averageImpact: 0

      };

    }



    const confidenceTotal =
      memories.reduce(
        (total, memory) =>
          total + memory.confidence,
        0
      );



    const impactTotal =
      memories.reduce(
        (total, memory) =>
          total + memory.impact,
        0
      );



    return {

      relevantMemories:
        memories,

      averageConfidence:
        Number(
          (
            confidenceTotal /
            memories.length
          ).toFixed(2)
        ),


      averageImpact:
        Number(
          (
            impactTotal /
            memories.length
          ).toFixed(2)
        )

    };

  }


}