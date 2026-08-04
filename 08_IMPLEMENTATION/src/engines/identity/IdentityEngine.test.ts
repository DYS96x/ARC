import { IdentityEngine } from "./IdentityEngine";


describe("Identity Engine", () => {


  it("creates a human identity", () => {


    const engine =
      new IdentityEngine();


    const identity =
      engine.registerIdentity(
        "DYS96",
        "HUMAN"
      );


    expect(identity.name)
      .toBe("DYS96");


    expect(identity.type)
      .toBe("HUMAN");


  });


});