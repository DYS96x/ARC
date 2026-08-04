import { ObservationType } from "./ObservationType";

export interface Observation {
  id: string;

  timestamp: Date;

  source: string;

  type: ObservationType;

  event: string;

  state: Record<string, unknown>;

  evidence: unknown[];

  confidence: number;

  relationships: string[];
}