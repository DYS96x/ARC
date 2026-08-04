import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Shield,
  Network,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-20">
      <section className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          ARC SYSTEMS STUDIO
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-tight tracking-tight text-white">
          We design systems
          <br />
          before technology.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">
          The living constitution, operating system, methodology,
          architecture, and knowledge foundation behind ARC.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            id="constitution-button"
            href="/docs/arc-constitution"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold transition-all duration-200"
          >
            <span>Read the Constitution</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/docs/arc-architecture-blueprint"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-medium text-white transition-all duration-200 hover:border-cyan-300 hover:text-cyan-300"
          >
            Explore the Architecture
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <FeatureCard
          icon={<Shield size={24} />}
          title="Identity"
          description="Every action begins with accountable identity."
        />

        <FeatureCard
          icon={<BookOpen size={24} />}
          title="Knowledge"
          description="Validated knowledge compounds into organisational memory."
        />

        <FeatureCard
          icon={<Brain size={24} />}
          title="Intelligence"
          description="Bounded intelligence transforms trusted knowledge into decisions."
        />

        <FeatureCard
          icon={<Network size={24} />}
          title="Architecture"
          description="Clear relationships create trustworthy systems."
        />
      </section>
    </main>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
      <div className="text-cyan-300">
        {icon}
      </div>

      <h2 className="mt-6 text-3xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-white/60">
        {description}
      </p>
    </div>
  );
}