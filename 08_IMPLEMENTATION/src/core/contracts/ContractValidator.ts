/**
 * ARC Contract Validator
 *
 * Validates communication agreements
 * between ARC components.
 */

import { Contract } from "./Contract";


export interface ValidationResult {

  valid: boolean;

  errors: string[];

}


export class ContractValidator {


  /**
   * Validate contract definition
   */
  validate(
    contract: Contract
  ): ValidationResult {


    const errors: string[] = [];


    if (!contract.id) {
      errors.push("Contract ID is required");
    }


    if (!contract.name) {
      errors.push("Contract name is required");
    }


    if (!contract.provider) {
      errors.push("Provider is required");
    }


    if (!contract.consumer) {
      errors.push("Consumer is required");
    }


    if (!contract.version) {
      errors.push("Version is required");
    }


    if (!contract.schema) {
      errors.push("Schema is required");
    }


    return {

      valid: errors.length === 0,

      errors

    };

  }


  /**
   * Check contract compatibility
   */
  isCompatible(
    source: Contract,
    target: Contract
  ): boolean {


    return (
      source.name === target.name &&
      source.version === target.version
    );

  }

}