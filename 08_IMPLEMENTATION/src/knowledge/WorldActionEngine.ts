export interface WorldAction {


  decision: string;

  action: string;

  status: string;


}



export class WorldActionEngine {


  private actions:
    WorldAction[];



  constructor() {

    this.actions = [];

  }



  execute(

    decision: string,

    action: string

  ): WorldAction {


    const result: WorldAction = {


      decision,

      action,

      status:
        "EXECUTED"


    };


    this.actions.push(
      result
    );


    return result;


  }



  getActions(): WorldAction[] {

    return this.actions;

  }



  findByDecision(

    decision: string

  ): WorldAction[] {


    return this.actions.filter(

      action =>

        action.decision === decision

    );


  }


}