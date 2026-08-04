export class ChallengeEngine {


  challenge(
    input: {
      evidence: number;
      confidence: number;
    }
  ): string {


    if (
      input.evidence >= 0.7 &&
      input.evidence >= input.confidence
    ) {

      return "validated";

    }


    return "challenged";

  }


}