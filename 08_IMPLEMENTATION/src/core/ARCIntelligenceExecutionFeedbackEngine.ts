export interface ExecutionFeedback {

  objective: string;

  success: boolean;

  confidence: number;

}


export class ARCIntelligenceExecutionFeedbackEngine {


  private feedback: ExecutionFeedback[];


  constructor() {

    this.feedback = [];

  }



  recordOutcome(

    objective: string,

    success: boolean,

    confidence: number

  ): ExecutionFeedback {


    const result: ExecutionFeedback = {

      objective,

      success,

      confidence

    };


    this.feedback.push(result);


    return result;

  }



  getFeedback():

  ExecutionFeedback[] {

    return this.feedback;

  }


}