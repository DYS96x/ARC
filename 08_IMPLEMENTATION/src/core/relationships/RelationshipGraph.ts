/**
 * ARC Relationship Graph
 *
 * Manages connections between ARC objects.
 *
 * Reality inside ARC is understood
 * through objects and relationships.
 */

import {
  Relationship,
  RelationshipType
} from "./Relationship";


export class RelationshipGraph {

  private relationships: Relationship[] = [];


  /**
   * Create a relationship between objects
   */
  createRelationship(
    sourceId: string,
    targetId: string,
    type: RelationshipType,
    createdBy?: string
  ): Relationship {

    const relationship: Relationship = {

      id: crypto.randomUUID(),

      sourceId,

      targetId,

      type,

      createdAt: new Date(),

      createdBy

    };


    this.relationships.push(relationship);


    return relationship;

  }


  /**
   * Find relationships from an object
   */
  getRelationshipsFrom(
    sourceId: string
  ): Relationship[] {

    return this.relationships.filter(
      relationship =>
        relationship.sourceId === sourceId
    );

  }


  /**
   * Find relationships connected to an object
   */
  getRelationshipsFor(
    objectId: string
  ): Relationship[] {

    return this.relationships.filter(
      relationship =>
        relationship.sourceId === objectId ||
        relationship.targetId === objectId
    );

  }


  /**
   * Return all relationships
   */
  getAll(): Relationship[] {

    return this.relationships;

  }

}