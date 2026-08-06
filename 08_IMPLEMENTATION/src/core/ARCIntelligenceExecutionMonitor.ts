export interface IntelligenceExecution {


  route: string;

  engines: string[];

  outcome: string;

  score: number;


}



export class ARCIntelligenceExecutionMonitor {


  private executions:
    IntelligenceExecution[];



  constructor() {

    this.executions = [];

  }



  recordExecution(

    route: string,

    engines: string[],

    outcome: string,

    score: number

  ): IntelligenceExecution {


    const execution: IntelligenceExecution = {


      route,

      engines,

      outcome,

      score


    };


    this.executions.push(
      execution
    );


    return execution;


  }



  getExecutions():

    IntelligenceExecution[] {

    return this.executions;

  }



  findByRoute(

    route: string

  ): IntelligenceExecution[] {


    return this.executions.filter(

      execution =>

        execution.route === route

    );


  }


}