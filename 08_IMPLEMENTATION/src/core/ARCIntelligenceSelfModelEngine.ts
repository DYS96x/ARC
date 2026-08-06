export interface IntelligenceModel {

  system: string;

  confidence: number;

  state: string;

}


export class ARCIntelligenceSelfModelEngine {


  private models: IntelligenceModel[];


  constructor() {

    this.models = [];

  }


  createModel(

    system: string,

    confidence: number,

    state: string

  ): IntelligenceModel {


    const model: IntelligenceModel = {

      system,

      confidence,

      state

    };


    this.models.push(model);


    return model;

  }


  getModels():

  IntelligenceModel[] {

    return this.models;

  }


}