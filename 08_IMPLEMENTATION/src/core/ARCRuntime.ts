import {
  ARCCycleOrchestrator,
  ARCGovernanceInput
} from "../cycle/ARCCycleOrchestrator";

export class ARCRuntime {

  private cycle:
    ARCCycleOrchestrator;

  constructor() {

    this.cycle =
      new ARCCycleOrchestrator();
  }

  process(
    reality: string,
    governanceInput: ARCGovernanceInput
  ) {

    return this.cycle.process(
      reality,
      governanceInput
    );
  }
}
