/**
 * ARC Identity Engine
 *
 * Provides identity domain capabilities
 * using ARC Core primitives.
 */

import {
  IdentityService,
  Identity
} from "../../core";


export class IdentityEngine {


  private identityService: IdentityService;


  constructor() {

    this.identityService =
      new IdentityService();

  }


  /**
   * Register a new identity
   */
  registerIdentity(
    name: string,
    type: "HUMAN" | "ORGANISATION" | "SYSTEM" | "AI_AGENT"
  ): Identity {

    return this.identityService.createIdentity(
      type,
      name
    );

  }


  /**
   * Retrieve identity
   */
  getIdentity(
    id: string
  ): Identity | undefined {

    return this.identityService.getIdentity(id);

  }


}