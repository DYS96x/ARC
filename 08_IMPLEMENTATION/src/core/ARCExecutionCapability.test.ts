import {
  ARCExecutionCapability
} from "./ARCExecutionCapability";

describe(
  "ARC Execution Capability",
  () => {

    const approvedGovernance = {
      recommendation:
        "APPLY GOVERNED WORLD ACTION",
      confidence: 0.9,
      status:
        "APPROVED" as const,
      reason:
        "GOVERNANCE_SATISFIED"
    };

    it(
      "blocks execution when governance is not approved",
      () => {

        const capability =
          new ARCExecutionCapability();

        const result =
          capability.execute({
            governance: {
              ...approvedGovernance,
              status:
                "REJECTED",
              reason:
                "AUTHORITY_REQUIRED"
            },
            access:
              "ALLOWED",
            decision:
              "DECISION-001",
            action:
              "CHANGE-WORLD"
          });

        expect(result.status)
          .toBe("BLOCKED");

        expect(result.reason)
          .toBe(
            "GOVERNANCE_NOT_APPROVED"
          );

        expect(result.worldAction)
          .toBeUndefined();
      }
    );

    it(
      "blocks execution when security denies access",
      () => {

        const capability =
          new ARCExecutionCapability();

        const result =
          capability.execute({
            governance:
              approvedGovernance,
            access:
              "DENIED",
            decision:
              "DECISION-002",
            action:
              "CHANGE-WORLD"
          });

        expect(result.status)
          .toBe("BLOCKED");

        expect(result.reason)
          .toBe(
            "SECURITY_ACCESS_DENIED"
          );

        expect(result.worldAction)
          .toBeUndefined();
      }
    );

    it(
      "executes only after governance approval and security access",
      () => {

        const capability =
          new ARCExecutionCapability();

        const result =
          capability.execute({
            governance:
              approvedGovernance,
            access:
              "ALLOWED",
            decision:
              "DECISION-003",
            action:
              "BUILD-NEW-SUPPLY-CHAIN"
          });

        expect(result.status)
          .toBe("EXECUTED");

        expect(result.reason)
          .toBe(
            "EXECUTION_AUTHORISED"
          );

        expect(
          result.worldAction?.decision
        )
          .toBe("DECISION-003");

        expect(
          result.worldAction?.status
        )
          .toBe("APPLIED");

        const events =
          capability.getExecutionEvents();

        expect(events.length)
          .toBe(1);

        expect(
          events[0].type
        )
          .toBe(
            "action.executed"
          );
      }
    );

  }
);
