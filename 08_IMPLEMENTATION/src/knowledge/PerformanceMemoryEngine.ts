export interface PerformanceMemory {


  system: string;

  improvement: string;

  result: number;


}



export class PerformanceMemoryEngine {


  private memories:
    PerformanceMemory[];



  constructor() {

    this.memories = [];

  }



  record(

    system: string,

    improvement: string,

    result: number

  ): PerformanceMemory {



    const memory: PerformanceMemory = {


      system,

      improvement,

      result


    };


    this.memories.push(
      memory
    );


    return memory;


  }



  getMemories():

    PerformanceMemory[] {

    return this.memories;

  }



  findBySystem(

    system: string

  ): PerformanceMemory[] {


    return this.memories.filter(

      memory =>

        memory.system === system

    );


  }


}

