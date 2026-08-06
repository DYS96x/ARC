export interface IntelligenceReflection {

  decision: string;

  expectedOutcome: number;

  actualOutcome: number;

  improvementRequired: boolean;

}


export class ARCIntelligenceReflectionEngine {


  private reflections: IntelligenceReflection[];



  constructor() {

    this.reflections = [];

  }



  reflect(

    decision: string,

    expectedOutcome: number,

    actualOutcome: number

  ): IntelligenceReflection {


    const reflection: IntelligenceReflection = {

      decision,

      expectedOutcome,

      actualOutcome,

      improvementRequired:
        actualOutcome < expectedOutcome

    };


    this.reflections.push(reflection);


    return reflection;

  }



  getReflections():

  IntelligenceReflection[] {

    return this.reflections;

  }



  getLatestReflection():

  IntelligenceReflection | undefined {

    return this.reflections[
      this.reflections.length - 1
    ];

  }


}