export type SkillNode = {
  id: string;
  label: string;
  category: "research" | "design" | "motion" | "code" | "strategy";
  x: number;
  y: number;
  story: string;
  projects: string[];
};

export const skillNodes: SkillNode[] = [
  {
    id: "user-research",
    label: "User Research",
    category: "research",
    x: 20,
    y: 30,
    story:
      "Contextual inquiry, diary studies, and synthesis workshops — turning observation into actionable insight.",
    projects: ["flow-health", "aurora-banking"],
  },
  {
    id: "interaction-design",
    label: "Interaction Design",
    category: "design",
    x: 50,
    y: 20,
    story:
      "Designing the grammar of touch, gesture, and feedback — every interaction carries meaning.",
    projects: ["echo-social", "aurora-banking", "nexus-workspace"],
  },
  {
    id: "motion-design",
    label: "Motion Design",
    category: "motion",
    x: 75,
    y: 35,
    story:
      "Motion as communication — timing, easing, and choreography that guides without distracting.",
    projects: ["muse-archive", "aurora-banking"],
  },
  {
    id: "prototyping",
    label: "Prototyping",
    category: "design",
    x: 35,
    y: 55,
    story:
      "From paper to code — rapid iteration across fidelity levels to test hypotheses fast.",
    projects: ["nexus-workspace", "flow-health"],
  },
  {
    id: "service-design",
    label: "Service Design",
    category: "strategy",
    x: 15,
    y: 70,
    story:
      "Mapping ecosystems, touchpoints, and backstage processes into coherent experiences.",
    projects: ["flow-health"],
  },
  {
    id: "creative-coding",
    label: "Creative Coding",
    category: "code",
    x: 65,
    y: 65,
    story:
      "Three.js, React, and GSAP — building interactive experiences that push beyond static mockups.",
    projects: ["muse-archive"],
  },
  {
    id: "design-systems",
    label: "Design Systems",
    category: "strategy",
    x: 85,
    y: 55,
    story:
      "Scalable component libraries with behavioral patterns — consistency that enables creativity.",
    projects: ["nexus-workspace", "aurora-banking"],
  },
  {
    id: "accessibility",
    label: "Accessibility",
    category: "research",
    x: 45,
    y: 80,
    story:
      "Inclusive design as foundation — WCAG compliance woven into every interaction decision.",
    projects: ["flow-health", "aurora-banking"],
  },
];

export const skillConnections: [string, string][] = [
  ["user-research", "interaction-design"],
  ["interaction-design", "motion-design"],
  ["interaction-design", "prototyping"],
  ["prototyping", "creative-coding"],
  ["user-research", "service-design"],
  ["service-design", "accessibility"],
  ["motion-design", "design-systems"],
  ["interaction-design", "design-systems"],
  ["prototyping", "accessibility"],
  ["creative-coding", "motion-design"],
];

export const timeline = [
  {
    year: "2025",
    title: "Interaction Design MFA",
    org: "California College of the Arts",
    detail: "Thesis on motion semantics in financial interfaces.",
  },
  {
    year: "2024",
    title: "Design Intern → Associate",
    org: "Studio Meridian",
    detail: "Led research and interaction design for cultural and healthcare clients.",
  },
  {
    year: "2023",
    title: "UX Research Fellow",
    org: "Future Interfaces Lab",
    detail: "Explored haptic feedback patterns and spatial navigation systems.",
  },
  {
    year: "2022",
    title: "BFA Communication Design",
    org: "Rhode Island School of Design",
    detail: "Focus on interactive media and human-computer interaction.",
  },
  {
    year: "2021",
    title: "First design internship",
    org: "Local startup ecosystem",
    detail: "Discovered the intersection of research, motion, and code.",
  },
];
