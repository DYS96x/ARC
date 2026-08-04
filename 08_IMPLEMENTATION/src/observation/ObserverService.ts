import { Observation } from "./Observation";
import { ObservationType } from "./ObservationType";
import { ObservationStore } from "./ObservationStore";


export class ObserverService {

  constructor(
    private store: ObservationStore
  ) {}


  observe(
    source: string,
    event: string,
    type: ObservationType
  ): Observation {

    const observation: Observation = {

      id: crypto.randomUUID(),

      timestamp: new Date(),

      source,

      type,

      event,

      state: {},

      evidence: [],

      confidence: 1,

      relationships: []
    };


    this.store.add(observation);

    return observation;
  }
}