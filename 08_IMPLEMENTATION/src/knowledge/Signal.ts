export interface Signal {
  id: string;

  source: string;

  description: string;

  strength: number;

  confidence: number;

  importance: number;

  createdAt: Date;
}