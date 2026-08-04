/**
 * ARC System Registry
 *
 * Registers ARC platform objects
 * inside the ARC Core object system.
 */


import {
  ObjectRegistry,
  Identity,
  ARCObject
} from "../core";


export class SystemRegistry {


  private objectRegistry: ObjectRegistry;


  constructor() {

    this.objectRegistry =
      new ObjectRegistry();

  }


  /**
   * Register system identity
   */
  registerSystem(
    identity: Identity
  ): ARCObject {


    return this.objectRegistry.registerObject(
      identity,
      "SYSTEM"
    );

  }


  /**
   * Retrieve system object
   */
  getSystem(
    id: string
  ): ARCObject | undefined {


    return this.objectRegistry.getObject(id);

  }


}