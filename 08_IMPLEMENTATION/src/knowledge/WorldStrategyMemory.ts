export interface WorldStrategy {


  situation: string;

  strategy: string;

  successRate: number;


}



export class WorldStrategyMemory {


  private strategies:
    WorldStrategy[];



  constructor() {

    this.strategies = [];

  }



  store(

    situation: string,

    strategy: string,

    successRate: number

  ): WorldStrategy {



    const result: WorldStrategy = {


      situation,

      strategy,

      successRate


    };


    this.strategies.push(
      result
    );


    return result;


  }



  getStrategies():

    WorldStrategy[] {

    return this.strategies;

  }



  findBySituation(

    situation: string

  ): WorldStrategy[] {


    return this.strategies.filter(

      strategy =>

        strategy.situation === situation

    );


  }


}