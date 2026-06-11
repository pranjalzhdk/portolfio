export type ContentStatus = "draft" | "published" | "archived";

export type SiteContent = {
  name: string;
  role: string;
  headline: string;
  statement: string;
  email: string;
  location: string;
  origin: string;
  education: string;
  philosophy: string;
  social: { linkedin?: string; areNa?: string; github?: string; instagram?: string };
  tools: string[];
  interests: string[];
  awards?: string[];
  updatedAt?: string;
};

export type HomepageContent = {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubline: string;
  heroStatement: string;
  featuredProjectSlugs: string[];
  featuredResearchIds: string[];
  exhibitionIntro: string;
  researchIntro: string;
  updatedAt?: string;
};

export type Metric = { label: string; value: string };
export type Finding = { title: string; detail: string; stat?: string };
export type JourneyStep = { phase: string; insight: string };
export type Persona = { name: string; need: string; quote: string };
export type ProcessPhase = { title: string; duration: string; description: string };
export type Interaction = { name: string; detail: string };
export type Impact = { metric: string; change: string; context: string };

export type ProjectSection = {
  challenge: { headline: string; body: string; metrics: Metric[] };
  research: {
    summary: string;
    findings: Finding[];
    journeySteps: JourneyStep[];
    personas: Persona[];
  };
  process: { phases: ProcessPhase[] };
  prototypes: { title: string; description: string; interactions: Interaction[] };
  outcome: { headline: string; impact: Impact[] };
  reflection: { lessons: string[]; nextSteps: string };
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  role: string;
  timeline: string;
  color: string;
  position: { x: number; y: number; z: number };
  excerpt: string;
  description: string;
  tags: string[];
  featured: boolean;
  status: ContentStatus;
  coverGradient?: string;
  keyOutcomes: string[];
  researchInsight: string;
  sections: ProjectSection;
  updatedAt?: string;
};

export type ResearchItem = {
  id: string;
  researchId: string;
  title: string;
  type: "experiment" | "study" | "exploration" | "concept";
  year: string;
  summary: string;
  methods: string[];
  findings: string[];
  insights: string[];
  personas?: Persona[];
  journeySteps?: JourneyStep[];
  references?: string[];
  tags: string[];
  connections: string[];
  status: ContentStatus;
  position: { x: number; y: number };
  updatedAt?: string;
};

export type SkillNode = {
  id: string;
  label: string;
  category: "research" | "design" | "motion" | "code" | "strategy";
  x: number;
  y: number;
  story: string;
  projects: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  org: string;
  detail: string;
};

export type AboutContent = {
  biography: string;
  education: TimelineEntry[];
  experience: TimelineEntry[];
  awards: string[];
  skills: SkillNode[];
  skillConnections: [string, string][];
  updatedAt?: string;
};

export type PlaygroundDemo = {
  id: string;
  title: string;
  description: string;
  type: "motion" | "interaction" | "concept" | "code";
};

export type MediaAsset = {
  id: string;
  name: string;
  url: string;
  category: string;
  mimeType: string;
  size: number;
  createdAt: string;
};

export type PortfolioContent = {
  site: SiteContent;
  homepage: HomepageContent;
  about: AboutContent;
  projects: Project[];
  research: ResearchItem[];
  playground: PlaygroundDemo[];
  media: MediaAsset[];
};
