import assert from "node:assert/strict";
import test from "node:test";
import { createReportSlug } from "../validator";

test("creates a safe report slug", () => {
  const slug = createReportSlug("Operating System Review");

  assert.equal(slug, "operating-system-review");
});