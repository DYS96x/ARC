import {
  VoidRealityEvidenceBoundary
} from "./VoidRealityEvidenceBoundary";

import {
  VoidEvidenceLineageBoundary
} from "./VoidEvidenceLineageBoundary";

import {
  VoidEvidenceLineageIntegrityBoundary
} from "./VoidEvidenceLineageIntegrityBoundary";


describe(
  "VOID Protected Evidence Lineage Pipeline",
  () => {

    const buildProtectedEvidence =
      (
        decision: string,
        actualOutcome: string
      ) => {

        const reality =
          new VoidRealityEvidenceBoundary();

        return reality.protect({
          decision,
          action:
            "OBSERVE REALITY",
          expectedOutcome:
            "Expected state",
          actualOutcome,
          provenance: {
            source:
              "REALITY-OBSERVATION",
            observedAt:
              new Date(
                "2026-08-13T00:00:00.000Z"
              )
          }
        });
      };


    it(
      "records lineage using identities owned by protected reality evidence",
      () => {

        const lineage =
          new VoidEvidenceLineageBoundary();

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const evidenceA =
          buildProtectedEvidence(
            "DECISION-A",
            "OBSERVATION-A"
          );

        const evidenceB =
          buildProtectedEvidence(
            "DECISION-B",
            "OBSERVATION-B"
          );

        const relationship =
          lineage.record({
            evidenceId:
              evidenceB.evidenceId,
            relatedEvidenceId:
              evidenceA.evidenceId,
            relation:
              "DERIVED_FROM"
          });

        const result =
          integrity.inspect([
            relationship
          ]);

        expect(
          relationship.evidenceId
        ).toBe(
          evidenceB.evidenceId
        );

        expect(
          relationship.relatedEvidenceId
        ).toBe(
          evidenceA.evidenceId
        );

        expect(result.status)
          .toBe("VALID");

        expect(result.issues)
          .toEqual([]);
      }
    );


    it(
      "preserves a valid multi-record lineage chain using protected evidence identities",
      () => {

        const lineage =
          new VoidEvidenceLineageBoundary();

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const evidenceA =
          buildProtectedEvidence(
            "DECISION-A",
            "OBSERVATION-A"
          );

        const evidenceB =
          buildProtectedEvidence(
            "DECISION-B",
            "OBSERVATION-B"
          );

        const evidenceC =
          buildProtectedEvidence(
            "DECISION-C",
            "OBSERVATION-C"
          );

        const relationships = [
          lineage.record({
            evidenceId:
              evidenceC.evidenceId,
            relatedEvidenceId:
              evidenceB.evidenceId,
            relation:
              "DERIVED_FROM"
          }),
          lineage.record({
            evidenceId:
              evidenceB.evidenceId,
            relatedEvidenceId:
              evidenceA.evidenceId,
            relation:
              "DERIVED_FROM"
          })
        ];

        const result =
          integrity.inspect(
            relationships
          );

        expect(result.status)
          .toBe("VALID");

        expect(result.issues)
          .toEqual([]);

        expect(
          relationships[0].evidenceId
        ).toBe(
          evidenceC.evidenceId
        );

        expect(
          relationships[0].relatedEvidenceId
        ).toBe(
          evidenceB.evidenceId
        );

        expect(
          relationships[1].evidenceId
        ).toBe(
          evidenceB.evidenceId
        );

        expect(
          relationships[1].relatedEvidenceId
        ).toBe(
          evidenceA.evidenceId
        );
      }
    );


    it(
      "detects a cycle built from real protected evidence identities without adjudicating meaning",
      () => {

        const lineage =
          new VoidEvidenceLineageBoundary();

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const evidenceA =
          buildProtectedEvidence(
            "DECISION-A",
            "OBSERVATION-A"
          );

        const evidenceB =
          buildProtectedEvidence(
            "DECISION-B",
            "OBSERVATION-B"
          );

        const evidenceC =
          buildProtectedEvidence(
            "DECISION-C",
            "OBSERVATION-C"
          );

        const relationships = [
          lineage.record({
            evidenceId:
              evidenceA.evidenceId,
            relatedEvidenceId:
              evidenceB.evidenceId,
            relation:
              "DERIVED_FROM"
          }),
          lineage.record({
            evidenceId:
              evidenceB.evidenceId,
            relatedEvidenceId:
              evidenceC.evidenceId,
            relation:
              "DERIVED_FROM"
          }),
          lineage.record({
            evidenceId:
              evidenceC.evidenceId,
            relatedEvidenceId:
              evidenceA.evidenceId,
            relation:
              "DERIVED_FROM"
          })
        ];

        const result =
          integrity.inspect(
            relationships
          );

        expect(result.status)
          .toBe("INVALID");

        expect(result.issues)
          .toContain(
            "CYCLIC_RELATIONSHIP"
          );

        expect(
          "truth" in result
        ).toBe(false);

        expect(
          "cause" in result
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
          "authority" in result
        ).toBe(false);
      }
    );

  }
);
