# Pranjal Sharma — Interaction Design Portfolio

Sanity CMS-powered portfolio for **Pranjal Sharma**, Interaction Design student at ZHdK.

## Quick start

```bash
cp .env.example .env.local   # add your Sanity credentials
npm install
npm run sanity:seed          # first time only — imports content into Sanity
npm run dev
```

| URL | What it is |
|-----|------------|
| http://localhost:3000 | Portfolio website |
| http://localhost:3000/studio | **Sanity Studio** — edit all content here |

---

## How Sanity works with this website

```
┌─────────────────────────────────────────────────────────────────┐
│                         YOU (Editor)                            │
│                                                                 │
│   Edit content at  localhost:3000/studio                        │
│   (or deploy with npm run sanity:deploy for a public URL)       │
└────────────────────────────┬────────────────────────────────────┘
                             │ saves
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SANITY CLOUD (Database)                      │
│                                                                 │
│   Project ID: ry91b1jx · Dataset: production                    │
│                                                                 │
│   Documents stored here:                                        │
│   • siteSettings      → name, email, bio, tools                 │
│   • homepageSettings  → hero text, section intros               │
│   • aboutSettings     → biography, skills, timeline             │
│   • playgroundSettings → interaction demos                      │
│   • project documents → case studies (Sutra, Transit Pulse…)    │
│   • research documents → research lab entries                   │
│   • mediaAsset        → uploaded images & files                 │
└────────────────────────────┬────────────────────────────────────┘
                             │ GROQ queries (read)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   NEXT.JS WEBSITE (Frontend)                    │
│                                                                 │
│   src/lib/content/sanity.ts  → fetches from Sanity              │
│   src/lib/sanity/queries.ts  → GROQ query strings               │
│   src/app/page.tsx           → homepage                         │
│   src/app/work/[slug]        → case study pages                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                      Visitors see your portfolio
```

### Step by step

1. **You edit in Sanity Studio** (`/studio`)
   - Change hero text, add a project, update your bio, upload images
   - Click **Publish** in Studio when ready (drafts won't show on the site)

2. **Content saves to Sanity Cloud**
   - Sanity stores everything as JSON documents in the cloud
   - Your `.env.local` connects the website to your project

3. **Website fetches content on each visit**
   - Next.js server runs GROQ queries like `*[_type == "project" && status == "published"]`
   - Only **published** projects and research appear on the public site

4. **Pages render the data**
   - Hero reads from `homepageSettings`
   - Exhibition gallery reads from `project` documents
   - Case studies at `/work/sutra`, `/work/transit-pulse`, etc.

### Key files

| File | Role |
|------|------|
| `sanity.config.ts` | Studio setup — menus, schemas |
| `sanity/schemaTypes/` | Content type definitions |
| `src/lib/sanity/queries.ts` | GROQ queries |
| `src/lib/sanity/mappers.ts` | Converts Sanity docs → website types |
| `src/lib/content/sanity.ts` | Fetch functions used by pages |
| `src/app/studio/` | Embeds Studio at `/studio` |
| `scripts/seed-sanity.mjs` | One-time import from `content/` folder |
| `.env.local` | Your Sanity project ID, dataset, API token |

### Environment variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ry91b1jx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...   # Editor token from sanity.io/manage
```

### Common tasks

| Task | How |
|------|-----|
| Edit hero text | Studio → Homepage |
| Add a project | Studio → Projects → Create |
| Change bio | Studio → About |
| Upload images | Studio → Media Library, or attach to a project |
| Re-import seed data | `npm run sanity:seed` |
| Deploy Studio online | `npm run sanity:deploy` |

---

## Stack

Next.js 16 · Sanity CMS · GROQ · TypeScript · Tailwind · Framer Motion · GSAP · Three.js
