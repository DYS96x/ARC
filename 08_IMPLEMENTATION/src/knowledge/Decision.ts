export interface Decision {

  id: string;

  signalId: string;

  description: string;

  confidence: number;

  impact: number;

  risk: number;

  expectedOutcome: string;

  createdAt: Date;

}