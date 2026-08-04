/**
 * ARC Event Integration Service
 *
 * Connects system events
 * with analytics and intelligence.
 */


import {
  EventBus,
  ARCEvent
} from "../core";


import {
  AnalyticsEngine
} from "../engines";


export class EventIntegrationService {


  private eventBus: EventBus;

  private analytics: AnalyticsEngine;


  constructor(
    eventBus: EventBus,
    analytics: AnalyticsEngine
  ) {

    this.eventBus = eventBus;

    this.analytics = analytics;


  }


  /**
   * Connect event stream
   */
  registerEventTracking(): void {


    this.eventBus.subscribe(
      "SYSTEM_EVENT",
      (
        event: ARCEvent
      ) => {


        this.analytics.recordMetric(

          event.type,

          1,

          event.sourceId

        );


      }
    );

  }


}