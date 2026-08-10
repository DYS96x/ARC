import {
  GovernanceDecision
} from "../core/ARCIntelligenceGovernanceEngine";

import {
  AccessDecision
} from "../engines/security/SecurityEngine";

import {
  WorldAction,
  WorldActionEngine
} from "../knowledge/WorldActionEngine";

import {
  EventBus
} from "./events/EventBus";

export interface ExecutionCapabilityRequest {
  governance: GovernanceDecision;
  access: AccessDecision;
  decision: string;
  action: string;
}

export interface ExecutionCapabilityResult {
  status:
    | "EXECUTED"
    | "BLOCKED";
  reason:
    | "EXECUTION_AUTHORISED"
    | "GOVERNANCE_NOT_APPROVED"
    | "SECURITY_ACCESS_DENIED";
  worldAction?: WorldAction;
}

export class ARCExecutionCapability {

  private worldActions:
    WorldActionEngine;

  private events:
    EventBus;

  constructor(
    worldActions =
      new WorldActionEngine(),
    events =
      new EventBus()
  ) {
    this.worldActions =
      worldActions;

    this.events =
      events;
  }

  execute(
    request: ExecutionCapabilityRequest
  ): ExecutionCapabilityResult {

    if (
      request.governance.status !==
      "APPROVED"
    ) {
      return {
        status: "BLOCKED",
        reason:
          "GOVERNANCE_NOT_APPROVED"
      };
    }

    if (
      request.access !==
      "ALLOWED"
    ) {
      return {
        status: "BLOCKED",
        reason:
          "SECURITY_ACCESS_DENIED"
      };
    }

    const worldAction =
      this.worldActions.apply(
        request.decision,
        request.action
      );

    this.events.publish({
      id:
        crypto.randomUUID(),
      type:
        "action.executed",
      sourceId:
        request.decision,
      payload: {
        action:
          request.action,
        governanceStatus:
          request.governance.status,
        access:
          request.access,
        worldStatus:
          worldAction.status
      },
      timestamp:
        new Date()
    });

    return {
      status: "EXECUTED",
      reason:
        "EXECUTION_AUTHORISED",
      worldAction
    };
  }

  getExecutionEvents() {
    return this.events.getEventsByType(
      "action.executed"
    );
  }
}
