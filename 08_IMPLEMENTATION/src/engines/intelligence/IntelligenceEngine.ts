/**
 * ARC Intelligence Engine
 *
 * Provides reasoning, recommendations
 * and decision support.
 */

import { EventBus } from "../../core/events/EventBus";


export interface IntelligenceOutput {

  id: string;

  request: string;

  recommendation: string;

  confidence: number;

  createdAt: Date;

}



export class IntelligenceEngine {


  private events: EventBus;


  private outputs: IntelligenceOutput[] = [];



  constructor(
    events?: EventBus
  ) {

    this.events =
      events ?? new EventBus();

  }



  /**
   * Generate intelligence output
   */
  generateRecommendation(
    request: string,
    recommendation: string,
    confidence: number
  ): IntelligenceOutput {


    const output: IntelligenceOutput = {

      id:
        crypto.randomUUID(),

      request,

      recommendation,

      confidence,

      createdAt:
        new Date()

    };


    this.outputs.push(output);



    this.events.publish({

      id:
        `EVENT-${Date.now()}`,

      type:
        "intelligence.generated",

      sourceId:
        output.id,

      payload:
        {
          ...output
        },

      timestamp:
        new Date()

    });



    return output;

  }




  /**
   * Generate intelligence from knowledge
   */
  generateFromKnowledge(
    knowledge: {
      id: string;
      type: string;
      title: string;
      description: string;
      source?: string;
      confidence: number;
      createdAt: Date;
      updatedAt: Date;
      relationships: string[];
    }
  ): IntelligenceOutput {


    const output: IntelligenceOutput = {

      id:
        crypto.randomUUID(),

      request:
        `Analyse knowledge: ${knowledge.title}`,

      recommendation:
        "Knowledge supports action",

      confidence:
        knowledge.confidence,

      createdAt:
        new Date()

    };


    this.outputs.push(output);



    this.events.publish({

      id:
        `EVENT-${Date.now()}`,

      type:
        "intelligence.generated",

      sourceId:
        output.id,

      payload:
        {
          ...output
        },

      timestamp:
        new Date()

    });



    return output;

  }




  validateOutcome(
    intelligence: IntelligenceOutput,
    outcome: {
      id: string;
      actionId: string;
      result: string;
      success: boolean;
      impact: number;
      learning: string;
      createdAt: Date;
    }
  ): string {


    if (
      outcome.success &&
      outcome.impact >= intelligence.confidence
    ) {

      return "confirmed";

    }


    if (
      outcome.impact >= 0.4
    ) {

      return "partial";

    }


    return "invalidated";

  }




  /**
   * Retrieve intelligence output
   */
  getOutput(
    id: string
  ): IntelligenceOutput | undefined {


    return this.outputs.find(
      output => output.id === id
    );

  }




  /**
   * Return all intelligence
   */
  getAll(): IntelligenceOutput[] {

    return this.outputs;

  }


}