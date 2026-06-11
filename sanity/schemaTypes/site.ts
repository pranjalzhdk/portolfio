import { defineField, defineType } from "sanity";

export const siteSchema = defineType({
  name: "site",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "statement", type: "text" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "origin", type: "string" }),
    defineField({ name: "education", type: "string" }),
    defineField({ name: "philosophy", type: "text" }),
    defineField({
      name: "social",
      type: "object",
      fields: [
        { name: "linkedin", type: "url" },
        { name: "areNa", type: "url" },
        { name: "github", type: "url" },
        { name: "instagram", type: "url" },
      ],
    }),
    defineField({ name: "tools", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "interests", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "awards", type: "array", of: [{ type: "string" }] }),
  ],
});
