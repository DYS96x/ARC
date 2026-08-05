import { PatternAdaptationEngine } from "./PatternAdaptationEngine";
import { DecisionFeedbackEngine } from "./DecisionFeedbackEngine";


export class IntelligenceCoordinator {


  private patterns: PatternAdaptationEngine;

  private feedback: DecisionFeedbackEngine;



  constructor() {

    this.patterns =
      new PatternAdaptationEngine();


    this.feedback =
      new DecisionFeedbackEngine();

  }



  process(
    memory: any
  ) {


    const pattern =
      this.patterns.learn(
        memory
      );



    const recommendation =
      this.feedback.analyse(
        pattern
      );



    return {

      pattern,

      recommendation

    };

  }



  getPatterns() {

    return this.patterns.getPatterns();

  }



  getFeedback() {

    return this.feedback.getFeedback();

  }


}