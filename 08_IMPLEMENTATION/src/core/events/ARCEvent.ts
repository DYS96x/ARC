/**
 * ARC Core Event Primitive
 *
 * Records changes that occur inside ARC.
 */

export interface ARCEvent {

  id: string;

  type: string;

  sourceId: string;

  payload: Record<string, unknown>;

  timestamp: Date;

  actorId?: string;

  correlationId?: string;

}