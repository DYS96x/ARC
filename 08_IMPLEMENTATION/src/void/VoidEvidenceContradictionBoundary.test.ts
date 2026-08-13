import {
  VoidEvidenceContradictionBoundary
} from "./VoidEvidenceContradictionBoundary";

describe(
  "VOID Evidence Contradiction Boundary",
  () => {

    const observedAt =
      new Date("2026-08-13T00:00:00.000Z");

    it(
      "detects structural disagreement between comparable evidence",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "21",
              observedAt,
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "27",
              observedAt,
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("CONFLICT_PRESENT");

        expect(result.evidenceA.value)
          .toBe("21");

        expect(result.evidenceB.value)
          .toBe("27");
      }
    );


    it(
      "does not create a conflict when comparable evidence agrees",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "21",
              observedAt,
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "21",
              observedAt,
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("NO_CONFLICT");
      }
    );


    it(
      "refuses to compare structurally different observations",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "21",
              observedAt,
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_B",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "27",
              observedAt,
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("NOT_COMPARABLE");
      }
    );


    it(
      "preserves both records without adjudicating truth",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "STATE",
              scope: "OBSERVATION_001",
              value: "OPEN",
              observedAt,
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_A",
              property: "STATE",
              scope: "OBSERVATION_001",
              value: "CLOSED",
              observedAt,
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("CONFLICT_PRESENT");

        expect(result.evidenceA.value)
          .toBe("OPEN");

        expect(result.evidenceB.value)
          .toBe("CLOSED");

        expect(
          "winner" in result
        ).toBe(false);

        expect(
          "truth" in result
        ).toBe(false);

        expect(
          "correctEvidence" in result
        ).toBe(false);

        expect(
          "confidenceAdjustment" in result
        ).toBe(false);

        expect(
          "recommendation" in result
        ).toBe(false);

        expect(
          "explanation" in result
        ).toBe(false);
      }
    );


    it(
      "does not compare observations from different times",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "21",
              observedAt:
                new Date("2026-08-13T00:00:00.000Z"),
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "SENSOR_WINDOW_001",
              value: "27",
              observedAt:
                new Date("2026-08-13T00:00:01.000Z"),
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("NOT_COMPARABLE");
      }
    );


    it(
      "does not compare different properties even when values disagree",
      () => {

        const boundary =
          new VoidEvidenceContradictionBoundary();

        const result =
          boundary.compare(
            {
              evidenceId: "EVIDENCE-A",
              subject: "ROOM_A",
              property: "TEMPERATURE",
              scope: "OBSERVATION_001",
              value: "21",
              observedAt,
              source: "SENSOR-A"
            },
            {
              evidenceId: "EVIDENCE-B",
              subject: "ROOM_A",
              property: "HUMIDITY",
              scope: "OBSERVATION_001",
              value: "60",
              observedAt,
              source: "SENSOR-B"
            }
          );

        expect(result.status)
          .toBe("NOT_COMPARABLE");
      }
    );
  }
);
