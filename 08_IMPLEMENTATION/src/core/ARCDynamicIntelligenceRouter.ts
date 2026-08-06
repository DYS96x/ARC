export interface IntelligenceRoute {


  context: string;

  engines: string[];


}



export class ARCDynamicIntelligenceRouter {


  private routes:
    IntelligenceRoute[];



  constructor() {

    this.routes = [];

  }



  route(

    context: string,

    engines: string[]

  ): IntelligenceRoute {


    const route: IntelligenceRoute = {


      context,

      engines


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



  findByContext(

    context: string

  ): IntelligenceRoute[] {


    return this.routes.filter(

      route =>

        route.context === context

    );


  }


}