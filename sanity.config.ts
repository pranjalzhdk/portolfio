import { defineConfig } from "sanity";
import { structureTool, StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { getSanityDataset, getSanityProjectId } from "./src/lib/sanity/env";

const projectId = getSanityProjectId();
const dataset = getSanityDataset();

function singleton(S: StructureBuilder, type: string, title: string, id: string) {
  return S.listItem()
    .title(title)
    .child(S.document().schemaType(type).documentId(id));
}

export default defineConfig({
  name: "pranjal-portfolio",
  title: "Pranjal Sharma Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Portfolio CMS")
          .items([
            singleton(S, "site", "Site Settings", "siteSettings"),
            singleton(S, "homepage", "Homepage", "homepageSettings"),
            singleton(S, "about", "About", "aboutSettings"),
            singleton(S, "playground", "Playground", "playgroundSettings"),
            S.divider(),
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("research").title("Research"),
            S.documentTypeListItem("mediaAsset").title("Media Library"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
