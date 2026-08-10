export interface RoutePerformance {

  route: string;

  score: number;

}


export class ARCRouteOptimisationEngine {


  private routes: RoutePerformance[];


  constructor() {

    this.routes = [];

  }


  evaluateRoute(

    route: string,

    score: number

  ): RoutePerformance {


    const performance: RoutePerformance = {

      route,

      score

    };


    this.routes.push(performance);


    return performance;

  }



  selectBestRoute():

    RoutePerformance | undefined {


    if (this.routes.length === 0) {

      return undefined;

    }


    return this.routes.reduce(

      (best, current) =>

        current.score > best.score

          ? current

          : best

    );

  }



  getRoutes():

    RoutePerformance[] {

    return this.routes;

  }


}