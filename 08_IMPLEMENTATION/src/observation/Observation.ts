/**
 * ARC Observation Contract
 *
 * Represents a recorded truth about
 * something that happened inside ARC.
 *
 * Nothing important happens without
 * leaving evidence.
 */


export interface Observation {


  /**
   * Unique observation identifier
   */
  id: string;


  /**
   * When the observation occurred
   */
  timestamp: Date;


  /**
   * System component responsible
   */
  source: string;


  /**
   * Event that created the observation
   */
  event: string;


  /**
   * Optional actor responsible
   */
  actor?: string;


  /**
   * State before change
   */
  stateBefore?: unknown;


  /**
   * State after change
   */
  stateAfter?: unknown;


  /**
   * Additional contextual information
   */
  metadata?: Record<string, unknown>;


}