/**
 * ARC Core Contract Primitive
 *
 * Defines agreements between ARC components.
 *
 * Contracts prevent hidden dependencies
 * and uncontrolled communication.
 */


export type ContractType =
  | "REQUEST"
  | "RESPONSE"
  | "EVENT"
  | "DECISION";


export interface Contract {

  /**
   * Unique contract identifier
   */
  id: string;


  /**
   * Contract name
   */
  name: string;


  /**
   * Contract communication type
   */
  type: ContractType;


  /**
   * Component providing contract
   */
  provider: string;


  /**
   * Component consuming contract
   */
  consumer: string;


  /**
   * Contract version
   */
  version: string;


  /**
   * Expected data structure
   */
  schema: Record<string, unknown>;


  /**
   * Permission requirements
   */
  permissions?: string[];


  /**
   * Creation timestamp
   */
  createdAt: Date;

}