import { getReadClient } from "@/lib/sanity/client";
import {
  aboutQuery,
  homepageQuery,
  mediaQuery,
  playgroundQuery,
  projectBySlugQuery,
  projectsQuery,
  researchQuery,
  siteQuery,
} from "@/lib/sanity/queries";
import {
  mapAbout,
  mapHomepage,
  mapMedia,
  mapPlaygroundDemos,
  mapProject,
  mapResearch,
  mapSite,
} from "@/lib/sanity/mappers";
import type {
  HomepageContent,
  PlaygroundDemo,
  PortfolioContent,
  Project,
  ResearchItem,
  SiteContent,
  AboutContent,
} from "./types";

function assertDoc<T>(doc: T | null, label: string): T {
  if (!doc) {
    throw new Error(
      `${label} not found in Sanity. Run "npm run sanity:seed" to import initial content.`,
    );
  }
  return doc;
}

export async function getSite(): Promise<SiteContent> {
  const doc = await getReadClient().fetch(siteQuery);
  return mapSite(assertDoc(doc, "Site settings"));
}

export async function getHomepage(): Promise<HomepageContent> {
  const doc = await getReadClient().fetch(homepageQuery);
  return mapHomepage(assertDoc(doc, "Homepage settings"));
}

export async function getAbout(): Promise<AboutContent> {
  const doc = await getReadClient().fetch(aboutQuery);
  return mapAbout(assertDoc(doc, "About settings"));
}

export async function getProjects(includeDrafts = false): Promise<Project[]> {
  const docs = await getReadClient().fetch(projectsQuery);
  const projects = docs.map(mapProject);
  return includeDrafts
    ? projects
    : projects.filter((p: Project) => p.status === "published");
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const doc = await getReadClient().fetch(projectBySlugQuery, { slug });
  return doc ? mapProject(doc) : undefined;
}

export async function getResearch(includeDrafts = false): Promise<ResearchItem[]> {
  const docs = await getReadClient().fetch(researchQuery);
  const items = docs.map(mapResearch);
  return includeDrafts
    ? items
    : items.filter((r: ResearchItem) => r.status === "published");
}

export async function getPlayground(): Promise<PlaygroundDemo[]> {
  const doc = await getReadClient().fetch(playgroundQuery);
  return mapPlaygroundDemos(doc);
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const [site, homepage, about, projects, research, playground, mediaDocs] =
    await Promise.all([
      getSite(),
      getHomepage(),
      getAbout(),
      getProjects(),
      getResearch(),
      getPlayground(),
      getReadClient().fetch(mediaQuery),
    ]);

  return {
    site,
    homepage,
    about,
    projects,
    research,
    playground,
    media: mediaDocs.map(mapMedia),
  };
}
