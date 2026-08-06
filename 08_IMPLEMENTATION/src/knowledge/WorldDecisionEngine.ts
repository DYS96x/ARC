export interface WorldDecision {


  situation: string;

  action: string;

  confidence: number;


}



export class WorldDecisionEngine {


  private decisions:
    WorldDecision[];



  constructor() {

    this.decisions = [];

  }



  evaluate(

    situation: string,

    action: string,

    confidence: number

  ): WorldDecision {



    const decision: WorldDecision = {


      situation,

      action,

      confidence


    };



    this.decisions.push(
      decision
    );



    return decision;


  }



  getDecisions(): WorldDecision[] {

    return this.decisions;

  }



  findBySituation(

    situation: string

  ): WorldDecision[] {


    return this.decisions.filter(

      decision =>

        decision.situation === situation

    );


  }


}