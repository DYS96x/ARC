import { ARCRuntime } from "./ARCRuntime";

describe("ARC Runtime", () => {

  it("processes reality through explicit governance", () => {

    const runtime =
      new ARCRuntime();

    const result =
      runtime.process(
        "Reality signal detected",
        {
          confidence:
            0.9,
          hasAuthority:
            true,
          hasPermission:
            true,
          requiresApproval:
            true,
          approvalGranted:
            true
        }
      );

    expect(result.governance.status)
      .toBe("APPROVED");

    expect(result.action.status)
      .toBe("READY");
  });

});
