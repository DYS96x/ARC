import { DiscoveryEngine } from "./DiscoveryEngine";


describe("Discovery Engine", () => {


  it("identifies high value unknown opportunities", () => {


    const engine =
      new DiscoveryEngine();


    const result =
      engine.findOpportunity({

        connections: 2,

        confidence: 0.4,

        impact: 0.9

      });


    expect(result)
      .toBe("investigate");


  });



  it("ignores low value unknown opportunities", () => {


    const engine =
      new DiscoveryEngine();


    const result =
      engine.findOpportunity({

        connections: 1,

        confidence: 0.8,

        impact: 0.1

      });


    expect(result)
      .toBe("ignore");


  });


});