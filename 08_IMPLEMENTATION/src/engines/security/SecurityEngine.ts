/**
 * ARC Security Engine
 *
 * Controls access decisions,
 * permissions and trust boundaries.
 */

import {
  Identity
} from "../../core";


export type AccessDecision =
  | "ALLOWED"
  | "DENIED";


export interface SecurityContext {

  identityId: string;

  permissions: string[];

}


export class SecurityEngine {


  /**
   * Evaluate access request
   */
  evaluateAccess(
    context: SecurityContext,
    requiredPermission: string
  ): AccessDecision {


    if (
      context.permissions.includes(
        requiredPermission
      )
    ) {

      return "ALLOWED";

    }


    return "DENIED";

  }


  /**
   * Create security context
   */
  createContext(
    identity: Identity,
    permissions: string[]
  ): SecurityContext {


    return {

      identityId: identity.id,

      permissions

    };

  }


}