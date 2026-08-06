export interface OptimisationCandidate {

  name: string;

  value: number;

}


export class ARCIntelligenceAutonomousOptimisationEngine {


  private optimisations: OptimisationCandidate[];


  constructor() {

    this.optimisations = [];

  }


  addOptimisation(

    name: string,

    value: number

  ): OptimisationCandidate {


    const optimisation: OptimisationCandidate = {

      name,

      value

    };


    this.optimisations.push(

      optimisation

    );


    return optimisation;

  }



  selectBestOptimisation():

  OptimisationCandidate | undefined {


    if (

      this.optimisations.length === 0

    ) {

      return undefined;

    }


    return (

      this.optimisations

        .sort(

          (a,b) =>

          b.value - a.value

        )[0]

    );

  }



  getOptimisations():

  OptimisationCandidate[] {

    return this.optimisations;

  }


}