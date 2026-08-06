export interface IntelligencePriority {

  objective: string;

  priority: number;

}



export class ARCIntelligencePriorityEngine {


  private priorities: IntelligencePriority[];



  constructor() {

    this.priorities = [];

  }



  addPriority(

    objective: string,

    priority: number

  ): IntelligencePriority {


    const item: IntelligencePriority = {

      objective,

      priority

    };


    this.priorities.push(item);


    return item;

  }



  getPriorities():

    IntelligencePriority[] {

    return this.priorities;

  }



  getHighestPriority():

    IntelligencePriority | undefined {


    if (this.priorities.length === 0) {

      return undefined;

    }



    return this.priorities.reduce(

      (highest, current) =>

        current.priority > highest.priority

          ? current

          : highest

    );


  }


}