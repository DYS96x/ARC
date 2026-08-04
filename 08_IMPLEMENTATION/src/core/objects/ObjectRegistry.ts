/**
 * ARC Object Registry
 *
 * Stores and retrieves ARC objects.
 *
 * The registry provides the foundation
 * for ARC object management.
 */

import { ARCObject } from "./ARCObject";
import { Identity } from "../identity/Identity";


export class ObjectRegistry {

  private objects: ARCObject[] = [];


  /**
   * Register a new ARC object
   */
  registerObject(
    identity: Identity,
    type: string,
    metadata: Record<string, unknown> = {}
  ): ARCObject {

    const object: ARCObject = {

      id: crypto.randomUUID(),

      identity,

      type,

      metadata,

      state: "CREATED",

      relationships: [],

      createdAt: new Date(),

      updatedAt: new Date()

    };


    this.objects.push(object);


    return object;

  }


  /**
   * Retrieve object by ID
   */
  getObject(
    id: string
  ): ARCObject | undefined {

    return this.objects.find(
      object => object.id === id
    );

  }


  /**
   * Return all registered objects
   */
  getAll(): ARCObject[] {

    return this.objects;

  }


  /**
   * Update object metadata
   */
  updateMetadata(
    id: string,
    metadata: Record<string, unknown>
  ): ARCObject | undefined {

    const object = this.getObject(id);


    if (!object) {
      return undefined;
    }


    object.metadata = {
      ...object.metadata,
      ...metadata
    };


    object.updatedAt = new Date();


    return object;

  }

}