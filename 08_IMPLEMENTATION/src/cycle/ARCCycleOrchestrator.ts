import { EventBus } from "../core/events/EventBus";
import {
  ARCIntelligenceGovernanceEngine,
  GovernanceDecisionStatus
} from "../core/ARCIntelligenceGovernanceEngine";

export interface ARCGovernanceInput {
  confidence: number;
  hasAuthority: boolean;
  hasPermission: boolean;
  requiresApproval: boolean;
  approvalGranted: boolean;
}

export class ARCCycleOrchestrator {

  private events: EventBus;

  private governance:
    ARCIntelligenceGovernanceEngine;

  constructor() {

    this.events =
      new EventBus();

    this.governance =
      new ARCIntelligenceGovernanceEngine();
  }

  process(
    reality: string,
    governanceInput: ARCGovernanceInput
  ) {

    const observation = {
      observed:
        reality
    };

    this.events.publish({
      id:
        crypto.randomUUID(),
      type:
        "ObservationCreated",
      sourceId:
        "ARC-CYCLE",
      payload:
        observation,
      timestamp:
        new Date()
    });

    const knowledge = {
      observation,
      created:
        true
    };

    this.events.publish({
      id:
        crypto.randomUUID(),
      type:
        "KnowledgeCreated",
      sourceId:
        "ARC-CYCLE",
      payload:
        knowledge,
      timestamp:
        new Date()
    });

    const decision = {
      knowledge,
      created:
        true
    };

    this.events.publish({
      id:
        crypto.randomUUID(),
      type:
        "DecisionCreated",
      sourceId:
        "ARC-CYCLE",
      payload:
        decision,
      timestamp:
        new Date()
    });

    const governance =
      this.governance.evaluate({
        recommendation:
          "PROCESS REALITY DECISION",
        confidence:
          governanceInput.confidence,
        hasAuthority:
          governanceInput.hasAuthority,
        hasPermission:
          governanceInput.hasPermission,
        requiresApproval:
          governanceInput.requiresApproval,
        approvalGranted:
          governanceInput.approvalGranted
      });

    const action = {
      decision,
      governanceStatus:
        governance.status as GovernanceDecisionStatus,
      status:
        governance.status === "APPROVED"
          ? "READY"
          : "BLOCKED"
    };

    return {
      reality,
      observation,
      knowledge,
      decision,
      governance,
      action
    };
  }
}
