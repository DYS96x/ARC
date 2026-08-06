export interface RealityFeedback {


  action: string;

  outcome: string;

  success: boolean;


}



export class RealityFeedbackEngine {


  private feedback:
    RealityFeedback[];



  constructor() {

    this.feedback = [];

  }



  record(

    action: string,

    outcome: string,

    success: boolean

  ): RealityFeedback {


    const result: RealityFeedback = {


      action,

      outcome,

      success


    };


    this.feedback.push(
      result
    );


    return result;


  }



  getFeedback():

    RealityFeedback[] {

    return this.feedback;

  }



  findByAction(

    action: string

  ): RealityFeedback[] {


    return this.feedback.filter(

      feedback =>

        feedback.action === action

    );


  }


}