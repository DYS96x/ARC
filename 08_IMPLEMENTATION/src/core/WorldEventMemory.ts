export interface WorldEvent {


  id: string;

  type: string;

  sourceId: string;

  description: string;

  timestamp: Date;

  impact: any;


}



export class WorldEventMemory {


  private events:
    WorldEvent[];



  constructor() {

    this.events = [];

  }



  record(
    event: WorldEvent
  ) {


    this.events.push(
      event
    );


    return event;

  }



  getEvents() {

    return this.events;

  }



  findEventsBySource(
    sourceId: string
  ) {


    return this.events.filter(

      event =>

        event.sourceId === sourceId

    );


  }


}