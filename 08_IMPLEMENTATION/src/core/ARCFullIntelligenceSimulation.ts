import {
  ARCCycleOrchestrator,
  ARCGovernanceInput
} from "../cycle/ARCCycleOrchestrator";

import { RealityValidationEngine } from "../knowledge/RealityValidationEngine";
import { ConfidenceEvolutionEngine } from "../knowledge/ConfidenceEvolutionEngine";
import { DecisionIntelligenceEngine } from "../knowledge/DecisionIntelligenceEngine";
import { DecisionMemoryContext } from "../knowledge/DecisionMemoryIntegration";

export class ARCFullIntelligenceSimulation {

  private cycle:
    ARCCycleOrchestrator;

  private validation:
    RealityValidationEngine;

  private confidence:
    ConfidenceEvolutionEngine;

  private decision:
    DecisionIntelligenceEngine;

  constructor() {

    this.cycle =
      new ARCCycleOrchestrator();

    this.validation =
      new RealityValidationEngine();

    this.confidence =
      new ConfidenceEvolutionEngine();

    this.decision =
      new DecisionIntelligenceEngine();
  }

  run(
    reality: string,
    governanceInput: ARCGovernanceInput
  ) {

    const experience =
      this.cycle.process(
        reality,
        governanceInput
      );

    const decisionContext:
      DecisionMemoryContext =
      {
        relevantMemories: [],
        averageConfidence: 0.8,
        averageImpact: 0.7
      };

    const recommendation =
      this.decision.evaluate(
        "ACTION-A",
        decisionContext
      );

    return {
      experience,
      recommendation
    };
  }

  recordOutcome(
    decision: string,
    outcome: boolean
  ) {

    const validation =
      this.validation.validate(
        decision,
        outcome
      );

    const confidence =
      this.confidence.update(
        decision,
        validation.confidenceAdjustment
      );

    return {
      validation,
      confidence
    };
  }
}