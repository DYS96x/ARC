import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

import {
  VoidEvidenceComparisonAdapter
} from "./VoidEvidenceComparisonAdapter";

describe(
  "VOID Evidence Comparison Adapter",
  () => {

    it(
      "creates comparable evidence only from explicit comparison context",
      () => {

        const protection =
          new VoidRealityEvidenceBoundary();

        const adapter =
          new VoidEvidenceComparisonAdapter();

        const observedAt =
          new Date(
            "2026-08-13T00:00:00.000Z"
          );

        const protectedEvidence =
          protection.protect({
            decision:
              "DECISION-001",
            action:
              "OBSERVE ROOM",
            expectedOutcome:
              "Temperature remains stable",
            actualOutcome:
              "21",
            provenance: {
              source:
                "SENSOR-A",
              observedAt
            }
          });

        const comparable =
          adapter.adapt(
            protectedEvidence,
            {
              evidenceId:
                "EVIDENCE-001",
              subject:
                "ROOM_A",
              property:
                "TEMPERATURE",
              scope:
                "SENSOR_WINDOW_001",
              value:
                "21"
            }
          );

        expect(comparable)
          .toEqual({
            evidenceId:
              "EVIDENCE-001",
            subject:
              "ROOM_A",
            property:
              "TEMPERATURE",
            scope:
              "SENSOR_WINDOW_001",
            value:
              "21",
            observedAt,
            source:
              "SENSOR-A"
          });
      }
    );


    it(
      "preserves protected provenance rather than allowing comparison context to replace it",
      () => {

        const protection =
          new VoidRealityEvidenceBoundary();

        const adapter =
          new VoidEvidenceComparisonAdapter();

        const observedAt =
          new Date(
            "2026-08-13T01:00:00.000Z"
          );

        const protectedEvidence =
          protection.protect({
            decision:
              "DECISION-002",
            action:
              "OBSERVE STATE",
            expectedOutcome:
              "OPEN",
            actualOutcome:
              "CLOSED",
            provenance: {
              source:
                "SENSOR-TRUSTED-ORIGIN",
              observedAt
            }
          });

        const comparable =
          adapter.adapt(
            protectedEvidence,
            {
              evidenceId:
                "EVIDENCE-002",
              subject:
                "DOOR_A",
              property:
                "STATE",
              scope:
                "OBSERVATION_001",
              value:
                "CLOSED"
            }
          );

        expect(comparable.source)
          .toBe(
            "SENSOR-TRUSTED-ORIGIN"
          );

        expect(comparable.observedAt)
          .toBe(observedAt);
      }
    );


    it(
      "does not add interpretation or authority fields",
      () => {

        const protection =
          new VoidRealityEvidenceBoundary();

        const adapter =
          new VoidEvidenceComparisonAdapter();

        const protectedEvidence =
          protection.protect({
            decision:
              "DECISION-003",
            action:
              "OBSERVE",
            expectedOutcome:
              "EXPECTED",
            actualOutcome:
              "OBSERVED",
            provenance: {
              source:
                "SOURCE-A",
              observedAt:
                new Date()
            }
          });

        const comparable =
          adapter.adapt(
            protectedEvidence,
            {
              evidenceId:
                "EVIDENCE-003",
              subject:
                "SUBJECT-A",
              property:
                "PROPERTY-A",
              scope:
                "SCOPE-A",
              value:
                "OBSERVED"
            }
          );

        expect(
          "truth" in comparable
        ).toBe(false);

        expect(
          "winner" in comparable
        ).toBe(false);

        expect(
          "confidence" in comparable
        ).toBe(false);

        expect(
          "recommendation" in comparable
        ).toBe(false);

        expect(
          "authority" in comparable
        ).toBe(false);

        expect(
          "explanation" in comparable
        ).toBe(false);
      }
    );

  }
);
