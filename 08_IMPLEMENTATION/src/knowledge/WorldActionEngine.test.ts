import { WorldActionEngine } from "./WorldActionEngine";

describe(
  "World Action Engine",
  () => {

    it(
      "applies world actions without claiming governed execution",
      () => {

        const engine =
          new WorldActionEngine();

        const result =
          engine.apply(
            "RESOURCE-SHORTAGE",
            "BUILD-NEW-SUPPLY-CHAIN"
          );

        expect(result.decision)
          .toBe(
            "RESOURCE-SHORTAGE"
          );

        expect(result.action)
          .toBe(
            "BUILD-NEW-SUPPLY-CHAIN"
          );

        expect(result.status)
          .toBe(
            "APPLIED"
          );

        expect(
          engine.getActions().length
        )
          .toBe(1);
      }
    );
  }
);
