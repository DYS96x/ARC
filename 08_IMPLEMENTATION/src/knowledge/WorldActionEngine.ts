export interface WorldAction {
  decision: string;
  action: string;
  status: "APPLIED";
}

export class WorldActionEngine {

  private actions:
    WorldAction[];

  constructor() {
    this.actions = [];
  }

  apply(
    decision: string,
    action: string
  ): WorldAction {

    const result: WorldAction = {
      decision,
      action,
      status:
        "APPLIED"
    };

    this.actions.push(
      result
    );

    return result;
  }

  getActions():
    WorldAction[] {

    return this.actions;
  }

  findByDecision(
    decision: string
  ): WorldAction[] {

    return this.actions.filter(
      action =>
        action.decision === decision
    );
  }
}
