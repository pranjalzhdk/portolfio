import { createClient } from "@sanity/client";
import { readFile } from "fs/promises";
import path from "path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing Sanity env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN in .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function readJson(file) {
  const raw = await readFile(path.join(process.cwd(), "content", file), "utf-8");
  return JSON.parse(raw);
}

async function replaceDoc(doc) {
  try {
    await client.delete(doc._id);
  } catch {
    // Document may not exist yet
  }
  await client.create(doc);
}

async function seed() {
  console.log("Seeding Sanity CMS...\n");

  const site = await readJson("site.json");
  await replaceDoc({ _id: "siteSettings", _type: "site", ...site });
  console.log("✓ Site settings");

  const homepage = await readJson("homepage.json");
  await replaceDoc({
    _id: "homepageSettings",
    _type: "homepage",
    ...homepage,
  });
  console.log("✓ Homepage");

  const about = await readJson("about.json");
  const skillConnections = about.skillConnections?.map(([from, to]) => ({
    from,
    to,
  }));
  await replaceDoc({
    _id: "aboutSettings",
    _type: "about",
    biography: about.biography,
    education: about.education,
    experience: about.experience,
    awards: about.awards,
    skills: about.skills,
    skillConnections,
  });
  console.log("✓ About");

  const playground = await readJson("playground.json");
  await replaceDoc({
    _id: "playgroundSettings",
    _type: "playground",
    demos: playground,
  });
  console.log("✓ Playground");

  const projects = await readJson("projects.json");
  for (const p of projects) {
    const { id, slug, sections, ...rest } = p;
    await replaceDoc({
      _id: id,
      _type: "project",
      slug: { _type: "slug", current: slug },
      sections,
      ...rest,
    });
    console.log(`✓ Project: ${p.title}`);
  }

  const research = await readJson("research.json");
  for (const r of research) {
    const { id, ...rest } = r;
    await replaceDoc({
      _id: `research-${id}`,
      _type: "research",
      researchId: id,
      ...rest,
    });
    console.log(`✓ Research: ${r.title}`);
  }

  console.log("\nDone! Your portfolio content is now in Sanity.");
  console.log("→ Open /studio to edit");
  console.log("→ Open / to view the site");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
