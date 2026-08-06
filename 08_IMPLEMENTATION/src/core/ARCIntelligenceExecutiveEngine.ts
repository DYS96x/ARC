export interface ExecutiveObjective {

  objective: string;

  priority: number;

  status: "PENDING" | "EXECUTED";

}


export class ARCIntelligenceExecutiveEngine {


  private objectives: ExecutiveObjective[];


  constructor() {

    this.objectives = [];

  }


  addObjective(

    objective: string,

    priority: number

  ): ExecutiveObjective {


    const item: ExecutiveObjective = {

      objective,

      priority,

      status: "PENDING"

    };


    this.objectives.push(item);


    return item;

  }



  executeNextObjective():

  ExecutiveObjective | undefined {


    const next =

      this.objectives

      .sort(

        (a, b) =>

          b.priority - a.priority

      )[0];



    if (!next) {

      return undefined;

    }



    next.status = "EXECUTED";


    return next;

  }



  getObjectives():

  ExecutiveObjective[] {

    return this.objectives;

  }


}