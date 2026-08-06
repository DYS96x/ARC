export interface StrategicDecision {

  context: string;

  priority: number;

  approved: boolean;

  route: string;

  outcomeScore: number;

}



export class ARCStrategicIntelligenceSimulation {


  private decisions: StrategicDecision[];



  constructor() {

    this.decisions = [];

  }



  evaluateDecision(

    context: string,

    priority: number,

    approved: boolean,

    route: string,

    outcomeScore: number

  ): StrategicDecision {


    const decision: StrategicDecision = {


      context,

      priority,

      approved,

      route,

      outcomeScore


    };


    this.decisions.push(decision);


    return decision;


  }



  getBestDecision():

    StrategicDecision | undefined {


    if (this.decisions.length === 0) {

      return undefined;

    }


    return this.decisions.reduce(

      (best, current) =>

        current.outcomeScore >

        best.outcomeScore

          ? current

          : best

    );


  }



  getDecisions():

    StrategicDecision[] {

    return this.decisions;

  }


}