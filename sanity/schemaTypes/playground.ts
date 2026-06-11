import { defineField, defineType } from "sanity";

export const playgroundSchema = defineType({
  name: "playground",
  title: "Playground",
  type: "document",
  fields: [
    defineField({
      name: "demos",
      type: "array",
      of: [{ type: "playgroundDemo" }],
    }),
  ],
});

export const mediaAssetSchema = defineType({
  name: "mediaAsset",
  title: "Media Asset",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", type: "string", initialValue: "general" }),
    defineField({
      name: "file",
      type: "file",
      options: { accept: "image/*,video/*" },
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
