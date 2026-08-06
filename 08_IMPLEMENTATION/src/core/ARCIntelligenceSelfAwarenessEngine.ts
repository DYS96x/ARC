export interface CapabilityAwareness {

  capability: string;

  confidence: number;

  status: string;

}



export class ARCIntelligenceSelfAwarenessEngine {


  private capabilities: CapabilityAwareness[];



  constructor() {

    this.capabilities = [];

  }



  recordCapability(

    capability: string,

    confidence: number,

    status: string

  ): CapabilityAwareness {


    const awareness: CapabilityAwareness = {

      capability,

      confidence,

      status

    };


    this.capabilities.push(awareness);


    return awareness;

  }



  getCapabilities():

  CapabilityAwareness[] {

    return this.capabilities;

  }


}