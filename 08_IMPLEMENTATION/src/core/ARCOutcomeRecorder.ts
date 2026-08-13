export interface ARCObservedOutcome {
  decision: string;
  action: string;
  expectedOutcome: string;
  actualOutcome: string;
  observedAt: Date;
}

export class ARCOutcomeRecorder {

  private outcomes:
    ARCObservedOutcome[];

  constructor() {
    this.outcomes = [];
  }

  record(
    outcome: ARCObservedOutcome
  ): ARCObservedOutcome {

    const recorded = {
      ...outcome
    };

    this.outcomes.push(
      recorded
    );

    return recorded;
  }

  getOutcomes():
    ARCObservedOutcome[] {

    return this.outcomes;
  }

  findByDecision(
    decision: string
  ): ARCObservedOutcome[] {

    return this.outcomes.filter(
      outcome =>
        outcome.decision === decision
    );
  }
}
