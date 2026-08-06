export interface Consequence {


  trigger: string;

  result: string;

  severity: number;


}



export class ConsequenceEngine {


  private consequences:
    Consequence[];



  constructor() {

    this.consequences = [];

  }



  evaluate(
    trigger: string,
    result: string,
    severity: number
  ) {


    const consequence: Consequence = {

      trigger,

      result,

      severity

    };


    this.consequences.push(
      consequence
    );


    return consequence;

  }



  getConsequences() {

    return this.consequences;

  }



  findByTrigger(
    trigger: string
  ) {


    return this.consequences.filter(

      consequence =>

        consequence.trigger === trigger

    );


  }


}