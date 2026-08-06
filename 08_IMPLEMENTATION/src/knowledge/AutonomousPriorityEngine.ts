export interface ImprovementPriority {


  system: string;

  reason: string;

  priority: number;


}



export class AutonomousPriorityEngine {


  private priorities:
    ImprovementPriority[];



  constructor() {

    this.priorities = [];

  }



  prioritise(

    system: string,

    reason: string,

    priority: number

  ): ImprovementPriority {


    const result: ImprovementPriority = {


      system,

      reason,

      priority


    };


    this.priorities.push(
      result
    );


    return result;


  }



  getPriorities():

    ImprovementPriority[] {

    return this.priorities;

  }



  findBySystem(

    system: string

  ): ImprovementPriority[] {


    return this.priorities.filter(

      priority =>

        priority.system === system

    );


  }


}