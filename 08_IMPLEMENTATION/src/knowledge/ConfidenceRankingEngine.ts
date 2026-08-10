import { ConfidenceEvolutionEngine } from "./ConfidenceEvolutionEngine";


export class ConfidenceRankingEngine {


  private confidence: ConfidenceEvolutionEngine;



  constructor(
    confidence: ConfidenceEvolutionEngine
  ) {

    this.confidence =
      confidence;

  }



  rank(
    decisions: string[]
  ) {


    const ranked =
      decisions.map(
        decision => {


          const history =
            this.confidence
            .getRecords()
            .find(
              item =>
                item.decision === decision
            );



          return {

            decision,


            confidence:
              history
              ? history.confidence
              : 0.5

          };


        }
      );



    return ranked.sort(
      (a,b) =>
        b.confidence -
        a.confidence
    );


  }


}