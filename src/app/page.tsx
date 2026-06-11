import { content } from "@/lib/content";
import { AppShell } from "@/components/providers/AppShell";
import { SiteNav } from "@/components/navigation/SiteNav";
import { HeroExperience } from "@/components/landing/HeroExperience";
import { ExhibitionGallery } from "@/components/gallery/ExhibitionGallery";
import { ResearchLab } from "@/components/research/ResearchLab";
import { AboutExperience } from "@/components/about/AboutExperience";
import { PlaygroundSection } from "@/components/playground/PlaygroundSection";
import { ContactExperience } from "@/components/contact/ContactExperience";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const site = await content.getSite();
  return {
    title: `${site.name} — ${site.headline}`,
    description: site.statement,
  };
}

export default async function HomePage() {
  const portfolio = await content.getPortfolioContent();

  return (
    <AppShell>
      <SiteNav site={portfolio.site} />
      <main>
        <HeroExperience site={portfolio.site} homepage={portfolio.homepage} />
        <ExhibitionGallery
          projects={portfolio.projects}
          intro={portfolio.homepage.exhibitionIntro}
        />
        <ResearchLab
          items={portfolio.research}
          projects={portfolio.projects}
          intro={portfolio.homepage.researchIntro}
        />
        <AboutExperience site={portfolio.site} about={portfolio.about} />
        <PlaygroundSection demos={portfolio.playground} />
        <ContactExperience site={portfolio.site} />
      </main>
    </AppShell>
  );
}
