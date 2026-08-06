export interface CapabilityEvaluation {

  capability: string;

  score: number;

  status: string;

}


export class ARCIntelligenceSelfEvaluationEngine {


  private evaluations: CapabilityEvaluation[];


  constructor() {

    this.evaluations = [];

  }



  evaluateCapability(

    capability: string,

    score: number

  ): CapabilityEvaluation {


    let status = "OPTIMAL";


    if (score < 0.7) {

      status = "NEEDS IMPROVEMENT";

    }


    const evaluation: CapabilityEvaluation = {

      capability,

      score,

      status

    };


    this.evaluations.push(evaluation);


    return evaluation;

  }



  getEvaluations():

  CapabilityEvaluation[] {

    return this.evaluations;

  }


}