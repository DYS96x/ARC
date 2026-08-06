export interface IntelligenceLearning {

  capability: string;

  result: string;

  confidence: number;

}



export class ARCIntelligenceSelfLearningEngine {


  private learnings: IntelligenceLearning[];



  constructor() {

    this.learnings = [];

  }



  recordLearning(

    capability: string,

    result: string,

    confidence: number

  ): IntelligenceLearning {


    const learning: IntelligenceLearning = {

      capability,

      result,

      confidence

    };


    this.learnings.push(learning);


    return learning;

  }



  getLearnings():

  IntelligenceLearning[] {

    return this.learnings;

  }


}