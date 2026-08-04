import { TruthLockEngine } from "./TruthLockEngine";


describe("Truth Lock Engine", () => {


  it("locks validated knowledge as truth", () => {


    const engine =
      new TruthLockEngine();


    const result =
      engine.lock({

        confidence: 0.9,

        validation:
          "validated"

      });


    expect(result)
      .toBe("locked");


  });



  it("rejects weak knowledge", () => {


    const engine =
      new TruthLockEngine();


    const result =
      engine.lock({

        confidence: 0.3,

        validation:
          "challenged"

      });


    expect(result)
      .toBe("rejected");


  });


});