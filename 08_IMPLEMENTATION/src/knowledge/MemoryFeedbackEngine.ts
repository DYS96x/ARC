import { Memory } from "./Memory";


export class MemoryFeedbackEngine {



  confirm(
    memory: Memory
  ): Memory {


    return {

      ...memory,

      confirmations:
        memory.confirmations + 1,

      confidence:
        Math.min(
          Number(
            (
              memory.confidence + 0.05
            ).toFixed(2)
          ),
          1
        )

    };

  }




  weaken(
    memory: Memory
  ): Memory {


    return {

      ...memory,

      confidence:
        Math.max(
          Number(
            (
              memory.confidence - 0.05
            ).toFixed(2)
          ),
          0
        )

    };

  }




  applyOutcome(
    memory: Memory,
    outcome: {
      success: boolean;
    }
  ): Memory {


    if (outcome.success) {

      return this.confirm(
        memory
      );

    }


    return this.weaken(
      memory
    );

  }


}