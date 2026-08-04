/**
 * ARC Lifecycle Service
 *
 * Records important platform lifecycle events.
 */


import {
  EventBus
} from "../core";


export class LifecycleService {


  private events: EventBus;


  constructor(
    events: EventBus
  ) {

    this.events = events;

  }


  /**
   * Record platform startup
   */
  started(): void {


    this.events.publish({

      id: crypto.randomUUID(),

      type: "ARC_STARTED",

      sourceId: "ARC_SYSTEM",

      payload: {

        status: "ONLINE"

      },

      timestamp: new Date()

    });


  }


  /**
   * Record engine initialisation
   */
  engineInitialised(
    engineName: string
  ): void {


    this.events.publish({

      id: crypto.randomUUID(),

      type: "ENGINE_INITIALISED",

      sourceId: "ARC_SYSTEM",

      payload: {

        engine: engineName

      },

      timestamp: new Date()

    });


  }


}