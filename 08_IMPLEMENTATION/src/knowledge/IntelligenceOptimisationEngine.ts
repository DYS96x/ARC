export interface IntelligenceOptimisation {


  system: string;

  metric: string;

  improvement: number;


}



export class IntelligenceOptimisationEngine {


  private optimisations:
    IntelligenceOptimisation[];



  constructor() {

    this.optimisations = [];

  }



  optimise(

    system: string,

    metric: string,

    improvement: number

  ): IntelligenceOptimisation {



    const result: IntelligenceOptimisation = {


      system,

      metric,

      improvement


    };


    this.optimisations.push(
      result
    );


    return result;


  }



  getOptimisations():

    IntelligenceOptimisation[] {

    return this.optimisations;

  }



  findBySystem(

    system: string

  ): IntelligenceOptimisation[] {


    return this.optimisations.filter(

      optimisation =>

        optimisation.system === system

    );


  }


}