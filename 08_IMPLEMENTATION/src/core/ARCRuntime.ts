import { ARCCycleOrchestrator } from "../cycle/ARCCycleOrchestrator";


export class ARCRuntime {


  private cycle:
    ARCCycleOrchestrator;



  constructor() {

    this.cycle =
      new ARCCycleOrchestrator();

  }



  process(
    reality: string
  ) {

    return this.cycle.process(
      reality
    );

  }


}