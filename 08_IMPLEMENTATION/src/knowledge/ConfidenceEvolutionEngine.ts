export interface ConfidenceRecord {

  decision: string;

  confidence: number;

  attempts: number;

}



export class ConfidenceEvolutionEngine {


  private records: ConfidenceRecord[];



  constructor() {

    this.records = [];

  }



  update(
    decision: string,
    adjustment: number
  ): ConfidenceRecord {


    let record =
      this.records.find(
        item =>
          item.decision === decision
      );



    if (!record) {


      record = {

        decision,

        confidence:
          0.5,

        attempts:
          0

      };


      this.records.push(
        record
      );

    }



    record.confidence =
      Number(
        (
          record.confidence +
          adjustment
        )
        .toFixed(2)
      );



    record.attempts += 1;



    return record;

  }



  getRecords() {

    return this.records;

  }


}