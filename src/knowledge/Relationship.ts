export type RelationshipId = string;

export interface Relationship {
  id: RelationshipId;

  from: string;

  to: string;

  type: string;

  strength: number;

  createdAt: Date;
}