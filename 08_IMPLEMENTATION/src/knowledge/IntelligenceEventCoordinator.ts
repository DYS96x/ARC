import { EventBus } from "../core/events/EventBus";
import { IntelligenceCoordinator } from "./IntelligenceCoordinator";


export class IntelligenceEventCoordinator {


  private events: EventBus;

  private intelligence: IntelligenceCoordinator;



  public triggered =
    false;



  constructor(
    events: EventBus
  ) {

    this.events =
      events;


    this.intelligence =
      new IntelligenceCoordinator();

  }



  register() {


    this.events.subscribe(
      "MemoryUpdated",
      (event: any) => {


        this.intelligence.process(
          event.payload
        );


        this.triggered =
          true;


      }
    );


  }



  getIntelligence() {

    return this.intelligence;

  }


}