export interface IntelligenceState {

  status: string;

  confidence: number;

}



export class ARCIntelligenceStateEngine {


  private state: IntelligenceState;



  constructor() {

    this.state = {

      status: "INITIALISING",

      confidence: 0

    };

  }



  updateState(

    status: string,

    confidence: number

  ): IntelligenceState {


    this.state = {

      status,

      confidence

    };


    return this.state;

  }



  getState():

  IntelligenceState {

    return this.state;

  }


}