import {
  VoidEvidenceLineageBoundary
} from "./VoidEvidenceLineageBoundary";

import {
  VoidEvidenceLineageIntegrityBoundary
} from "./VoidEvidenceLineageIntegrityBoundary";


describe(
  "VOID Evidence Lineage Integrity Boundary",
  () => {

    const lineageBoundary =
      new VoidEvidenceLineageBoundary();


    it(
      "accepts structurally valid lineage",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const lineage = [
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-C",
            relatedEvidenceId:
              "EVIDENCE-B",
            relation:
              "DERIVED_FROM"
          }),
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          })
        ];

        const result =
          integrity.inspect(lineage);

        expect(result.status)
          .toBe("VALID");

        expect(result.issues)
          .toEqual([]);
      }
    );


    it(
      "detects duplicate lineage relationships",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const first =
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          });

        const duplicate =
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          });

        const result =
          integrity.inspect([
            first,
            duplicate
          ]);

        expect(result.status)
          .toBe("INVALID");

        expect(result.issues)
          .toContain(
            "DUPLICATE_RELATIONSHIP"
          );
      }
    );


    it(
      "detects direct cyclic lineage",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const result =
          integrity.inspect([
            lineageBoundary.record({
              evidenceId:
                "EVIDENCE-A",
              relatedEvidenceId:
                "EVIDENCE-B",
              relation:
                "DERIVED_FROM"
            }),
            lineageBoundary.record({
              evidenceId:
                "EVIDENCE-B",
              relatedEvidenceId:
                "EVIDENCE-A",
              relation:
                "DERIVED_FROM"
            })
          ]);

        expect(result.status)
          .toBe("INVALID");

        expect(result.issues)
          .toContain(
            "CYCLIC_RELATIONSHIP"
          );
      }
    );


    it(
      "detects indirect cyclic lineage",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const result =
          integrity.inspect([
            lineageBoundary.record({
              evidenceId:
                "EVIDENCE-C",
              relatedEvidenceId:
                "EVIDENCE-B",
              relation:
                "DERIVED_FROM"
            }),
            lineageBoundary.record({
              evidenceId:
                "EVIDENCE-B",
              relatedEvidenceId:
                "EVIDENCE-A",
              relation:
                "DERIVED_FROM"
            }),
            lineageBoundary.record({
              evidenceId:
                "EVIDENCE-A",
              relatedEvidenceId:
                "EVIDENCE-C",
              relation:
                "DERIVED_FROM"
            })
          ]);

        expect(result.status)
          .toBe("INVALID");

        expect(result.issues)
          .toContain(
            "CYCLIC_RELATIONSHIP"
          );
      }
    );


    it(
      "preserves lineage while reporting structural issues",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const lineage = [
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-A",
            relatedEvidenceId:
              "EVIDENCE-B",
            relation:
              "DERIVED_FROM"
          }),
          lineageBoundary.record({
            evidenceId:
              "EVIDENCE-B",
            relatedEvidenceId:
              "EVIDENCE-A",
            relation:
              "DERIVED_FROM"
          })
        ];

        const result =
          integrity.inspect(lineage);

        expect(result.lineage)
          .toBe(lineage);

        expect(result.lineage)
          .toHaveLength(2);
      }
    );


    it(
      "does not convert structural lineage integrity into interpretation",
      () => {

        const integrity =
          new VoidEvidenceLineageIntegrityBoundary();

        const result =
          integrity.inspect([]);

        expect(
          "truth" in result
        ).toBe(false);

        expect(
          "cause" in result
        ).toBe(false);

        expect(
          "reliability" in result
        ).toBe(false);

        expect(
          "confidence" in result
        ).toBe(false);

        expect(
          "recommendation" in result
        ).toBe(false);

        expect(
          "preferredEvidence" in result
        ).toBe(false);

        expect(
          "authority" in result
        ).toBe(false);
      }
    );

  }
);
