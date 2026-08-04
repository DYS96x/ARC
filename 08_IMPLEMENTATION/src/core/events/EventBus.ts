import { ARCEvent } from "./ARCEvent";


export type EventHandler = (
  event: ARCEvent
) => void;


export class EventBus {

  private events: ARCEvent[] = [];

  private subscribers: Map<string, EventHandler[]> = new Map();


  publish(
    event: ARCEvent
  ): void {

    this.events.push(event);

    const handlers =
      this.subscribers.get(event.type);

    if (!handlers) {
      return;
    }

    handlers.forEach(
      handler => handler(event)
    );

  }


  subscribe(
    eventType: string,
    handler: EventHandler
  ): void {

    const handlers =
      this.subscribers.get(eventType) ?? [];

    handlers.push(handler);

    this.subscribers.set(
      eventType,
      handlers
    );

  }


  getEvents(): ARCEvent[] {

    return this.events;

  }


  getEventsByType(
    type: string
  ): ARCEvent[] {

    return this.events.filter(
      event => event.type === type
    );

  }

}