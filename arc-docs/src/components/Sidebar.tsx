"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Home, Search, X } from "lucide-react";
import { documents, sections } from "@/lib/documents";

export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredDocuments = useMemo(() => {
    if (!normalizedQuery) {
      return documents;
    }

    return documents.filter((document) => {
      const searchableText = [
        document.title,
        document.description,
        document.section,
        document.slug,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const visibleSections = sections.filter((section) =>
    filteredDocuments.some((document) => document.section === section),
  );

  return (
    <aside className="border-r border-white/10 bg-black/60 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      <div className="px-5 py-7">
        <Link href="/" className="block">
          <div className="text-xs font-semibold tracking-[0.35em] text-cyan-300">
            SYSTEMS STUDIO
          </div>

          <div className="mt-2 text-2xl font-semibold tracking-[0.18em] text-white">
            ARC
          </div>
        </Link>

        <div className="relative mt-7">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35"
          />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search ARC..."
            aria-label="Search ARC documents"
            className="w-full rounded-lg border border-white/10 bg-white/[0.035] py-2.5 pl-10 pr-9 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:bg-white/[0.055]"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <nav className="mt-5">
          <Link
            href="/"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
              pathname === "/"
                ? "bg-cyan-300/10 text-cyan-200"
                : "text-white/65 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Home size={15} />
            Overview
          </Link>

          <div className="mt-7 space-y-7">
            {visibleSections.map((section) => {
              const sectionDocuments = filteredDocuments.filter(
                (document) => document.section === section,
              );

              return (
                <section key={section}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    {section}
                  </h2>

                  <div className="space-y-1">
                    {sectionDocuments.map((document) => {
                      const href = `/docs/${document.slug}`;
                      const isActive = pathname === href;

                      return (
                        <Link
                          key={document.slug}
                          href={href}
                          className={`block rounded-md border-l-2 px-3 py-2 text-sm transition ${
                            isActive
                              ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                              : "border-transparent text-white/65 hover:border-white/20 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {document.title}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <p className="text-sm font-medium text-white">
                No documents found
              </p>

              <p className="mt-1 text-xs leading-5 text-white/45">
                Try another title, engine, platform, or concept.
              </p>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
}
