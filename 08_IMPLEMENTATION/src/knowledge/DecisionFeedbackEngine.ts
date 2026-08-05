export class DecisionFeedbackEngine {


  private feedback: any[];



  constructor() {

    this.feedback = [];

  }



  analyse(
    pattern: any
  ) {


    const recommendation = {


      id:
        crypto.randomUUID(),


      pattern,


      improvement:
        true,


      generated:
        true


    };


    this.feedback.push(
      recommendation
    );


    return recommendation;

  }



  getFeedback() {

    return this.feedback;

  }


}