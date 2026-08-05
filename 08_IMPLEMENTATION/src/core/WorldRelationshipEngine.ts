export interface WorldRelationship {

  sourceId: string;

  targetId: string;

  type: string;

}



export class WorldRelationshipEngine {


  private relationships:
    WorldRelationship[];



  constructor() {

    this.relationships = [];

  }



  connect(
    sourceId: string,
    targetId: string,
    type: string
  ) {


    const relationship: WorldRelationship = {

      sourceId,

      targetId,

      type

    };



    this.relationships.push(
      relationship
    );



    return relationship;

  }



  getRelationships() {

    return this.relationships;

  }



  findConnections(
    id: string
  ) {


    return this.relationships.filter(

      relationship =>

        relationship.sourceId === id ||
        relationship.targetId === id

    );


  }


}