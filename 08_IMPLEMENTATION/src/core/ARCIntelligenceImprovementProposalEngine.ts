export interface IntelligenceImprovementProposal {

  capability: string;

  issue: string;

  timestamp: number;

}


export class ARCIntelligenceImprovementProposalEngine {


  private improvements: IntelligenceImprovementProposal[];


  constructor() {

    this.improvements = [];

  }


  createProposal(

    capability: string,

    issue: string

  ): IntelligenceImprovementProposal {


    const improvement: IntelligenceImprovementProposal = {

      capability,

      issue,

      timestamp: Date.now()

    };


    this.improvements.push(
      improvement
    );


    return improvement;

  }


  getProposals():

  IntelligenceImprovementProposal[] {

    return this.improvements;

  }


}