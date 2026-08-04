export type DocumentEntry = {
  title: string;
  description: string;
  section: string;
  slug: string;
  file: string;
};

export const documents: DocumentEntry[] = [
  {
    title: "ARC Constitution",
    description: "The highest governing authority of ARC.",
    section: "Foundation",
    slug: "arc-constitution",
    file: "foundation/arc-constitution.md",
  },
  {
    title: "ARC Manifesto",
    description: "Why ARC exists and what it is building.",
    section: "Foundation",
    slug: "arc-manifesto",
    file: "foundation/arc-manifesto.md",
  },
  {
    title: "ARC Principles",
    description: "The permanent principles governing ARC decisions.",
    section: "Foundation",
    slug: "arc-principles",
    file: "foundation/arc-principles.md",
  },
  {
    title: "Mission",
    description: "ARC's central purpose.",
    section: "Foundation",
    slug: "mission",
    file: "foundation/mission.md",
  },
  {
    title: "Vision",
    description: "ARC's intended long-term position.",
    section: "Foundation",
    slug: "vision",
    file: "foundation/vision.md",
  },
  {
    title: "Engineering Standards",
    description: "Non-negotiable rules for ARC engineering.",
    section: "Foundation",
    slug: "engineering-standards",
    file: "foundation/engineering-standards.md",
  },
  {
    title: "ARC Lexicon",
    description: "The official language and terminology of ARC.",
    section: "Foundation",
    slug: "arc-lexicon",
    file: "foundation/arc-lexicon.md",
  },
  {
    title: "Studio Operating System",
    description: "How ARC thinks, decides, builds, and learns.",
    section: "Studio",
    slug: "studio-operating-system",
    file: "studio/studio-operating-system.md",
  },
  {
    title: "Business Model",
    description: "How ARC creates and captures commercial value.",
    section: "Business",
    slug: "business-model",
    file: "business/business-model.md",
  },
  {
    title: "Services",
    description: "ARC's productised service architecture.",
    section: "Services",
    slug: "services",
    file: "services/services.md",
  },
  {
    title: "Client Journey",
    description: "The complete ARC client experience.",
    section: "Services",
    slug: "client-journey",
    file: "services/client-journey.md",
  },
  {
    title: "ARC Methodology",
    description: "ARC's process for discovering truth and designing systems.",
    section: "Methodology",
    slug: "arc-methodology",
    file: "methodology/arc-methodology.md",
  },
  {
    title: "Platform Strategy",
    description: "How ARC platforms strengthen one connected portfolio.",
    section: "Platforms",
    slug: "platform-strategy",
    file: "platforms/platform-strategy.md",
  },
  {
    title: "ARC Core Framework",
    description: "The reusable foundation inherited by every ARC platform.",
    section: "Platforms",
    slug: "arc-core-framework",
    file: "platforms/arc-core-framework.md",
  },
  {
    title: "Identity Engine",
    description: "Identity, organisation, role, and session ownership.",
    section: "Core Engines",
    slug: "identity-engine",
    file: "platforms/identity-engine.md",
  },
  {
    title: "Security Engine",
    description: "Access, privacy, threat, and trust architecture.",
    section: "Core Engines",
    slug: "security-engine",
    file: "platforms/security-engine.md",
  },
  {
    title: "Knowledge Engine",
    description: "Organisational memory and validated knowledge.",
    section: "Core Engines",
    slug: "knowledge-engine",
    file: "platforms/knowledge-engine.md",
  },
  {
    title: "Workflow Engine",
    description: "Work ownership, state, approvals, and movement.",
    section: "Core Engines",
    slug: "workflow-engine",
    file: "platforms/workflow-engine.md",
  },
  {
    title: "Intelligence Engine",
    description: "Bounded AI reasoning and decision support.",
    section: "Core Engines",
    slug: "intelligence-engine",
    file: "platforms/intelligence-engine.md",
  },
  {
    title: "Analytics Engine",
    description: "Events, measurement, visibility, and learning.",
    section: "Core Engines",
    slug: "analytics-engine",
    file: "platforms/analytics-engine.md",
  },
  {
    title: "Architecture Blueprint",
    description: "How all ARC engines connect as one living system.",
    section: "Architecture",
    slug: "arc-architecture-blueprint",
    file: "architecture/arc-architecture-blueprint.md",
  },
  {
    title: "Engine Contracts",
    description: "Formal agreements and boundaries between ARC engines.",
    section: "Architecture",
    slug: "arc-engine-contracts",
    file: "architecture/arc-engine-contracts.md",
  },
  {
    title: "Knowledge Graph",
    description: "The connected organisational intelligence model.",
    section: "Knowledge",
    slug: "arc-knowledge-graph",
    file: "knowledge/arc-knowledge-graph.md",
  },
];

export function getDocument(slug: string): DocumentEntry | undefined {
  return documents.find((document) => document.slug === slug);
}

export const sections = Array.from(
  new Set(documents.map((document) => document.section)),
);
