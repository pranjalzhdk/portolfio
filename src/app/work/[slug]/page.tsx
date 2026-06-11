import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { CaseStudyViewer } from "@/components/case-study/CaseStudyViewer";
import { SiteNav } from "@/components/navigation/SiteNav";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await content.getProject(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const [project, site] = await Promise.all([
    content.getProject(slug),
    content.getSite(),
  ]);

  if (!project) notFound();

  return (
    <>
      <SiteNav site={site} />
      <CaseStudyViewer project={project} />
    </>
  );
}
