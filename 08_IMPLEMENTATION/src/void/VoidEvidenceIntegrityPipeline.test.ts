import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

import {
  VoidEvidenceComparisonAdapter
} from "./VoidEvidenceComparisonAdapter";

import {
  VoidEvidenceContradictionBoundary
} from "./VoidEvidenceContradictionBoundary";

import {
  VoidEvidenceIntegrityBoundary
} from "./VoidEvidenceIntegrityBoundary";

describe(
  "VOID Evidence Integrity Pipeline",
  () => {

    it(
      "protects two observations and detects structural contradiction without adjudicating truth",
      async () => {

        const protection =
          new VoidRealityEvidenceBoundary();

        const adapter =
          new VoidEvidenceComparisonAdapter();

        const contradiction =
          new VoidEvidenceContradictionBoundary();

        const integrity =
          new VoidEvidenceIntegrityBoundary();

        const observedAt =
          new Date(
            "2026-08-13T00:00:00.000Z"
          );

        const protectedA =
          protection.protect({
            decision:
              "OBSERVATION-A",
            action:
              "READ SENSOR",
            expectedOutcome:
              "Temperature reading",
            actualOutcome:
              "21",
            provenance: {
              source:
                "SENSOR-A",
              observedAt
            }
          });

        const protectedB =
          protection.protect({
            decision:
              "OBSERVATION-B",
            action:
              "READ SENSOR",
            expectedOutcome:
              "Temperature reading",
            actualOutcome:
              "27",
            provenance: {
              source:
                "SENSOR-B",
              observedAt
            }
          });

        const integrityProtectedA =
          await integrity.protect(
            protectedA
          );

        const integrityProtectedB =
          await integrity.protect(
            protectedB
          );

        const fingerprintABefore =
          integrityProtectedA.fingerprint;

        const fingerprintBBefore =
          integrityProtectedB.fingerprint;

        const comparableA =
          adapter.adapt(
            protectedA,
            {
              subject:
                "ROOM_A",
              property:
                "TEMPERATURE",
              scope:
                "SENSOR_WINDOW_001",
              value:
                protectedA.actualOutcome
            }
          );

        const comparableB =
          adapter.adapt(
            protectedB,
            {
              subject:
                "ROOM_A",
              property:
                "TEMPERATURE",
              scope:
                "SENSOR_WINDOW_001",
              value:
                protectedB.actualOutcome
            }
          );

        expect(comparableA.evidenceId)
          .toBe(
            protectedA.evidenceId
          );

        expect(comparableB.evidenceId)
          .toBe(
            protectedB.evidenceId
          );

        expect(
          comparableA.evidenceId
        ).not.toBe(
          comparableB.evidenceId
        );

        const result =
          contradiction.compare(
            comparableA,
            comparableB
          );

        const verificationA =
          await integrity.verify(
            integrityProtectedA
          );

        const verificationB =
          await integrity.verify(
            integrityProtectedB
          );

        expect(result.status)
          .toBe("CONFLICT_PRESENT");

        expect(verificationA.status)
          .toBe("UNCHANGED");

        expect(verificationB.status)
          .toBe("UNCHANGED");

        expect(
          verificationA.actualFingerprint
        ).toBe(fingerprintABefore);

        expect(
          verificationB.actualFingerprint
        ).toBe(fingerprintBBefore);

        expect(result.evidenceA.source)
          .toBe("SENSOR-A");

        expect(result.evidenceB.source)
          .toBe("SENSOR-B");

        expect(result.evidenceA.observedAt)
          .toBe(observedAt);

        expect(result.evidenceB.observedAt)
          .toBe(observedAt);

        expect(result.evidenceA.value)
          .toBe("21");

        expect(result.evidenceB.value)
          .toBe("27");

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
          "preferredSource" in result
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
      "refuses contradiction detection when protected observations are not structurally comparable",
      async () => {

        const protection =
          new VoidRealityEvidenceBoundary();

        const adapter =
          new VoidEvidenceComparisonAdapter();

        const contradiction =
          new VoidEvidenceContradictionBoundary();

        const integrity =
          new VoidEvidenceIntegrityBoundary();

        const observedAt =
          new Date(
            "2026-08-13T01:00:00.000Z"
          );

        const protectedA =
          protection.protect({
            decision:
              "OBSERVATION-A",
            action:
              "READ SENSOR",
            expectedOutcome:
              "Observed state",
            actualOutcome:
              "OPEN",
            provenance: {
              source:
                "SENSOR-A",
              observedAt
            }
          });

        const protectedB =
          protection.protect({
            decision:
              "OBSERVATION-B",
            action:
              "READ SENSOR",
            expectedOutcome:
              "Observed state",
            actualOutcome:
              "CLOSED",
            provenance: {
              source:
                "SENSOR-B",
              observedAt
            }
          });

        const integrityProtectedA =
          await integrity.protect(
            protectedA
          );

        const integrityProtectedB =
          await integrity.protect(
            protectedB
          );

        const fingerprintABefore =
          integrityProtectedA.fingerprint;

        const fingerprintBBefore =
          integrityProtectedB.fingerprint;

        const comparableA =
          adapter.adapt(
            protectedA,
            {
              subject:
                "DOOR_A",
              property:
                "STATE",
              scope:
                "OBSERVATION_001",
              value:
                protectedA.actualOutcome
            }
          );

        const comparableB =
          adapter.adapt(
            protectedB,
            {
              subject:
                "DOOR_B",
              property:
                "STATE",
              scope:
                "OBSERVATION_001",
              value:
                protectedB.actualOutcome
            }
          );

        expect(comparableA.evidenceId)
          .toBe(
            protectedA.evidenceId
          );

        expect(comparableB.evidenceId)
          .toBe(
            protectedB.evidenceId
          );

        expect(
          comparableA.evidenceId
        ).not.toBe(
          comparableB.evidenceId
        );

        const result =
          contradiction.compare(
            comparableA,
            comparableB
          );

        expect(result.status)
          .toBe("NOT_COMPARABLE");

        expect(result.evidenceA.value)
          .toBe("OPEN");

        expect(result.evidenceB.value)
          .toBe("CLOSED");
      }
    );

  }
);
