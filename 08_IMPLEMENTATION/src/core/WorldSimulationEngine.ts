import { WorldStateEngine } from "./WorldStateEngine";
import { WorldRelationshipEngine } from "./WorldRelationshipEngine";
import { WorldEventMemory } from "./WorldEventMemory";


export interface SimulationResult {

  event: string;

  impact: string;

  confidence: number;

}



export class WorldSimulationEngine {


  private state:
    WorldStateEngine;


  private relationships:
    WorldRelationshipEngine;


  private memory:
    WorldEventMemory;



  constructor(

    state: WorldStateEngine,

    relationships: WorldRelationshipEngine,

    memory: WorldEventMemory

  ) {

    this.state =
      state;


    this.relationships =
      relationships;


    this.memory =
      memory;

  }



  simulate(
    event: string
  ): SimulationResult {


    return {

      event,

      impact:
        "UNKNOWN",

      confidence:
        0.5

    };


  }


}