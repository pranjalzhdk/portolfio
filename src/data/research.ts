export type ResearchItem = {
  id: string;
  title: string;
  type: "experiment" | "study" | "exploration" | "concept";
  year: string;
  summary: string;
  tags: string[];
  connections: string[];
};

export const researchItems: ResearchItem[] = [
  {
    id: "haptic-semantics",
    title: "Haptic Semantics",
    type: "experiment",
    year: "2025",
    summary:
      "Mapping emotional meaning to haptic patterns — exploring how vibration intensity, rhythm, and texture communicate urgency, success, and warmth.",
    tags: ["Haptics", "Accessibility", "Motion"],
    connections: ["aurora-banking", "echo-social"],
  },
  {
    id: "scroll-architecture",
    title: "Scroll Architecture",
    type: "exploration",
    year: "2025",
    summary:
      "A framework for designing scroll-driven narratives where content transformation carries semantic meaning, not just visual flair.",
    tags: ["Scroll", "Narrative", "Web"],
    connections: ["muse-archive"],
  },
  {
    id: "trust-signals",
    title: "Trust Signal Taxonomy",
    type: "study",
    year: "2024",
    summary:
      "Ethnographic study of 18 users interacting with financial and health interfaces — cataloguing micro-interactions that build or erode trust.",
    tags: ["Trust", "Research", "Fintech"],
    connections: ["aurora-banking", "flow-health"],
  },
  {
    id: "spatial-wayfinding",
    title: "Spatial Wayfinding Patterns",
    type: "study",
    year: "2024",
    summary:
      "Comparative analysis of orientation systems in 3D interfaces — breadcrumbs, mini-maps, and ambient cues tested with 32 participants.",
    tags: ["Spatial", "Navigation", "3D"],
    connections: ["muse-archive"],
  },
  {
    id: "gesture-vocabulary",
    title: "Gesture Vocabulary",
    type: "concept",
    year: "2024",
    summary:
      "A proposed design language for touch gestures that balances discoverability with efficiency — tested across mobile banking and social contexts.",
    tags: ["Gestures", "Mobile", "Systems"],
    connections: ["aurora-banking", "echo-social"],
  },
  {
    id: "ambient-presence",
    title: "Ambient Presence",
    type: "experiment",
    year: "2023",
    summary:
      "Prototypes exploring how teams perceive collaboration without surveillance — subtle visual pulses, state trails, and async handoff rituals.",
    tags: ["Collaboration", "Async", "Workplace"],
    connections: ["nexus-workspace"],
  },
  {
    id: "error-emotion",
    title: "Error as Emotion",
    type: "exploration",
    year: "2023",
    summary:
      "Reframing error states as emotional moments — designing recovery flows that acknowledge frustration before offering solutions.",
    tags: ["Errors", "Emotion", "UX Writing"],
    connections: ["aurora-banking", "flow-health"],
  },
  {
    id: "typography-motion",
    title: "Typography in Motion",
    type: "experiment",
    year: "2023",
    summary:
      "Exploring how kinetic typography affects comprehension and emotional response — timing, easing, and reveal patterns for editorial interfaces.",
    tags: ["Typography", "Motion", "Editorial"],
    connections: ["muse-archive", "echo-social"],
  },
];

export const researchFilters = [
  "all",
  "experiment",
  "study",
  "exploration",
  "concept",
] as const;

export type ResearchFilter = (typeof researchFilters)[number];
