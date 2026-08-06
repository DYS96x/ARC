export interface WorldLearning {


  source: string;

  lesson: string;

  confidence: number;


}



export class WorldLearningEngine {


  private learnings:
    WorldLearning[];



  constructor() {

    this.learnings = [];

  }



  learn(

    source: string,

    lesson: string,

    confidence: number

  ): WorldLearning {



    const learning: WorldLearning = {


      source,

      lesson,

      confidence


    };



    this.learnings.push(
      learning
    );



    return learning;


  }



  getLearnings(): WorldLearning[] {

    return this.learnings;

  }



  findBySource(

    source: string

  ): WorldLearning[] {


    return this.learnings.filter(

      learning =>

        learning.source === source

    );


  }


}