import type {
  GovernanceDecisionStatus
} from "../governance/HolyArcGovernanceBoundary";

export interface ExecutiveObjective {
  objective: string;
  priority: number;
  governanceStatus: GovernanceDecisionStatus;
  status: "PENDING" | "SELECTED";
}

export class ARCIntelligenceExecutiveEngine {

  private objectives: ExecutiveObjective[];

  constructor() {
    this.objectives = [];
  }

  addObjective(
    objective: string,
    priority: number,
    governanceStatus: GovernanceDecisionStatus
  ): ExecutiveObjective {

    const item: ExecutiveObjective = {
      objective,
      priority,
      governanceStatus,
      status: "PENDING"
    };

    this.objectives.push(item);

    return item;
  }

  selectNextObjective():
    ExecutiveObjective | undefined {

    const next =
      this.objectives
        .filter(
          item =>
            item.status === "PENDING" &&
            item.governanceStatus === "APPROVED"
        )
        .sort(
          (a, b) =>
            b.priority - a.priority
        )[0];

    if (!next) {
      return undefined;
    }

    next.status = "SELECTED";

    return next;
  }

  getObjectives():
    ExecutiveObjective[] {

    return this.objectives;
  }
}
