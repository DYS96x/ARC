import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { getDocument } from "@/lib/documents";

export async function loadDocument(slug: string) {
  const document = getDocument(slug);

  if (!document) {
    return null;
  }

  const fullPath = path.join(process.cwd(), "content", document.file);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(source);
  const html = await marked(parsed.content);

  return {
    ...document,
    metadata: parsed.data,
    html,
  };
}
