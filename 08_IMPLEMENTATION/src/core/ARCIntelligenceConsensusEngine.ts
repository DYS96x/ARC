export interface IntelligenceSignal {

  source: string;

  confidence: number;

  recommendation: string;

}



export class ARCIntelligenceConsensusEngine {


  private signals: IntelligenceSignal[];



  constructor() {

    this.signals = [];

  }



  addSignal(

    source: string,

    confidence: number,

    recommendation: string

  ): IntelligenceSignal {


    const signal = {

      source,

      confidence,

      recommendation

    };


    this.signals.push(signal);


    return signal;

  }



  getConsensus():

  IntelligenceSignal | undefined {


    if (this.signals.length === 0) {

      return undefined;

    }


    return this.signals.reduce(

      (highest, current) =>

        current.confidence >

        highest.confidence

          ? current

          : highest

    );


  }



  getSignals():

  IntelligenceSignal[] {

    return this.signals;

  }


}