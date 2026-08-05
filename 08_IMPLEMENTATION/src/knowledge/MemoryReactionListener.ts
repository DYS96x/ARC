import { EventBus } from "../core/events/EventBus";


export class MemoryReactionListener {


  private events: EventBus;


  public memoryUpdated =
    false;



  constructor(
    events: EventBus
  ) {

    this.events =
      events;

  }



  register() {


    this.events.subscribe(
      "OutcomeCreated",
      () => {


        this.memoryUpdated =
          true;


      }
    );


  }


}