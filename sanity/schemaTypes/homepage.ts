import { defineField, defineType } from "sanity";

export const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", type: "string" }),
    defineField({ name: "heroHeadline", type: "string" }),
    defineField({ name: "heroSubline", type: "string" }),
    defineField({ name: "heroStatement", type: "text" }),
    defineField({
      name: "featuredProjectSlugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featuredResearchIds",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "exhibitionIntro", type: "text" }),
    defineField({ name: "researchIntro", type: "text" }),
  ],
});
