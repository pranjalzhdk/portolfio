import { siteSchema } from "./site";
import { homepageSchema } from "./homepage";
import { projectSchema } from "./project";
import { researchSchema } from "./research";
import { aboutSchema } from "./about";
import { playgroundSchema, mediaAssetSchema } from "./playground";
import { objectTypes } from "./objects";

export const schemaTypes = [
  ...objectTypes,
  siteSchema,
  homepageSchema,
  aboutSchema,
  projectSchema,
  researchSchema,
  playgroundSchema,
  mediaAssetSchema,
];
