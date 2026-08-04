/**
 * ARC Core Public Exports
 *
 * Single entry point for ARC foundation.
 */


export { ARC } from "./ARC";


// Identity

export {
  IdentityService
} from "./identity/IdentityService";

export type {
  Identity,
  IdentityType,
  IdentityStatus
} from "./identity/Identity";


// Objects

export {
  ObjectRegistry
} from "./objects/ObjectRegistry";

export type {
  ARCObject
} from "./objects/ARCObject";


// Relationships

export {
  RelationshipGraph
} from "./relationships/RelationshipGraph";

export type {
  Relationship,
  RelationshipType
} from "./relationships/Relationship";


// Events

export {
  EventBus
} from "./events/EventBus";

export type {
  ARCEvent
} from "./events/ARCEvent";


// State

export {
  StateManager
} from "./state/StateManager";

export type {
  State,
  StateType,
  StateChange
} from "./state/State";


// Contracts

export {
  ContractValidator
} from "./contracts/ContractValidator";

export type {
  Contract,
  ContractType
} from "./contracts/Contract";

