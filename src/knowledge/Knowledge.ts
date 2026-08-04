import { KnowledgeType } from "./KnowledgeType";

export type KnowledgeId = string;

export interface Knowledge {
  id: KnowledgeId;

  type: KnowledgeType;

  title: string;

  description: string;

  source: string;

  confidence: number;

  createdAt: Date;

  updatedAt: Date;

  relationships: KnowledgeId[];
}