import { defineField, defineType } from "sanity";

export const metric = defineType({
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "value", type: "string" }),
  ],
});

export const finding = defineType({
  name: "finding",
  title: "Finding",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "detail", type: "text" }),
    defineField({ name: "stat", type: "string" }),
  ],
});

export const journeyStep = defineType({
  name: "journeyStep",
  title: "Journey Step",
  type: "object",
  fields: [
    defineField({ name: "phase", type: "string" }),
    defineField({ name: "insight", type: "text" }),
  ],
});

export const persona = defineType({
  name: "persona",
  title: "Persona",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "need", type: "string" }),
    defineField({ name: "quote", type: "text" }),
  ],
});

export const processPhase = defineType({
  name: "processPhase",
  title: "Process Phase",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "description", type: "text" }),
  ],
});

export const prototypeInteraction = defineType({
  name: "prototypeInteraction",
  title: "Prototype Interaction",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "detail", type: "text" }),
  ],
});

export const impact = defineType({
  name: "impact",
  title: "Impact",
  type: "object",
  fields: [
    defineField({ name: "metric", type: "string" }),
    defineField({ name: "change", type: "string" }),
    defineField({ name: "context", type: "string" }),
  ],
});

export const position3d = defineType({
  name: "position3d",
  title: "Position",
  type: "object",
  fields: [
    defineField({ name: "x", type: "number" }),
    defineField({ name: "y", type: "number" }),
    defineField({ name: "z", type: "number" }),
  ],
});

export const position2d = defineType({
  name: "position2d",
  title: "Position 2D",
  type: "object",
  fields: [
    defineField({ name: "x", type: "number" }),
    defineField({ name: "y", type: "number" }),
  ],
});

export const timelineEntry = defineType({
  name: "timelineEntry",
  title: "Timeline Entry",
  type: "object",
  fields: [
    defineField({ name: "year", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "org", type: "string" }),
    defineField({ name: "detail", type: "text" }),
  ],
});

export const skillNode = defineType({
  name: "skillNode",
  title: "Skill Node",
  type: "object",
  fields: [
    defineField({ name: "id", type: "string" }),
    defineField({ name: "label", type: "string" }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["research", "design", "motion", "code", "strategy"],
      },
    }),
    defineField({ name: "x", type: "number" }),
    defineField({ name: "y", type: "number" }),
    defineField({ name: "story", type: "text" }),
    defineField({ name: "projects", type: "array", of: [{ type: "string" }] }),
  ],
});

export const skillConnection = defineType({
  name: "skillConnection",
  title: "Skill Connection",
  type: "object",
  fields: [
    defineField({ name: "from", type: "string" }),
    defineField({ name: "to", type: "string" }),
  ],
});

export const playgroundDemo = defineType({
  name: "playgroundDemo",
  title: "Playground Demo",
  type: "object",
  fields: [
    defineField({ name: "id", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "type",
      type: "string",
      options: { list: ["motion", "interaction", "concept", "code"] },
    }),
  ],
});

export const projectSections = defineType({
  name: "projectSections",
  title: "Project Sections",
  type: "object",
  fields: [
    defineField({
      name: "challenge",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text" }),
        defineField({ name: "metrics", type: "array", of: [{ type: "metric" }] }),
      ],
    }),
    defineField({
      name: "research",
      type: "object",
      fields: [
        defineField({ name: "summary", type: "text" }),
        defineField({ name: "findings", type: "array", of: [{ type: "finding" }] }),
        defineField({ name: "journeySteps", type: "array", of: [{ type: "journeyStep" }] }),
        defineField({ name: "personas", type: "array", of: [{ type: "persona" }] }),
      ],
    }),
    defineField({
      name: "process",
      type: "object",
      fields: [
        defineField({ name: "phases", type: "array", of: [{ type: "processPhase" }] }),
      ],
    }),
    defineField({
      name: "prototypes",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text" }),
        defineField({
          name: "interactions",
          type: "array",
          of: [{ type: "prototypeInteraction" }],
        }),
      ],
    }),
    defineField({
      name: "outcome",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "impact", type: "array", of: [{ type: "impact" }] }),
      ],
    }),
    defineField({
      name: "reflection",
      type: "object",
      fields: [
        defineField({ name: "lessons", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "nextSteps", type: "text" }),
      ],
    }),
  ],
});

export const objectTypes = [
  metric,
  finding,
  journeyStep,
  persona,
  processPhase,
  prototypeInteraction,
  impact,
  position3d,
  position2d,
  timelineEntry,
  skillNode,
  skillConnection,
  playgroundDemo,
  projectSections,
];
