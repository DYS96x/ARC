export interface CorrectionProposal {

  capability: string;

  issue: string;

  priority: number;

}



export class ARCIntelligenceCorrectionProposalEngine {


  private corrections: CorrectionProposal[];



  constructor() {

    this.corrections = [];

  }



  createProposal(

    capability: string,

    issue: string,

    priority: number

  ): CorrectionProposal {


    const correction: CorrectionProposal = {

      capability,

      issue,

      priority

    };


    this.corrections.push(correction);


    return correction;

  }



  getProposals():

  CorrectionProposal[] {

    return this.corrections;

  }


}