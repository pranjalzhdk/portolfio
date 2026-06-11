"use client";

import { useState } from "react";
import type { AboutContent, SiteContent } from "@/lib/content/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  research: "#6366f1",
  design: "#a78bfa",
  motion: "#f472b6",
  code: "#38bdf8",
  strategy: "#34d399",
};

export function AboutExperience({
  site,
  about,
}: {
  site: SiteContent;
  about: AboutContent;
}) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const activeNode = about.skills.find((n) => n.id === activeSkill);

  return (
    <section id="about" className="section-padding py-32 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="03" label="About" className="mb-12" />

        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="editorial-title mb-8">
              Pranjal
              <br />
              <span className="text-muted">Sharma</span>
            </h2>
            <p className="editorial-body mb-4 max-w-lg">{about.biography}</p>
            <p className="mb-2 text-sm text-muted">{site.education}</p>
            <p className="text-sm text-muted">
              {site.location} · {site.origin}
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface/30">
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              {about.skillConnections.map(([from, to]) => {
                const fromNode = about.skills.find((n) => n.id === from);
                const toNode = about.skills.find((n) => n.id === to);
                if (!fromNode || !toNode) return null;
                return (
                  <line
                    key={`${from}-${to}`}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke="currentColor"
                    strokeOpacity={activeSkill === from || activeSkill === to ? 0.2 : 0.06}
                  />
                );
              })}
            </svg>
            {about.skills.map((node) => (
              <button
                key={node.id}
                type="button"
                data-cursor="pointer"
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setActiveSkill(node.id)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <span
                  className={cn(
                    "block h-4 w-4 rounded-full transition-transform",
                    activeSkill === node.id && "scale-150",
                  )}
                  style={{
                    backgroundColor: categoryColors[node.category],
                    boxShadow:
                      activeSkill === node.id
                        ? `0 0 20px ${categoryColors[node.category]}60`
                        : "none",
                  }}
                />
              </button>
            ))}
            {activeNode && (
              <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface/95 p-6 backdrop-blur-xl">
                <p className="text-sm font-medium">{activeNode.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{activeNode.story}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-20 grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.25em] text-muted">Education</h3>
            <Timeline items={about.education} />
          </div>
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.25em] text-muted">Experience</h3>
            <Timeline items={about.experience} />
          </div>
        </div>

        {about.awards.length > 0 && (
          <div className="mb-20">
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">Awards</h3>
            <div className="flex flex-wrap gap-3">
              {about.awards.map((award) => (
                <span key={award} className="rounded-full bg-accent-soft px-4 py-2 text-sm text-accent">
                  {award}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {site.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-border px-4 py-2 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">Focus areas</h3>
            <div className="flex flex-wrap gap-3">
              {site.interests.map((interest) => (
                <span key={interest} className="rounded-full border border-border px-4 py-2 text-sm text-muted">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: AboutContent["education"] }) {
  return (
    <div className="relative border-l border-border pl-8">
      {items.map((item) => (
        <div key={item.year + item.title} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[37px] top-1 h-2 w-2 rounded-full bg-foreground" />
          <span className="font-mono text-xs text-muted">{item.year}</span>
          <h4 className="mt-1 text-lg font-medium">{item.title}</h4>
          <p className="text-sm text-muted">{item.org}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted/80">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
