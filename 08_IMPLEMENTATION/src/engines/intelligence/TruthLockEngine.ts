export class TruthLockEngine {


  lock(
    input: {
      confidence: number;
      validation: string;
    }
  ): string {


    if (
      input.validation === "validated" &&
      input.confidence >= 0.8
    ) {

      return "locked";

    }


    return "invalidated";

  }


}