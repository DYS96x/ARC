export interface Pattern {
  id: string;

  name: string;

  relationships: string[];

  confidence: number;

  createdAt: Date;
}