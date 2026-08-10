export type GovernanceDecisionStatus =
  | "APPROVED"
  | "REJECTED"
  | "ESCALATE";

export interface GovernanceRequest {
  recommendation: string;
  confidence: number;
  hasAuthority: boolean;
  hasPermission: boolean;
  requiresApproval: boolean;
  approvalGranted: boolean;
}

export interface GovernanceDecision {
  recommendation: string;
  confidence: number;
  status: GovernanceDecisionStatus;
  reason: string;
}

export class ARCIntelligenceGovernanceEngine {

  evaluate(
    request: GovernanceRequest
  ): GovernanceDecision {

    if (!request.hasAuthority) {
      return {
        recommendation: request.recommendation,
        confidence: request.confidence,
        status: "REJECTED",
        reason: "AUTHORITY_REQUIRED"
      };
    }

    if (!request.hasPermission) {
      return {
        recommendation: request.recommendation,
        confidence: request.confidence,
        status: "REJECTED",
        reason: "PERMISSION_REQUIRED"
      };
    }

    if (
      request.requiresApproval &&
      !request.approvalGranted
    ) {
      return {
        recommendation: request.recommendation,
        confidence: request.confidence,
        status: "ESCALATE",
        reason: "APPROVAL_REQUIRED"
      };
    }

    return {
      recommendation: request.recommendation,
      confidence: request.confidence,
      status: "APPROVED",
      reason: "GOVERNANCE_SATISFIED"
    };
  }
}
