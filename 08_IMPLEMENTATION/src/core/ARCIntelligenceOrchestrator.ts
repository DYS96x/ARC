export interface IntelligenceRequest {


  source: string;

  objective: string;


}



export interface IntelligenceRoute {


  source: string;

  objective: string;

  engines: string[];


}



export class ARCIntelligenceOrchestrator {


  private routes:
    IntelligenceRoute[];



  constructor() {

    this.routes = [];

  }



  orchestrate(

    request: IntelligenceRequest

  ): IntelligenceRoute {


    const route: IntelligenceRoute = {


      source:
        request.source,


      objective:
        request.objective,


      engines: [

        "WORLD",

        "MEMORY",

        "DECISION",

        "LEARNING"

      ]


    };


    this.routes.push(
      route
    );


    return route;


  }



  getRoutes():

    IntelligenceRoute[] {

    return this.routes;

  }


}