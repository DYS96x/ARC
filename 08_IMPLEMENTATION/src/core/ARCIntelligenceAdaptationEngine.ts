export interface AdaptiveRule {

  source: string;

  adjustment: number;

  reason: string;

}


export class ARCIntelligenceAdaptationEngine {


  private rules: AdaptiveRule[];


  constructor() {

    this.rules = [];

  }


  createAdaptation(

    source: string,

    adjustment: number,

    reason: string

  ): AdaptiveRule {


    const rule: AdaptiveRule = {

      source,

      adjustment,

      reason

    };


    this.rules.push(rule);


    return rule;

  }


  getAdaptations():

  AdaptiveRule[] {

    return this.rules;

  }


  getLatestAdaptation():

  AdaptiveRule | undefined {

    return this.rules[
      this.rules.length - 1
    ];

  }


}