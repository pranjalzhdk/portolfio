export type ProjectSection = {
  challenge: {
    headline: string;
    body: string;
    metrics: { label: string; value: string }[];
  };
  research: {
    summary: string;
    findings: { title: string; detail: string; stat?: string }[];
    journeySteps: { phase: string; insight: string }[];
    personas: { name: string; need: string; quote: string }[];
  };
  process: {
    phases: { title: string; duration: string; description: string }[];
  };
  prototypes: {
    title: string;
    description: string;
    interactions: { name: string; detail: string }[];
  };
  outcome: {
    headline: string;
    impact: { metric: string; change: string; context: string }[];
  };
  reflection: {
    lessons: string[];
    nextSteps: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  color: string;
  position: { x: number; y: number; z: number };
  excerpt: string;
  tags: string[];
  sections: ProjectSection;
};

export const projects: Project[] = [
  {
    slug: "aurora-banking",
    title: "Aurora",
    subtitle: "Reimagining personal finance through calm interaction",
    year: "2025",
    category: "Product Design",
    color: "#6366f1",
    position: { x: -2.4, y: 0.8, z: -1.2 },
    excerpt:
      "A mobile banking experience that transforms anxiety into clarity through progressive disclosure and motion-led feedback.",
    tags: ["Mobile", "Fintech", "Motion"],
    sections: {
      challenge: {
        headline: "Money creates friction before users even tap a button.",
        body: "Young professionals reported feeling overwhelmed by traditional banking apps — dense dashboards, punitive error states, and notifications that amplified financial stress rather than reducing it.",
        metrics: [
          { label: "User anxiety score", value: "72%" },
          { label: "Task abandonment", value: "3.2× industry avg" },
          { label: "Research participants", value: "24" },
        ],
      },
      research: {
        summary:
          "Eight weeks of contextual inquiry, diary studies, and co-design sessions revealed that users don't want more data — they want better moments of understanding.",
        findings: [
          {
            title: "Emotional load peaks at login",
            detail: "Users scan balances before deciding whether to engage further.",
            stat: "89%",
          },
          {
            title: "Errors feel personal",
            detail: "Failed transfers triggered shame responses, not troubleshooting.",
          },
          {
            title: "Goals are aspirational, not numerical",
            detail: "Users think in life events, not account categories.",
          },
        ],
        journeySteps: [
          { phase: "Discover", insight: "Opens app with hesitation" },
          { phase: "Orient", insight: "Scans for anomalies first" },
          { phase: "Act", insight: "Prefers guided flows over free navigation" },
          { phase: "Reflect", insight: "Wants confirmation, not celebration" },
        ],
        personas: [
          {
            name: "Sofia, 28",
            need: "Clarity without judgment",
            quote: "I don't need my bank to cheer me on. I need it to be quiet and honest.",
          },
          {
            name: "Marcus, 31",
            need: "Confidence in complex actions",
            quote: "Every transfer feels like I'm doing something irreversible.",
          },
        ],
      },
      process: {
        phases: [
          {
            title: "Immersion",
            duration: "3 weeks",
            description: "Shadowed 12 users during real financial decisions.",
          },
          {
            title: "Synthesis",
            duration: "2 weeks",
            description: "Affinity mapping surfaced three emotional archetypes.",
          },
          {
            title: "Exploration",
            duration: "4 weeks",
            description: "40+ motion prototypes testing feedback timing.",
          },
          {
            title: "Validation",
            duration: "3 weeks",
            description: "A/B tested progressive disclosure vs. dashboard-first.",
          },
        ],
      },
      prototypes: {
        title: "Motion as reassurance",
        description:
          "Each interaction was prototyped as a conversation — asking what the system should say when the user pauses, hesitates, or succeeds.",
        interactions: [
          {
            name: "Breathing balance",
            detail: "Numbers settle with eased motion, reducing scan anxiety.",
          },
          {
            name: "Guided transfers",
            detail: "Step-by-step flow with reversible preview states.",
          },
          {
            name: "Gentle alerts",
            detail: "Notifications framed as suggestions, not warnings.",
          },
        ],
      },
      outcome: {
        headline: "Calm became the competitive advantage.",
        impact: [
          {
            metric: "Task completion",
            change: "+47%",
            context: "Transfer and payment flows",
          },
          {
            metric: "Session anxiety",
            change: "-38%",
            context: "Self-reported post-task survey",
          },
          {
            metric: "Support tickets",
            change: "-22%",
            context: "Error-related inquiries",
          },
        ],
      },
      reflection: {
        lessons: [
          "Motion timing matters more than motion style — 200ms too fast feels alarming; 600ms too slow feels broken.",
          "Financial UX is emotional UX. Research methods must capture feeling, not just behavior.",
          "Constraints from engineering became design opportunities for progressive loading.",
        ],
        nextSteps:
          "Exploring voice-first micro-transactions and haptic feedback patterns for accessibility.",
      },
    },
  },
  {
    slug: "muse-archive",
    title: "Muse",
    subtitle: "A spatial archive for contemporary art institutions",
    year: "2024",
    category: "Exhibition Design",
    color: "#a78bfa",
    position: { x: 1.8, y: -0.6, z: -2.1 },
    excerpt:
      "Transforming static collection pages into an explorable digital gallery where artworks exist in relation to each other.",
    tags: ["Spatial", "Cultural", "WebGL"],
    sections: {
      challenge: {
        headline: "Museum websites show objects. They rarely show relationships.",
        body: "The client needed a digital presence that mirrored the curatorial intent of their physical exhibitions — where proximity, sequence, and context carry meaning.",
        metrics: [
          { label: "Collection pieces", value: "2,400+" },
          { label: "Avg. session depth", value: "1.3 pages" },
          { label: "Stakeholder groups", value: "6" },
        ],
      },
      research: {
        summary:
          "Ethnographic visits to three museums, curator interviews, and visitor tracking studies shaped a spatial mental model for digital navigation.",
        findings: [
          {
            title: "Visitors wander physically",
            detail: "Linear navigation feels institutional, not exploratory.",
          },
          {
            title: "Context beats metadata",
            detail: "Stories about connections drove 4× longer engagement.",
          },
          {
            title: "Scale creates awe",
            detail: "Zoom transitions between macro and micro views resonated deeply.",
          },
        ],
        journeySteps: [
          { phase: "Enter", insight: "Seeks atmosphere before information" },
          { phase: "Drift", insight: "Follows visual curiosity, not menus" },
          { phase: "Focus", insight: "Deep-dives when narrative hooks appear" },
          { phase: "Share", insight: "Captures moments, not entire pages" },
        ],
        personas: [
          {
            name: "Curator Ana",
            need: "Express relationships between works",
            quote: "The website should feel like walking through my exhibition.",
          },
          {
            name: "Visitor Leo",
            need: "Discovery without overwhelm",
            quote: "I want to get lost, but not confused.",
          },
        ],
      },
      process: {
        phases: [
          {
            title: "Field study",
            duration: "4 weeks",
            description: "Mapped visitor paths in physical galleries.",
          },
          {
            title: "Spatial prototyping",
            duration: "5 weeks",
            description: "WebGL experiments with depth-based navigation.",
          },
          {
            title: "Co-design",
            duration: "3 weeks",
            description: "Weekly sessions with curatorial team.",
          },
          {
            title: "Launch",
            duration: "2 weeks",
            description: "Phased rollout with analytics instrumentation.",
          },
        ],
      },
      prototypes: {
        title: "Navigation as curation",
        description:
          "Users move through a three-dimensional field where artworks cluster by theme, era, and material — proximity reveals connection lines.",
        interactions: [
          {
            name: "Constellation view",
            detail: "Pan and zoom through artwork clusters.",
          },
          {
            name: "Curator trails",
            detail: "Guided paths with optional detours.",
          },
          {
            name: "Focus mode",
            detail: "Single artwork expands with contextual timeline.",
          },
        ],
      },
      outcome: {
        headline: "Engagement became exploration.",
        impact: [
          {
            metric: "Session duration",
            change: "+156%",
            context: "Average time on site",
          },
          {
            metric: "Artworks viewed",
            change: "+4.2×",
            context: "Per session",
          },
          {
            metric: "Return visits",
            change: "+68%",
            context: "Within 30 days",
          },
        ],
      },
      reflection: {
        lessons: [
          "Spatial interfaces need strong orientation cues — subtle breadcrumbs prevent disorientation.",
          "Performance is a design material. Lazy loading became part of the reveal choreography.",
          "Curators are co-designers, not stakeholders. Their language shaped the interaction model.",
        ],
        nextSteps:
          "Investigating AR placement for in-gallery digital overlays.",
      },
    },
  },
  {
    slug: "flow-health",
    title: "Flow",
    subtitle: "Patient journey redesign for chronic care",
    year: "2024",
    category: "Healthcare UX",
    color: "#34d399",
    position: { x: 0.2, y: 1.4, z: 0.5 },
    excerpt:
      "Connecting fragmented touchpoints into a continuous care narrative that patients actually want to follow.",
    tags: ["Healthcare", "Service Design", "Research"],
    sections: {
      challenge: {
        headline: "Healthcare apps treat symptoms. Patients live journeys.",
        body: "A regional health network needed to unify five separate portals into one experience that supported long-term condition management without adding cognitive burden.",
        metrics: [
          { label: "Portal logins required", value: "5" },
          { label: "Patient satisfaction", value: "2.8 / 5" },
          { label: "Care gap rate", value: "34%" },
        ],
      },
      research: {
        summary:
          "Journey mapping with 30 patients, clinician shadowing, and service blueprinting exposed critical drop-off moments in the care continuum.",
        findings: [
          {
            title: "Appointment amnesia",
            detail: "Patients forget prep steps between booking and visit.",
            stat: "61%",
          },
          {
            title: "Data without meaning",
            detail: "Lab results arrive without actionable context.",
          },
          {
            title: "Trust through consistency",
            detail: "Visual and interaction consistency reduced anxiety.",
          },
        ],
        journeySteps: [
          { phase: "Diagnosis", insight: "Information overload at worst moment" },
          { phase: "Routine", insight: "Needs gentle rhythm, not reminders" },
          { phase: "Crisis", insight: "Requires immediate, calm pathways" },
          { phase: "Recovery", insight: "Celebrates progress subtly" },
        ],
        personas: [
          {
            name: "Diane, 54",
            need: "Simple daily routines",
            quote: "I manage my diabetes every day. The app should too.",
          },
          {
            name: "Dr. Patel",
            need: "Patient adherence visibility",
            quote: "I need to know who needs help before they miss care.",
          },
        ],
      },
      process: {
        phases: [
          {
            title: "Service mapping",
            duration: "4 weeks",
            description: "End-to-end blueprint across 12 touchpoints.",
          },
          {
            title: "Concept testing",
            duration: "3 weeks",
            description: "Paper and digital prototypes with patients.",
          },
          {
            title: "Clinical review",
            duration: "2 weeks",
            description: "Regulatory and medical accuracy validation.",
          },
          {
            title: "Pilot launch",
            duration: "6 weeks",
            description: "500-patient beta with iterative refinement.",
          },
        ],
      },
      prototypes: {
        title: "Continuity as interface",
        description:
          "A timeline-based home screen that adapts to care phase — showing what's next, not everything at once.",
        interactions: [
          {
            name: "Care rhythm",
            detail: "Daily, weekly, and milestone views auto-adjust.",
          },
          {
            name: "Result translation",
            detail: "Lab data with plain-language interpretation.",
          },
          {
            name: "Warm handoffs",
            detail: "Animated transitions between care team members.",
          },
        ],
      },
      outcome: {
        headline: "Continuity improved outcomes.",
        impact: [
          {
            metric: "Care adherence",
            change: "+29%",
            context: "Medication and appointment compliance",
          },
          {
            metric: "Portal consolidation",
            change: "5 → 1",
            context: "Unified patient experience",
          },
          {
            metric: "Patient NPS",
            change: "+31 pts",
            context: "Post-visit survey",
          },
        ],
      },
      reflection: {
        lessons: [
          "Accessibility isn't optional in healthcare — it's the baseline for trust.",
          "Clinicians and patients need different views of the same truth.",
          "Small motion details (loading, confirmation) disproportionately affect perceived care quality.",
        ],
        nextSteps:
          "Designing caregiver companion flows for family-supported care.",
      },
    },
  },
  {
    slug: "echo-social",
    title: "Echo",
    subtitle: "Reimagining social feedback loops",
    year: "2023",
    category: "Interaction Patterns",
    color: "#f472b6",
    position: { x: -1.1, y: -1.2, z: -0.8 },
    excerpt:
      "An experimental interaction system that replaces vanity metrics with meaningful connection signals.",
    tags: ["Social", "Experiment", "Ethics"],
    sections: {
      challenge: {
        headline: "Engagement metrics optimize for reaction, not connection.",
        body: "A social platform startup wanted to differentiate through interaction design — creating feedback mechanisms that encourage thoughtful response over rapid consumption.",
        metrics: [
          { label: "Avg. scroll depth", value: "8 sec" },
          { label: "Meaningful replies", value: "< 4%" },
          { label: "Concept iterations", value: "60+" },
        ],
      },
      research: {
        summary:
          "Diary studies, reaction logging, and participatory design workshops with 40 users explored alternatives to likes, shares, and infinite scroll.",
        findings: [
          {
            title: "Likes feel hollow",
            detail: "Users wanted to respond but lacked appropriate channels.",
            stat: "76%",
          },
          {
            title: "Speed kills depth",
            detail: "Faster feeds correlated with shallower interactions.",
          },
          {
            title: "Private appreciation",
            detail: "Users valued quiet acknowledgment over public praise.",
          },
        ],
        journeySteps: [
          { phase: "Browse", insight: "Passive consumption dominates" },
          { phase: "React", insight: "One-tap reactions feel insufficient" },
          { phase: "Respond", insight: "Friction prevents thoughtful replies" },
          { phase: "Return", insight: "Notification anxiety drives re-engagement" },
        ],
        personas: [
          {
            name: "Jordan, 26",
            need: "Express without performing",
            quote: "I want to tell someone their post mattered without making it a thing.",
          },
          {
            name: "Platform PM",
            need: "Healthy engagement metrics",
            quote: "We need depth, but our board wants DAU.",
          },
        ],
      },
      process: {
        phases: [
          {
            title: "Audit",
            duration: "2 weeks",
            description: "Mapped every feedback touchpoint in competitor apps.",
          },
          {
            title: "Workshops",
            duration: "3 weeks",
            description: "Co-created 12 alternative interaction primitives.",
          },
          {
            title: "Micro-testing",
            duration: "4 weeks",
            description: "Shipped concepts to 200-user test cohort.",
          },
          {
            title: "Synthesis",
            duration: "2 weeks",
            description: "Defined Echo interaction language.",
          },
        ],
      },
      prototypes: {
        title: "Signals, not scores",
        description:
          "Replaced likes with resonance markers — subtle, private acknowledgments that accumulate into connection threads visible only to participants.",
        interactions: [
          {
            name: "Resonance pulse",
            detail: "Hold-to-acknowledge with haptic feedback.",
          },
          {
            name: "Thread bloom",
            detail: "Conversations grow visually as depth increases.",
          },
          {
            name: "Pause scroll",
            detail: "Intentional friction at content boundaries.",
          },
        ],
      },
      outcome: {
        headline: "Depth replaced volume.",
        impact: [
          {
            metric: "Reply length",
            change: "+89%",
            context: "Average response character count",
          },
          {
            metric: "Return quality",
            change: "+45%",
            context: "Sessions with meaningful interaction",
          },
          {
            metric: "Reported satisfaction",
            change: "+52%",
            context: "Weekly user survey",
          },
        ],
      },
      reflection: {
        lessons: [
          "Ethical design requires measuring what matters, not what's easy to count.",
          "Friction is a design tool — used intentionally, it creates value.",
          "Platform dynamics can't be redesigned in isolation from business models.",
        ],
        nextSteps:
          "Publishing an open interaction pattern library for ethical social design.",
      },
    },
  },
  {
    slug: "nexus-workspace",
    title: "Nexus",
    subtitle: "Collaborative tools for async-first teams",
    year: "2023",
    category: "Workspace Design",
    color: "#38bdf8",
    position: { x: 2.6, y: 0.3, z: 0.2 },
    excerpt:
      "Designing presence without surveillance — async collaboration that feels alive even when no one is online.",
    tags: ["B2B", "Collaboration", "Systems"],
    sections: {
      challenge: {
        headline: "Remote tools show activity. Teams need presence.",
        body: "Distributed design teams struggled with async handoffs — work disappeared into threads, context evaporated, and 'online' indicators created performative busyness.",
        metrics: [
          { label: "Context loss incidents", value: "3× weekly" },
          { label: "Tool switching", value: "11 apps/day" },
          { label: "Team size", value: "45 designers" },
        ],
      },
      research: {
        summary:
          "Workplace ethnography, artifact analysis, and retrospective interviews with 20 team leads revealed that async work fails at transition moments.",
        findings: [
          {
            title: "Handoffs are invisible",
            detail: "Work state changes aren't communicated clearly.",
            stat: "83%",
          },
          {
            title: "Presence ≠ availability",
            detail: "Green dots create pressure without improving collaboration.",
          },
          {
            title: "Artifacts tell stories",
            detail: "Version history is more valuable than chat logs.",
          },
        ],
        journeySteps: [
          { phase: "Start", insight: "Needs context from previous work" },
          { phase: "Create", insight: "Works in isolation comfortably" },
          { phase: "Hand off", insight: "Struggles to package intent" },
          { phase: "Review", insight: "Wants async feedback with clarity" },
        ],
        personas: [
          {
            name: "Lead Designer Kim",
            need: "Team visibility without micromanagement",
            quote: "I need to know what's moving, not who's typing.",
          },
          {
            name: "Contractor Alex",
            need: "Context on arrival",
            quote: "Every project starts with archaeology.",
          },
        ],
      },
      process: {
        phases: [
          {
            title: "Observation",
            duration: "3 weeks",
            description: "Shadowed async workflows across 4 time zones.",
          },
          {
            title: "System mapping",
            duration: "2 weeks",
            description: "Information architecture for work states.",
          },
          {
            title: "Prototyping",
            duration: "5 weeks",
            description: "Interactive Figma and coded prototypes.",
          },
          {
            title: "Rollout",
            duration: "4 weeks",
            description: "Phased adoption with training materials.",
          },
        ],
      },
      prototypes: {
        title: "Ambient awareness",
        description:
          "Work artifacts carry state — draft, review, blocked — with subtle ambient indicators that update asynchronously without notifications.",
        interactions: [
          {
            name: "State trails",
            detail: "Visual history of work progression on each artifact.",
          },
          {
            name: "Intent notes",
            detail: "Structured handoff templates embedded in transitions.",
          },
          {
            name: "Ambient pulse",
            detail: "Gentle activity indicators without user tracking.",
          },
        ],
      },
      outcome: {
        headline: "Async became an advantage.",
        impact: [
          {
            metric: "Handoff clarity",
            change: "+64%",
            context: "Team-reported satisfaction",
          },
          {
            metric: "Context recovery time",
            change: "-41%",
            context: "Time to productive work on new tasks",
          },
          {
            metric: "Notification volume",
            change: "-55%",
            context: "Without reducing collaboration frequency",
          },
        ],
      },
      reflection: {
        lessons: [
          "Design systems for collaboration must include behavioral patterns, not just components.",
          "The best async tools respect focus time as a first-class constraint.",
          "Presence design is political — it shapes power dynamics on teams.",
        ],
        nextSteps:
          "Extending the system to AI-assisted context summaries for handoffs.",
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
