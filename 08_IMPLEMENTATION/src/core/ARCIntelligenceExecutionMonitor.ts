export interface IntelligenceExecutionRecord {
  route: string;
  engines: string[];
  outcome: string;
  score: number;
}

export class ARCIntelligenceExecutionMonitor {

  private records:
    IntelligenceExecutionRecord[];

  constructor() {
    this.records = [];
  }

  recordExecutionOutcome(
    route: string,
    engines: string[],
    outcome: string,
    score: number
  ): IntelligenceExecutionRecord {

    const record:
      IntelligenceExecutionRecord = {
        route,
        engines,
        outcome,
        score
      };

    this.records.push(
      record
    );

    return record;
  }

  getRecords():
    IntelligenceExecutionRecord[] {

    return this.records;
  }

  findByRoute(
    route: string
  ): IntelligenceExecutionRecord[] {

    return this.records.filter(
      record =>
        record.route === route
    );
  }
}
