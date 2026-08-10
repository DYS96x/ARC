export interface IntelligenceConstraint {

  rule: string;

  priority: number;

}


export class ARCIntelligenceConstraintEngine {


  private constraints: IntelligenceConstraint[];


  constructor() {

    this.constraints = [];

  }


  addConstraint(

    rule: string,

    priority: number

  ): IntelligenceConstraint {


    const constraint: IntelligenceConstraint = {

      rule,

      priority

    };


    this.constraints.push(
      constraint
    );


    return constraint;

  }


  findConstraint(

    rule: string

  ): IntelligenceConstraint | undefined {


    return this.constraints.find(

      item => item.rule === rule

    );

  }


  getConstraints():

  IntelligenceConstraint[] {

    return this.constraints;

  }


}
