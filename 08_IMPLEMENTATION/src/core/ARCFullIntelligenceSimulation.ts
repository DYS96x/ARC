import {
  ARCCycleOrchestrator,
  ARCGovernanceInput
} from "../cycle/ARCCycleOrchestrator";

import {
  RealityValidationEngine
} from "../knowledge/RealityValidationEngine";

import {
  ConfidenceEvolutionEngine
} from "../knowledge/ConfidenceEvolutionEngine";

import {
  DecisionIntelligenceEngine
} from "../knowledge/DecisionIntelligenceEngine";

import {
  DecisionMemoryContext
} from "../knowledge/DecisionMemoryIntegration";

import {
  ARCOutcomeRecorder,
  ARCObservedOutcome
} from "./ARCOutcomeRecorder";

import {
  VoidRealityEvidenceBoundary
} from "../void/VoidRealityEvidenceBoundary";

export class ARCFullIntelligenceSimulation {

  private cycle:
    ARCCycleOrchestrator;

  private validation:
    RealityValidationEngine;

  private confidence:
    ConfidenceEvolutionEngine;

  private decision:
    DecisionIntelligenceEngine;

  private outcomes:
    ARCOutcomeRecorder;

  private realityEvidence:
    VoidRealityEvidenceBoundary;

  constructor() {

    this.cycle =
      new ARCCycleOrchestrator();

    this.validation =
      new RealityValidationEngine();

    this.confidence =
      new ConfidenceEvolutionEngine();

    this.decision =
      new DecisionIntelligenceEngine();

    this.outcomes =
      new ARCOutcomeRecorder();

    this.realityEvidence =
      new VoidRealityEvidenceBoundary();
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
    observedOutcome: ARCObservedOutcome
  ) {

    const recorded =
      this.outcomes.record(
        observedOutcome
      );

    const protectedEvidence =
      this.realityEvidence.protect({
        decision:
          recorded.decision,
        action:
          recorded.action,
        expectedOutcome:
          recorded.expectedOutcome,
        actualOutcome:
          recorded.actualOutcome,
        provenance: {
          source:
            "ARC_OUTCOME_RECORDER",
          observedAt:
            recorded.observedAt
        }
      });

    const validation =
      this.validation.validate({
        decision:
          protectedEvidence.decision,
        expectedOutcome:
          protectedEvidence.expectedOutcome,
        actualOutcome:
          protectedEvidence.actualOutcome
      });

    const confidence =
      this.confidence.update(
        recorded.decision,
        validation.confidenceAdjustment
      );

    return {
      outcome:
        recorded,
      evidence:
        protectedEvidence,
      validation,
      confidence
    };
  }

  getRecordedOutcomes() {
    return this.outcomes.getOutcomes();
  }
}
