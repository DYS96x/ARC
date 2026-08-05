import { EventBus } from "./events/EventBus";
import { IntelligenceEventCoordinator } from "../knowledge/IntelligenceEventCoordinator";


export class ARCIntelligenceLoop {


  private events: EventBus;

  private intelligence: IntelligenceEventCoordinator;



  constructor() {

    this.events =
      new EventBus();


    this.intelligence =
      new IntelligenceEventCoordinator(
        this.events
      );


    this.intelligence.register();

  }



  process(
    outcome: any
  ) {


    this.events.publish({

      id:
        crypto.randomUUID(),


      type:
        "MemoryUpdated",


      sourceId:
        "ARC-LOOP",


      payload:
        outcome,


      timestamp:
        new Date()

    });



    return {

      processed:
        true,


      intelligence:
        this.intelligence

    };

  }



  getIntelligence() {

    return this.intelligence;

  }


}