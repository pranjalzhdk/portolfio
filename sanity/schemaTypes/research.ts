import { defineField, defineType } from "sanity";

export const researchSchema = defineType({
  name: "research",
  title: "Research",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "researchId",
      title: "Research ID",
      type: "string",
      description: "Unique slug-like ID used for connections (e.g. cross-cultural-interfaces)",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      options: { list: ["experiment", "study", "exploration", "concept"] },
    }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "methods", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "findings", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "insights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "personas", type: "array", of: [{ type: "persona" }] }),
    defineField({ name: "journeySteps", type: "array", of: [{ type: "journeyStep" }] }),
    defineField({ name: "references", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "connections",
      title: "Connected project slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "position", type: "position2d" }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["draft", "published", "archived"] },
      initialValue: "draft",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "type" },
  },
});
