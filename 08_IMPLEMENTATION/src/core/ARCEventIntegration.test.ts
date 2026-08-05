import { ARC } from "./ARC";


describe("ARC Event Integration", () => {


  it("initialises event system", () => {


    const arc =
      new ARC();


    expect(
      arc.events
    )
    .toBeDefined();


  });


});