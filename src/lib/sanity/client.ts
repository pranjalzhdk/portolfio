import { createClient, type SanityClient } from "next-sanity";
import { getSanityDataset, getSanityProjectId } from "./env";

function getConfig() {
  return {
    projectId: getSanityProjectId(),
    dataset: getSanityDataset(),
    apiVersion: "2024-01-01" as const,
  };
}

let readClient: SanityClient | null = null;

export function getReadClient(): SanityClient {
  if (!readClient) {
    readClient = createClient({
      ...getConfig(),
      useCdn: true,
      token: process.env.SANITY_API_TOKEN,
    });
  }
  return readClient;
}

/** @deprecated use getReadClient() */
export const sanityClient = {
  fetch: (...args: Parameters<SanityClient["fetch"]>) =>
    getReadClient().fetch(...args),
};

export function getSanityImageUrl(ref: string | undefined): string | undefined {
  if (!ref) return undefined;
  const [, id, dimensions, format] = ref.split("-");
  if (!id) return undefined;
  const { projectId, dataset } = getConfig();
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
}
