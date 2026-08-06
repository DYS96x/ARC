import { ARCStrategicIntelligenceSimulation } from "./ARCStrategicIntelligenceSimulation";


describe(
  "ARC Strategic Intelligence Simulation",
  () => {


    it(
      "completes a strategic intelligence cycle",
      () => {


        const arc =
          new ARCStrategicIntelligenceSimulation();



        arc.evaluateDecision(
          "WORLD EVENT DETECTED",
          0.95,
          true,
          "OPTIMAL ROUTE",
          0.90
        );



        const decision =
          arc.getBestDecision();



        expect(
          decision?.context
        )
        .toBe(
          "WORLD EVENT DETECTED"
        );



        expect(
          decision?.approved
        )
        .toBe(
          true
        );



        expect(
          decision?.outcomeScore
        )
        .toBe(
          0.90
        );


      }

    );


  }

);