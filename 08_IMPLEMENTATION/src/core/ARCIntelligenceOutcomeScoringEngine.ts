export interface IntelligenceOutcomeScore {


  execution: string;

  outcome: string;

  score: number;


}



export class ARCIntelligenceOutcomeScoringEngine {


  private outcomes:
    IntelligenceOutcomeScore[];



  constructor() {

    this.outcomes = [];

  }



  scoreOutcome(

    execution: string,

    outcome: string,

    score: number

  ): IntelligenceOutcomeScore {


    const result: IntelligenceOutcomeScore = {


      execution,

      outcome,

      score


    };


    this.outcomes.push(
      result
    );


    return result;


  }



  getOutcomes():

    IntelligenceOutcomeScore[] {

    return this.outcomes;

  }



  findByExecution(

    execution: string

  ): IntelligenceOutcomeScore[] {


    return this.outcomes.filter(

      outcome =>

        outcome.execution === execution

    );


  }


}