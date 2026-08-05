export interface WorldEntity {

  id: string;

  type: string;

  state: any;

}



export class WorldStateEngine {


  private entities: WorldEntity[];



  constructor() {

    this.entities = [];

  }



  register(
    entity: WorldEntity
  ) {


    this.entities.push(
      entity
    );


    return entity;

  }



  updateState(
    id: string,
    state: any
  ) {


    const entity =
      this.entities.find(
        item =>
          item.id === id
      );


    if (!entity) {

      return undefined;

    }


    entity.state =
      state;


    return entity;

  }



  getEntities() {

    return this.entities;

  }


}