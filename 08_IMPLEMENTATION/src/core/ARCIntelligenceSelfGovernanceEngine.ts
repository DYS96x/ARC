export interface GovernanceRule {

  rule: string;

  priority: number;

}


export class ARCIntelligenceSelfGovernanceEngine {


  private rules: GovernanceRule[];


  constructor() {

    this.rules = [];

  }


  addRule(

    rule: string,

    priority: number

  ): GovernanceRule {


    const governanceRule: GovernanceRule = {

      rule,

      priority

    };


    this.rules.push(
      governanceRule
    );


    return governanceRule;

  }


  evaluateDecision(

    rule: string

  ): GovernanceRule | undefined {


    return this.rules.find(

      item => item.rule === rule

    );

  }


  getRules():

  GovernanceRule[] {

    return this.rules;

  }


}