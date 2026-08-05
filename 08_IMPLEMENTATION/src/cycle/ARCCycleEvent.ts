export interface ARCCycleEvent {

  id: string;

  type: string;

  stage: string;

  payload: unknown;

  timestamp: Date;

}