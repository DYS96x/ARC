export interface Action {

  id: string;

  decisionId: string;

  description: string;

  expectedOutcome: string;

  actualOutcome?: string;

  success?: boolean;

  learning?: string;

  createdAt: Date;

  completedAt?: Date;

}