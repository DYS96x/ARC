/**
 * ARC Core Identity Primitive
 *
 * Represents anything that can exist or act inside ARC.
 *
 * Humans, organisations, systems, services,
 * AI agents and artifacts all require identity.
 */

export type IdentityType =
  | "HUMAN"
  | "ORGANISATION"
  | "TEAM"
  | "SYSTEM"
  | "SERVICE"
  | "AI_AGENT"
  | "ARTIFACT";

export type IdentityStatus =
  | "CREATED"
  | "ACTIVE"
  | "SUSPENDED"
  | "ARCHIVED";


export interface Identity {

  /**
   * Unique identifier
   */
  id: string;


  /**
   * What kind of entity exists
   */
  type: IdentityType;


  /**
   * Display name
   */
  name: string;


  /**
   * Responsible owner
   */
  ownerId?: string;


  /**
   * Current lifecycle state
   */
  status: IdentityStatus;


  /**
   * Creation timestamp
   */
  createdAt: Date;


  /**
   * Last modification timestamp
   */
  updatedAt: Date;

}