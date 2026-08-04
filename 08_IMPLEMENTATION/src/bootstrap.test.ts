import {
  bootstrap
} from "./bootstrap";


describe("ARC Bootstrap", () => {


  it("starts the ARC platform", () => {


    const platform =
      bootstrap();


    expect(platform)
      .toBeDefined();


    expect(platform.core)
      .toBeDefined();


  });


});