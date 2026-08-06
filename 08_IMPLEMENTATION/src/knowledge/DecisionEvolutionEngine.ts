export interface DecisionEvolution {


  decision: string;

  lesson: string;

  adjustment: number;


}



export class DecisionEvolutionEngine {


  private evolutions:
    DecisionEvolution[];



  constructor() {

    this.evolutions = [];

  }



  evolve(

    decision: string,

    lesson: string,

    adjustment: number

  ): DecisionEvolution {


    const evolution: DecisionEvolution = {


      decision,

      lesson,

      adjustment


    };


    this.evolutions.push(
      evolution
    );


    return evolution;


  }



  getEvolutions():

    DecisionEvolution[] {

    return this.evolutions;

  }



  findByDecision(

    decision: string

  ): DecisionEvolution[] {


    return this.evolutions.filter(

      evolution =>

        evolution.decision === decision

    );


  }


}