/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  AboutContent,
  HomepageContent,
  MediaAsset,
  PlaygroundDemo,
  Project,
  ResearchItem,
  SiteContent,
} from "@/lib/content/types";
import { getSanityImageUrl } from "./client";

type SanityDoc = Record<string, any> & { _id: string; _type: string };

const emptySections = {
  challenge: { headline: "", body: "", metrics: [] },
  research: { summary: "", findings: [], journeySteps: [], personas: [] },
  process: { phases: [] },
  prototypes: { title: "", description: "", interactions: [] },
  outcome: { headline: "", impact: [] },
  reflection: { lessons: [], nextSteps: "" },
};

export function mapSite(doc: SanityDoc): SiteContent {
  return {
    name: doc.name ?? "",
    role: doc.role ?? "",
    headline: doc.headline ?? "",
    statement: doc.statement ?? "",
    email: doc.email ?? "",
    location: doc.location ?? "",
    origin: doc.origin ?? "",
    education: doc.education ?? "",
    philosophy: doc.philosophy ?? "",
    social: doc.social ?? {},
    tools: doc.tools ?? [],
    interests: doc.interests ?? [],
    awards: doc.awards ?? [],
    updatedAt: doc._updatedAt,
  };
}

export function mapHomepage(doc: SanityDoc): HomepageContent {
  return {
    heroEyebrow: doc.heroEyebrow ?? "",
    heroHeadline: doc.heroHeadline ?? "",
    heroSubline: doc.heroSubline ?? "",
    heroStatement: doc.heroStatement ?? "",
    featuredProjectSlugs: doc.featuredProjectSlugs ?? [],
    featuredResearchIds: doc.featuredResearchIds ?? [],
    exhibitionIntro: doc.exhibitionIntro ?? "",
    researchIntro: doc.researchIntro ?? "",
    updatedAt: doc._updatedAt,
  };
}

export function mapAbout(doc: SanityDoc): AboutContent {
  return {
    biography: doc.biography ?? "",
    education: doc.education ?? [],
    experience: doc.experience ?? [],
    awards: doc.awards ?? [],
    skills: doc.skills ?? [],
    skillConnections: (doc.skillConnections ?? []).map(
      (c: { from: string; to: string }) => [c.from, c.to] as [string, string],
    ),
    updatedAt: doc._updatedAt,
  };
}

export function mapProject(doc: SanityDoc): Project {
  return {
    id: doc._id,
    slug: typeof doc.slug === "string" ? doc.slug : (doc.slug?.current ?? ""),
    title: doc.title ?? "",
    subtitle: doc.subtitle ?? "",
    year: doc.year ?? "",
    category: doc.category ?? "",
    role: doc.role ?? "",
    timeline: doc.timeline ?? "",
    color: doc.color ?? "#6366f1",
    position: doc.position ?? { x: 0, y: 0, z: 0 },
    excerpt: doc.excerpt ?? "",
    description: doc.description ?? "",
    tags: doc.tags ?? [],
    featured: doc.featured ?? false,
    status: doc.status ?? "draft",
    coverGradient: doc.coverGradient,
    keyOutcomes: doc.keyOutcomes ?? [],
    researchInsight: doc.researchInsight ?? "",
    sections: doc.sections ?? emptySections,
    updatedAt: doc._updatedAt,
  };
}

export function mapResearch(doc: SanityDoc): ResearchItem {
  return {
    id: doc._id,
    researchId: doc.researchId ?? doc._id,
    title: doc.title ?? "",
    type: doc.type ?? "exploration",
    year: doc.year ?? "",
    summary: doc.summary ?? "",
    methods: doc.methods ?? [],
    findings: doc.findings ?? [],
    insights: doc.insights ?? [],
    personas: doc.personas,
    journeySteps: doc.journeySteps,
    references: doc.references,
    tags: doc.tags ?? [],
    connections: doc.connections ?? [],
    status: doc.status ?? "draft",
    position: doc.position ?? { x: 50, y: 50 },
    updatedAt: doc._updatedAt,
  };
}

export function mapPlaygroundDemos(doc: SanityDoc | null): PlaygroundDemo[] {
  return doc?.demos ?? [];
}

export function mapMedia(doc: SanityDoc): MediaAsset {
  const url = doc.imageUrl ?? doc.fileUrl ?? getSanityImageUrl(doc.image?.asset?._ref) ?? "";
  return {
    id: doc._id,
    name: doc.name ?? "Untitled",
    url,
    category: doc.category ?? "general",
    mimeType: doc.mimeType ?? "application/octet-stream",
    size: doc.size ?? 0,
    createdAt: doc._createdAt ?? new Date().toISOString(),
  };
}
