"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ResearchItem } from "@/lib/content/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const filters = ["all", "experiment", "study", "exploration", "concept"] as const;
type Filter = (typeof filters)[number];

export function ResearchLab({
  items,
  projects,
  intro,
}: {
  items: ResearchItem[];
  projects: Project[];
  intro: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.type === filter)),
    [filter, items],
  );

  const active = items.find((i) => i.id === activeId);

  return (
    <section id="research" className="section-padding py-32 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="02" label="Research Lab" className="mb-12" />

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="editorial-title">
            Knowledge
            <br />
            <span className="text-muted">in motion</span>
          </h2>
          <p className="max-w-md editorial-body">{intro}</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              data-cursor="pointer"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all",
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground/30",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative mb-12 hidden aspect-[2/1] overflow-hidden rounded-2xl border border-border bg-surface/40 md:block">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            {items.map((item) =>
              item.connections.map((slug) => {
                const target = items.find((r) =>
                  r.connections.includes(item.id) ||
                  projects.some((p) => p.slug === slug),
                );
                if (!target || target.id === item.id) return null;
                return (
                  <motion.line
                    key={`${item.id}-${target.id}`}
                    x1={`${item.position.x}%`}
                    y1={`${item.position.y}%`}
                    x2={`${target.position.x}%`}
                    y2={`${target.position.y}%`}
                    stroke="#6366f1"
                    strokeOpacity={activeId === item.id || activeId === target.id ? 0.25 : 0.06}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                  />
                );
              }),
            )}
          </svg>
          <div className="relative h-full w-full">
            {items.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                data-cursor="pointer"
                onClick={() => {
                  setActiveId(item.id);
                  setExpandedId(item.id);
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${item.position.x}%`, top: `${item.position.y}%` }}
                whileHover={{ scale: 1.2 }}
              >
                <span
                  className={cn(
                    "block rounded-full transition-all",
                    activeId === item.id ? "h-4 w-4 bg-accent" : "h-2.5 w-2.5 bg-foreground/20",
                  )}
                />
              </motion.button>
            ))}
          </div>
          {active && (
            <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface/95 p-4 backdrop-blur-xl">
              <p className="text-sm font-medium">{active.title}</p>
              <p className="mt-1 text-xs text-muted">{active.summary}</p>
            </div>
          )}
        </div>

        <motion.div layout className="grid gap-4 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                data-cursor="pointer"
                className={cn(
                  "cursor-pointer rounded-xl border border-border bg-surface/50 p-6 transition-colors md:p-8",
                  expandedId === item.id && "border-accent/30 ring-1 ring-accent/20",
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">{item.year}</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs capitalize">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 space-y-4 border-t border-border pt-6">
                        {item.methods.length > 0 && (
                          <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Methods</p>
                            <div className="flex flex-wrap gap-2">
                              {item.methods.map((m) => (
                                <span key={m} className="rounded-full bg-accent-soft px-3 py-1 text-xs">{m}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {item.insights.length > 0 && (
                          <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Insights</p>
                            <ul className="space-y-2">
                              {item.insights.map((insight) => (
                                <li key={insight} className="text-sm text-muted">→ {insight}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.connections.length > 0 && (
                          <div>
                            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Connected projects</p>
                            <div className="flex flex-wrap gap-2">
                              {item.connections.map((slug) => {
                                const project = projects.find((p) => p.slug === slug);
                                return project ? (
                                  <Link
                                    key={slug}
                                    href={`/work/${slug}`}
                                    className="text-xs underline underline-offset-2"
                                    style={{ color: project.color }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {project.title}
                                  </Link>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
