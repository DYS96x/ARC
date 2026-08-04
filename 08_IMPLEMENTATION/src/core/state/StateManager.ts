/**
 * ARC State Manager
 *
 * Controls object lifecycle states
 * and preserves state history.
 */

import {
  State,
  StateType,
  StateChange
} from "./State";


export class StateManager {


  /**
   * Update an object's state
   */
  updateState(
    state: State,
    newState: StateType,
    reason?: string,
    changedBy?: string
  ): State {


    const change: StateChange = {

      from: state.current,

      to: newState,

      reason,

      changedBy,

      timestamp: new Date()

    };


    state.history.push(change);


    state.current = newState;

    state.updatedAt = new Date();


    return state;

  }


  /**
   * Create initial state
   */
  createState(): State {

    return {

      current: "CREATED",

      history: [],

      updatedAt: new Date()

    };

  }


  /**
   * Get current state
   */
  getCurrentState(
    state: State
  ): StateType {

    return state.current;

  }


}