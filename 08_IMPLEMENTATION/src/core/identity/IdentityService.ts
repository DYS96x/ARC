/**
 * ARC Identity Service
 *
 * Manages identity creation
 * and retrieval inside ARC.
 */

import {
  Identity,
  IdentityType,
  IdentityStatus
} from "./Identity";


export class IdentityService {

  private identities: Identity[] = [];


  /**
   * Create a new identity
   */
  createIdentity(
    type: IdentityType,
    name: string,
    ownerId?: string
  ): Identity {

    const identity: Identity = {

      id: crypto.randomUUID(),

      type,

      name,

      ownerId,

      status: "CREATED",

      createdAt: new Date(),

      updatedAt: new Date()

    };


    this.identities.push(identity);


    return identity;

  }


  /**
   * Find identity by ID
   */
  getIdentity(
    id: string
  ): Identity | undefined {

    return this.identities.find(
      identity => identity.id === id
    );

  }


  /**
   * Update identity status
   */
  updateStatus(
    id: string,
    status: IdentityStatus
  ): Identity | undefined {


    const identity = this.getIdentity(id);


    if (!identity) {
      return undefined;
    }


    identity.status = status;

    identity.updatedAt = new Date();


    return identity;

  }


  /**
   * Return all identities
   */
  getAll(): Identity[] {

    return this.identities;

  }

}