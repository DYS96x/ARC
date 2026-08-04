export type RelationshipType =
  | "OWNS"
  | "BELONGS_TO"
  | "USES"
  | "DEPENDS_ON"
  | "CREATES"
  | "ANALYSES"
  | "MANAGES"
  | "CONNECTED_TO"
  | "RELATED_TO";


export interface Relationship {

  id: string;

  sourceId: string;

  targetId: string;

  type: RelationshipType;

  metadata?: Record<string, unknown>;

  createdAt: Date;

  createdBy?: string;

}