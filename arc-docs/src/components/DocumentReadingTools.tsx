"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { DocumentEntry } from "@/lib/documents";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type DocumentReadingToolsProps = {
  current: DocumentEntry;
  previous?: DocumentEntry;
  next?: DocumentEntry;
  position: number;
  total: number;
};

export function DocumentReadingTools({
  current,
  previous,
  next,
  position,
  total,
}: DocumentReadingToolsProps) {
  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = document.querySelector(".arc-prose");

    if (!article) {
      return;
    }

    const foundHeadings = Array.from(
      article.querySelectorAll<HTMLHeadingElement>("h1, h2, h3"),
    ).map((heading, index) => {
      const fallbackId = `section-${index + 1}`;
      const id = heading.id || fallbackId;

      heading.id = id;

      return {
        id,
        text: heading.textContent?.trim() || `Section ${index + 1}`,
        level: Number(heading.tagName.slice(1)),
      };
    });

    setHeadings(foundHeadings);

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const nextProgress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, [current.slug]);

  const visibleHeadings = useMemo(
    () => headings.filter((heading) => heading.level <= 2),
    [headings],
  );

  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-cyan-300 transition-[width]"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="mb-8 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/35">
        <span>
          Document {position} of {total}
        </span>

        <span>{current.section}</span>
      </div>

      {visibleHeadings.length > 0 && (
        <aside className="mb-10 rounded-xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            On this page
          </p>

          <nav className="mt-4 grid gap-2 md:grid-cols-2">
            {visibleHeadings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="text-sm leading-6 text-white/50 transition hover:text-white"
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </aside>
      )}

      <nav className="mt-16 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/docs/${previous.slug}`}
            className="group rounded-xl border border-white/10 p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.025]"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/35">
              <ArrowLeft size={14} />
              Previous
            </span>

            <span className="mt-3 block font-semibold text-white group-hover:text-cyan-100">
              {previous.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={`/docs/${next.slug}`}
            className="group rounded-xl border border-white/10 p-5 text-right transition hover:border-cyan-300/35 hover:bg-white/[0.025]"
          >
            <span className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.18em] text-white/35">
              Next
              <ArrowRight size={14} />
            </span>

            <span className="mt-3 block font-semibold text-white group-hover:text-cyan-100">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </>
  );
}
