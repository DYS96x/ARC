/**
 * ARC Core State Primitive
 *
 * Represents the current condition
 * and lifecycle position of an ARC object.
 */

export type StateType =
  | "CREATED"
  | "ACTIVE"
  | "PENDING"
  | "BLOCKED"
  | "COMPLETED"
  | "ARCHIVED";


export interface State {

  /**
   * Current state value
   */
  current: StateType;


  /**
   * Previous state history
   */
  history: StateChange[];


  /**
   * Last update time
   */
  updatedAt: Date;

}


export interface StateChange {

  /**
   * Previous state
   */
  from: StateType;


  /**
   * New state
   */
  to: StateType;


  /**
   * Reason for change
   */
  reason?: string;


  /**
   * Identity responsible
   */
  changedBy?: string;


  /**
   * Change timestamp
   */
  timestamp: Date;

}