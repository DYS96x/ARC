import { ARCRouteOptimisationEngine } from "./ARCRouteOptimisationEngine";


describe(
  "ARC Autonomous Route Optimisation Engine",
  () => {


    it(
      "selects the highest performing intelligence route",
      () => {


        const engine =
          new ARCRouteOptimisationEngine();


        engine.evaluateRoute(
          "ROUTE-A",
          0.60
        );


        engine.evaluateRoute(
          "ROUTE-B",
          0.95
        );


        const best =
          engine.selectBestRoute();


        expect(
          best?.route
        )
        .toBe(
          "ROUTE-B"
        );


        expect(
          best?.score
        )
        .toBe(
          0.95
        );


      }

    );


  }

);