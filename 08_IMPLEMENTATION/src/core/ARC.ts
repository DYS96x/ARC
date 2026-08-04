/**
 * ARC Core Runtime
 *
 * Central container connecting
 * ARC foundational services.
 */

import { IdentityService } from "./identity/IdentityService";
import { ObjectRegistry } from "./objects/ObjectRegistry";
import { RelationshipGraph } from "./relationships/RelationshipGraph";
import { EventBus } from "./events/EventBus";
import { StateManager } from "./state/StateManager";
import { ContractValidator } from "./contracts/ContractValidator";


export class ARC {


  public identity: IdentityService;

  public objects: ObjectRegistry;

  public relationships: RelationshipGraph;

  public events: EventBus;

  public state: StateManager;

  public contracts: ContractValidator;


  constructor() {

    this.identity = new IdentityService();

    this.objects = new ObjectRegistry();

    this.relationships = new RelationshipGraph();

    this.events = new EventBus();

    this.state = new StateManager();

    this.contracts = new ContractValidator();

  }


}