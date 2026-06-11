export type PlaygroundDemo = {
  id: string;
  title: string;
  description: string;
  type: "motion" | "interaction" | "concept" | "code";
};

export const playgroundDemos: PlaygroundDemo[] = [
  {
    id: "magnetic-type",
    title: "Magnetic Typography",
    description: "Letters respond to cursor proximity with spring physics.",
    type: "motion",
  },
  {
    id: "elastic-cursor",
    title: "Elastic Cursor",
    description: "A cursor that stretches toward interactive targets.",
    type: "interaction",
  },
  {
    id: "morph-button",
    title: "Morphing CTA",
    description: "Button states that morph rather than swap.",
    type: "concept",
  },
  {
    id: "particle-field",
    title: "Particle Field",
    description: "Ambient particles that react to scroll velocity.",
    type: "code",
  },
  {
    id: "scroll-reveal",
    title: "Scroll Reveal",
    description: "Text that assembles from fragments on scroll.",
    type: "motion",
  },
  {
    id: "toggle-physics",
    title: "Physics Toggle",
    description: "Switch with realistic spring damping and overshoot.",
    type: "interaction",
  },
];
