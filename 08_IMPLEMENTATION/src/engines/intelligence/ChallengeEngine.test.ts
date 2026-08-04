import { ChallengeEngine } from "./ChallengeEngine";


describe("Challenge Engine", () => {


  it("validates strong evidence", () => {


    const engine =
      new ChallengeEngine();


    const result =
      engine.challenge({

        evidence: 0.9,

        confidence: 0.8

      });


    expect(result)
      .toBe("validated");


  });



  it("questions weak evidence", () => {


    const engine =
      new ChallengeEngine();


    const result =
      engine.challenge({

        evidence: 0.2,

        confidence: 0.8

      });


    expect(result)
      .toBe("challenged");


  });


});