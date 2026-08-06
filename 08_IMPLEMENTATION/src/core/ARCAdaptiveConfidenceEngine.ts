export interface IntelligenceConfidence {


  route: string;

  confidence: number;

  updates: number;


}



export class ARCAdaptiveConfidenceEngine {


  private confidence:
    IntelligenceConfidence[];



  constructor() {

    this.confidence = [];

  }



  updateConfidence(

    route: string,

    score: number

  ): IntelligenceConfidence {


    let existing =
      this.confidence.find(

        item =>

          item.route === route

      );



    if (!existing) {


      existing = {


        route,

        confidence: score,

        updates: 1


      };


      this.confidence.push(
        existing
      );


      return existing;

    }



    existing.confidence =

      (

        existing.confidence +

        score

      ) / 2;



    existing.updates += 1;



    return existing;


  }



  getConfidence():

    IntelligenceConfidence[] {

    return this.confidence;

  }



  findRoute(

    route: string

  ): IntelligenceConfidence | undefined {


    return this.confidence.find(

      item =>

        item.route === route

    );


  }


}