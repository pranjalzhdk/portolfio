import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "timeline", type: "string" }),
    defineField({ name: "color", type: "string" }),
    defineField({ name: "position", type: "position3d" }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["draft", "published", "archived"] },
      initialValue: "draft",
    }),
    defineField({ name: "coverGradient", type: "string" }),
    defineField({ name: "keyOutcomes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "researchInsight", type: "string" }),
    defineField({ name: "sections", type: "projectSections" }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
