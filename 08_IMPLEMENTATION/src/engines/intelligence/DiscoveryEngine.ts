export class DiscoveryEngine {


  findOpportunity(
    signal: {
      connections: number;
      confidence: number;
      impact: number;
    }
  ): string {


    const discoveryScore =
      (signal.connections * 0.2) +
      (signal.impact * 0.6) -
      (signal.confidence * 0.2);



    if (
      discoveryScore >= 0.5
    ) {

      return "investigate";

    }


    return "ignore";

  }


}