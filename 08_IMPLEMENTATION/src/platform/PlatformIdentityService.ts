/**
 * ARC Platform Identity Service
 *
 * Creates the identity of the ARC system itself.
 */


import {
  IdentityService,
  Identity
} from "../core";


export class PlatformIdentityService {


  private identityService: IdentityService;


  constructor() {

    this.identityService =
      new IdentityService();

  }


  /**
   * Create ARC system identity
   */
  initialise(): Identity {


    return this.identityService.createIdentity(

      "SYSTEM",

      "ARC_SYSTEM"

    );

  }


}