export interface CorrectionAction {

  capability: string;

  issue: string;

  priority: number;

}



export class ARCIntelligenceSelfCorrectionEngine {


  private corrections: CorrectionAction[];



  constructor() {

    this.corrections = [];

  }



  createCorrection(

    capability: string,

    issue: string,

    priority: number

  ): CorrectionAction {


    const correction: CorrectionAction = {

      capability,

      issue,

      priority

    };


    this.corrections.push(correction);


    return correction;

  }



  getCorrections():

  CorrectionAction[] {

    return this.corrections;

  }


}