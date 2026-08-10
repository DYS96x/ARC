export interface IntelligenceObjectiveCandidate {
  objective: string;
  priority: number;
}

export class ARCIntelligencePlanningEngine {

  private candidates:
    IntelligenceObjectiveCandidate[];

  constructor() {
    this.candidates = [];
  }

  addCandidate(
    objective: string,
    priority: number
  ): IntelligenceObjectiveCandidate {

    const candidate:
      IntelligenceObjectiveCandidate = {
        objective,
        priority
      };

    this.candidates.push(
      candidate
    );

    return candidate;
  }

  selectTopCandidate():
    IntelligenceObjectiveCandidate | undefined {

    if (
      this.candidates.length === 0
    ) {
      return undefined;
    }

    return this.candidates
      .sort(
        (a, b) =>
          b.priority - a.priority
      )[0];
  }

  getCandidates():
    IntelligenceObjectiveCandidate[] {

    return this.candidates;
  }
}
