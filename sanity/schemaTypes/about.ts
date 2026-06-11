import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "biography", type: "text" }),
    defineField({
      name: "education",
      type: "array",
      of: [{ type: "timelineEntry" }],
    }),
    defineField({
      name: "experience",
      type: "array",
      of: [{ type: "timelineEntry" }],
    }),
    defineField({ name: "awards", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "skills", type: "array", of: [{ type: "skillNode" }] }),
    defineField({
      name: "skillConnections",
      type: "array",
      of: [{ type: "skillConnection" }],
    }),
  ],
});
