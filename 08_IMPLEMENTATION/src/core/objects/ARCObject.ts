/**
 * ARC Core Object Primitive
 *
 * Represents any entity managed inside ARC.
 *
 * Every ARC Object has:
 * - Identity
 * - Metadata
 * - Relationships
 * - State
 * - History
 */

import { Identity } from "../identity/Identity";


export interface ARCObject {

  /**
   * Unique object identifier
   */
  id: string;


  /**
   * Object identity reference
   */
  identity: Identity;


  /**
   * Object category
   */
  type: string;


  /**
   * Additional object information
   */
  metadata: Record<string, unknown>;


  /**
   * Current lifecycle state
   */
  state: string;


  /**
   * Connected object references
   */
  relationships: string[];


  /**
   * Creation timestamp
   */
  createdAt: Date;


  /**
   * Last update timestamp
   */
  updatedAt: Date;

}