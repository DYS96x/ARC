export interface IntelligenceContext {


  situation: string;

  priority: string;

  engines: string[];


}



export class ARCContextIntelligenceEngine {


  private contexts:
    IntelligenceContext[];



  constructor() {

    this.contexts = [];

  }



  analyse(

    situation: string,

    priority: string

  ): IntelligenceContext {


    const context: IntelligenceContext = {


      situation,

      priority,

      engines: [

        "WORLD",

        "MEMORY",

        "DECISION"

      ]


    };


    this.contexts.push(
      context
    );


    return context;


  }



  getContexts():

    IntelligenceContext[] {

    return this.contexts;

  }



  findBySituation(

    situation: string

  ): IntelligenceContext[] {


    return this.contexts.filter(

      context =>

        context.situation === situation

    );


  }


}