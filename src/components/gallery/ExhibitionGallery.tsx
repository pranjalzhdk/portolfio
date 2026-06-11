"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import type { HomepageContent, Project } from "@/lib/content/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function ExhibitionPiece({
  project,
  index,
  depth,
  isActive,
  onHover,
}: {
  project: Project;
  index: number;
  depth: number;
  isActive: boolean;
  onHover: (slug: string | null) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const left = 50 + project.position.x * 10;
  const top = 50 + project.position.y * 14;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        left: `${left}%`,
        top: `${top}%`,
        zIndex: Math.round(depth * 10),
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.06);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.06);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        onHover(null);
      }}
      onMouseEnter={() => onHover(project.slug)}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <Link href={`/work/${project.slug}`} data-cursor="pointer" className="block">
        <motion.div
          animate={{
            scale: isActive ? 1.08 : 1,
            rotateX: isActive ? -4 : 0,
            rotateY: isActive ? 6 : 0,
          }}
          transition={{ duration: 0.45 }}
          style={{ transformStyle: "preserve-3d", perspective: 800 }}
          className="relative"
        >
          <div
            className={cn(
              "relative h-44 w-36 overflow-hidden rounded-xl border backdrop-blur-md transition-shadow md:h-52 md:w-44",
              isActive ? "border-foreground/20 shadow-2xl" : "border-border",
            )}
            style={{
              background: `linear-gradient(145deg, ${project.color}18, transparent 60%)`,
              boxShadow: isActive ? `0 24px 60px ${project.color}25` : undefined,
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${project.color}40, transparent 70%)`,
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-4">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <div>
                <p className="text-lg font-medium leading-tight">{project.title}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted">
                  {project.year}
                </p>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-xl border border-border bg-surface/95 p-4 backdrop-blur-xl"
              >
                <p className="text-xs text-muted">{project.researchInsight}</p>
                <ul className="mt-3 space-y-1">
                  {project.keyOutcomes.slice(0, 2).map((o) => (
                    <li key={o} className="text-xs">→ {o}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ExhibitionGallery({
  projects,
  intro,
}: {
  projects: Project[];
  intro: string;
}) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === activeSlug);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="section-padding py-32 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01" label="Selected Work" className="mb-12" />

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="editorial-title">
            Digital
            <br />
            <span className="text-muted">Exhibition</span>
          </h2>
          <p className="max-w-md editorial-body">{intro}</p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/80 to-background md:aspect-[16/9]"
          style={{ perspective: "1200px" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            {projects.map((project, i) =>
              projects.slice(i + 1).map((other) => (
                <line
                  key={`${project.slug}-${other.slug}`}
                  x1={`${50 + project.position.x * 10}%`}
                  y1={`${50 + project.position.y * 14}%`}
                  x2={`${50 + other.position.x * 10}%`}
                  y2={`${50 + other.position.y * 14}%`}
                  stroke="currentColor"
                  strokeOpacity={0.05}
                />
              )),
            )}
          </svg>

          {projects.map((project, index) => (
            <ExhibitionPiece
              key={project.slug}
              project={project}
              index={index}
              depth={project.position.z}
              isActive={activeSlug === project.slug}
              onHover={setActiveSlug}
            />
          ))}

          <motion.div
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
            className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface/95 p-6 backdrop-blur-xl md:p-8"
          >
            {active && (
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {active.year} · {active.category} · {active.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium">
                    {active.title} — {active.subtitle}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted">{active.excerpt}</p>
                </div>
                <Link
                  href={`/work/${active.slug}`}
                  data-cursor="pointer"
                  className="shrink-0 text-xs uppercase tracking-[0.2em] underline underline-offset-4"
                >
                  Enter case study
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mt-16 space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={`/work/${project.slug}`}
                data-cursor="pointer"
                className="group grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_2fr_1fr]"
              >
                <div>
                  <span
                    className="mb-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <p className="font-mono text-xs text-muted">{project.year}</p>
                  <h3 className="mt-1 text-xl font-medium transition-transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
