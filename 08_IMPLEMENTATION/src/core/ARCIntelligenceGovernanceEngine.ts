export interface LearnedRoute {

  route: string;

  successRate: number;

  attempts: number;

}


export class ARCAdaptiveRouteLearningEngine {


  private routes: LearnedRoute[];


  constructor() {

    this.routes = [];

  }


  learnRoute(

    route: string,

    success: boolean

  ): LearnedRoute {


    let existing =
      this.routes.find(
        item =>
          item.route === route
      );


    if (!existing) {


      existing = {

        route,

        successRate: success ? 1 : 0,

        attempts: 1

      };


      this.routes.push(existing);

      return existing;

    }


    const successfulAttempts =
      existing.successRate *
      existing.attempts;


    existing.attempts += 1;


    existing.successRate =
      (
        successfulAttempts +
        (success ? 1 : 0)
      )
      /
      existing.attempts;


    return existing;

  }


  getRoutes():

  LearnedRoute[] {

    return this.routes;

  }


}