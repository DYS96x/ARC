import {
  VoidEvidenceLineage
} from "./VoidEvidenceLineageBoundary";

export type VoidLineageIntegrityStatus =
  | "VALID"
  | "INVALID";

export type VoidLineageIntegrityIssue =
  | "DUPLICATE_RELATIONSHIP"
  | "CYCLIC_RELATIONSHIP";

export interface VoidLineageIntegrityResult {
  status: VoidLineageIntegrityStatus;
  issues: VoidLineageIntegrityIssue[];
  lineage: VoidEvidenceLineage[];
}

/**
 * VOID evidence-lineage integrity boundary.
 *
 * Inspects explicitly recorded lineage for structural
 * consistency.
 *
 * VOID may detect:
 * - duplicate lineage edges
 * - cyclic lineage structure
 *
 * VOID does not:
 * - infer missing lineage
 * - determine causality
 * - determine truth
 * - rank evidence
 * - determine reliability
 * - change confidence
 * - recommend interpretation
 * - grant authority
 *
 * Structural integrity is not semantic interpretation.
 *
 * Interpretation belongs to ARC.
 * Authority belongs to HOLY ARC.
 */
export class VoidEvidenceLineageIntegrityBoundary {

  inspect(
    lineage: VoidEvidenceLineage[]
  ): VoidLineageIntegrityResult {

    const issues =
      new Set<VoidLineageIntegrityIssue>();

    const relationships =
      new Set<string>();

    const adjacency =
      new Map<string, string[]>();

    for (const edge of lineage) {

      const relationshipKey =
        [
          edge.evidenceId,
          edge.relatedEvidenceId,
          edge.relation
        ].join("|");

      if (
        relationships.has(
          relationshipKey
        )
      ) {
        issues.add(
          "DUPLICATE_RELATIONSHIP"
        );
      }

      relationships.add(
        relationshipKey
      );

      const neighbours =
        adjacency.get(
          edge.evidenceId
        ) ?? [];

      neighbours.push(
        edge.relatedEvidenceId
      );

      adjacency.set(
        edge.evidenceId,
        neighbours
      );
    }

    if (
      this.hasCycle(adjacency)
    ) {
      issues.add(
        "CYCLIC_RELATIONSHIP"
      );
    }

    return {
      status:
        issues.size === 0
          ? "VALID"
          : "INVALID",
      issues:
        [...issues],
      lineage
    };
  }


  private hasCycle(
    adjacency: Map<string, string[]>
  ): boolean {

    const visiting =
      new Set<string>();

    const visited =
      new Set<string>();

    const visit =
      (node: string): boolean => {

        if (visiting.has(node)) {
          return true;
        }

        if (visited.has(node)) {
          return false;
        }

        visiting.add(node);

        for (
          const neighbour of
          adjacency.get(node) ?? []
        ) {
          if (visit(neighbour)) {
            return true;
          }
        }

        visiting.delete(node);
        visited.add(node);

        return false;
      };

    for (const node of adjacency.keys()) {
      if (visit(node)) {
        return true;
      }
    }

    return false;
  }
}
