export interface ARCIntelligenceState {

  context: string;

  objective: string;

  confidence: number;

  selectedRoute: string;

  expectedOutcome: string;

  learningStatus: string;

}


export class ARCIntelligenceStateCoordinator {


  private state: ARCIntelligenceState;



  constructor() {

    this.state = {

      context: "",

      objective: "",

      confidence: 0,

      selectedRoute: "",

      expectedOutcome: "",

      learningStatus: ""

    };

  }



  updateState(

    state: ARCIntelligenceState

  ): ARCIntelligenceState {


    this.state = state;


    return this.state;

  }



  getState():

  ARCIntelligenceState {


    return this.state;

  }



  updateConfidence(

    confidence: number

  ): ARCIntelligenceState {


    this.state.confidence = confidence;


    return this.state;

  }


}