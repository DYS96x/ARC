export interface AutonomousObjective {

  objective: string;

  priority: number;

}


export class ARCIntelligenceSelfDirectionEngine {


  private objectives: AutonomousObjective[];


  constructor() {

    this.objectives = [];

  }


  addObjective(

    objective: string,

    priority: number

  ): AutonomousObjective {


    const item: AutonomousObjective = {

      objective,

      priority

    };


    this.objectives.push(item);


    return item;

  }



  selectNextObjective():

  AutonomousObjective | undefined {


    if (this.objectives.length === 0) {

      return undefined;

    }


    return this.objectives

      .sort(

        (a, b) =>

          b.priority - a.priority

      )[0];


  }



  getObjectives():

  AutonomousObjective[] {

    return this.objectives;

  }


}