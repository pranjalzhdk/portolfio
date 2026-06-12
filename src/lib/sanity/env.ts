/** Public Sanity project settings — safe to embed as fallbacks for deploys. */
export const SANITY_PROJECT_ID = "ry91b1jx";
export const SANITY_DATASET = "production";

export function getSanityProjectId(): string {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? SANITY_PROJECT_ID;
}

export function getSanityDataset(): string {
  return process.env.NEXT_PUBLIC_SANITY_DATASET ?? SANITY_DATASET;
}
