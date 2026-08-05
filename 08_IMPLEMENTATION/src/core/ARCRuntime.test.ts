import { ARCRuntime } from "./ARCRuntime";


describe("ARC Runtime", () => {


  it("executes the complete experience loop", () => {


    const runtime =
      new ARCRuntime();


    const result =
      runtime.process(
        "Reality signal detected"
      );


    expect(
      result
    )
    .toBeDefined();


  });


});