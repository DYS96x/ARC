import {
  VoidEvidenceLineageBoundary
} from "./VoidEvidenceLineageBoundary";


describe(
  "VOID Evidence Lineage Boundary",
  () => {

    it(
      "preserves an explicit evidence lineage relationship",
      () => {

        const boundary =
          new VoidEvidenceLineageBoundary();

        const lineage =
          boundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          });

        expect(lineage.evidenceId)
          .toBe("EVIDENCE-B");

        expect(lineage.relatedEvidenceId)
          .toBe("EVIDENCE-A");

        expect(lineage.relation)
          .toBe("DERIVED_FROM");

        expect(lineage.recordedAt)
          .toBeInstanceOf(Date);
      }
    );


    it(
      "preserves an observed-from relationship without interpreting it",
      () => {

        const boundary =
          new VoidEvidenceLineageBoundary();

        const lineage =
          boundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "OBSERVED_FROM"
          });

        expect(lineage.relation)
          .toBe("OBSERVED_FROM");

        expect(
          "truth" in lineage
        ).toBe(false);

        expect(
          "confidence" in lineage
        ).toBe(false);

        expect(
          "explanation" in lineage
        ).toBe(false);

        expect(
          "recommendation" in lineage
        ).toBe(false);

        expect(
          "preferredEvidence" in lineage
        ).toBe(false);

        expect(
          "authority" in lineage
        ).toBe(false);
      }
    );


    it(
      "does not invent evidence identities",
      () => {

        const boundary =
          new VoidEvidenceLineageBoundary();

        const lineage =
          boundary.record({
            evidenceId:
              "PROTECTED-EVIDENCE-002",
            relatedEvidenceId:
              "PROTECTED-EVIDENCE-001",
            relation:
              "DERIVED_FROM"
          });

        expect(lineage.evidenceId)
          .toBe(
            "PROTECTED-EVIDENCE-002"
          );

        expect(lineage.relatedEvidenceId)
          .toBe(
            "PROTECTED-EVIDENCE-001"
          );
      }
    );


    it(
      "rejects direct self-reference",
      () => {

        const boundary =
          new VoidEvidenceLineageBoundary();

        expect(
          () =>
            boundary.record({
              evidenceId:
                "EVIDENCE-A",
              relatedEvidenceId:
                "EVIDENCE-A",
              relation:
                "DERIVED_FROM"
            })
        ).toThrow(
          "EVIDENCE_LINEAGE_SELF_REFERENCE"
        );
      }
    );


    it(
      "does not convert lineage into interpretation or authority",
      () => {

        const boundary =
          new VoidEvidenceLineageBoundary();

        const lineage =
          boundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          });

        expect(
          "cause" in lineage
        ).toBe(false);

        expect(
          "meaning" in lineage
        ).toBe(false);

        expect(
          "success" in lineage
        ).toBe(false);

        expect(
          "confidenceAdjustment" in lineage
        ).toBe(false);

        expect(
          "correctEvidence" in lineage
        ).toBe(false);

        expect(
          "approval" in lineage
        ).toBe(false);
      }
    );

  }
);
