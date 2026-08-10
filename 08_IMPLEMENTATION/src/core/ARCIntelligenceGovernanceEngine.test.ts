import {
  ARCIntelligenceGovernanceEngine
} from "./ARCIntelligenceGovernanceEngine";

describe(
  "ARC Intelligence Governance Engine",
  () => {

    it(
      "rejects a recommendation without authority regardless of confidence",
      () => {

        const engine =
          new ARCIntelligenceGovernanceEngine();

        const decision =
          engine.evaluate({
            recommendation: "EXECUTE HIGH CONFIDENCE ACTION",
            confidence: 1.0,
            hasAuthority: false,
            hasPermission: true,
            requiresApproval: false,
            approvalGranted: false
          });

        expect(decision.status)
          .toBe("REJECTED");

        expect(decision.reason)
          .toBe("AUTHORITY_REQUIRED");

        expect(decision.confidence)
          .toBe(1.0);
      }
    );

    it(
      "rejects an authorised recommendation without permission",
      () => {

        const engine =
          new ARCIntelligenceGovernanceEngine();

        const decision =
          engine.evaluate({
            recommendation: "CHANGE PROTECTED SYSTEM",
            confidence: 0.99,
            hasAuthority: true,
            hasPermission: false,
            requiresApproval: false,
            approvalGranted: false
          });

        expect(decision.status)
          .toBe("REJECTED");

        expect(decision.reason)
          .toBe("PERMISSION_REQUIRED");
      }
    );

    it(
      "escalates when explicit approval is required but missing",
      () => {

        const engine =
          new ARCIntelligenceGovernanceEngine();

        const decision =
          engine.evaluate({
            recommendation: "DEPLOY GOVERNED CHANGE",
            confidence: 0.95,
            hasAuthority: true,
            hasPermission: true,
            requiresApproval: true,
            approvalGranted: false
          });

        expect(decision.status)
          .toBe("ESCALATE");

        expect(decision.reason)
          .toBe("APPROVAL_REQUIRED");
      }
    );

    it(
      "approves only when governance requirements are satisfied",
      () => {

        const engine =
          new ARCIntelligenceGovernanceEngine();

        const decision =
          engine.evaluate({
            recommendation: "DEPLOY APPROVED CHANGE",
            confidence: 0.72,
            hasAuthority: true,
            hasPermission: true,
            requiresApproval: true,
            approvalGranted: true
          });

        expect(decision.status)
          .toBe("APPROVED");

        expect(decision.reason)
          .toBe("GOVERNANCE_SATISFIED");

        expect(decision.recommendation)
          .toBe("DEPLOY APPROVED CHANGE");
      }
    );

  }
);
