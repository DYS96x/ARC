import { ARCCycleOrchestrator } from "./ARCCycleOrchestrator";

describe("ARC Cycle Orchestrator", () => {

  it("blocks action when governance is not satisfied", () => {

    const cycle =
      new ARCCycleOrchestrator();

    const result =
      cycle.process(
        "Reality signal detected",
        {
          confidence:
            1.0,
          hasAuthority:
            false,
          hasPermission:
            true,
          requiresApproval:
            false,
          approvalGranted:
            false
        }
      );

    expect(result.reality)
      .toBe(
        "Reality signal detected"
      );

    expect(result.decision.created)
      .toBe(true);

    expect(result.governance.status)
      .toBe("REJECTED");

    expect(result.action.status)
      .toBe("BLOCKED");
  });

  it("marks action ready only after governance approval", () => {

    const cycle =
      new ARCCycleOrchestrator();

    const result =
      cycle.process(
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
