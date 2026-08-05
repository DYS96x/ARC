import { EventBus } from "../core/events/EventBus";


export class LearningEventListener {


  private events: EventBus;


  public received =
    false;



  constructor(
    events: EventBus
  ) {

    this.events =
      events;

  }



  register() {

    this.events.subscribe(
      "LearningCreated",
      () => {


        this.received =
          true;


      }
    );

  }


}