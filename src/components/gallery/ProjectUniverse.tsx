"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function ProjectNode({
  project,
  index,
  isActive,
  onHover,
}: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
  onHover: (slug: string | null) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.08);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.08);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        left: `${50 + project.position.x * 12}%`,
        top: `${50 + project.position.y * 18}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        onHover(null);
      }}
      onMouseEnter={() => onHover(project.slug)}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="pointer"
        className="group relative block"
      >
        <motion.div
          animate={{
            scale: isActive ? 1.15 : 1,
            boxShadow: isActive
              ? `0 0 60px ${project.color}40`
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.4 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur-sm md:h-20 md:w-20"
          style={{ borderColor: isActive ? project.color : undefined }}
        >
          <span
            className="h-3 w-3 rounded-full transition-transform group-hover:scale-125"
            style={{ backgroundColor: project.color }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: project.color }}
            animate={{ scale: isActive ? 1.8 : 1, opacity: isActive ? 0.3 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
          className="pointer-events-none absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 text-center"
        >
          <p className="text-sm font-medium">{project.title}</p>
          <p className="mt-1 text-xs text-muted">{project.category}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ProjectUniverse() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.slug === activeSlug);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="work"
      className="relative section-padding py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01" label="Selected Work" className="mb-12" />

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="editorial-title">
            Project
            <br />
            <span className="text-muted">Universe</span>
          </h2>
          <p className="max-w-md editorial-body">
            Navigate a constellation of case studies. Each project exists in
            relation to the others — hover to discover, click to enter the
            exhibition.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface/50 md:aspect-[16/9]"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {projects.map((project, i) =>
              projects.slice(i + 1).map((other) => (
                <motion.line
                  key={`${project.slug}-${other.slug}`}
                  x1={`${50 + project.position.x * 12}%`}
                  y1={`${50 + project.position.y * 18}%`}
                  x2={`${50 + other.position.x * 12}%`}
                  y2={`${50 + other.position.y * 18}%`}
                  stroke="currentColor"
                  strokeOpacity={0.06}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              )),
            )}
          </svg>

          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)",
            }}
          />

          {projects.map((project, index) => (
            <ProjectNode
              key={project.slug}
              project={project}
              index={index}
              isActive={activeSlug === project.slug}
              onHover={setActiveSlug}
            />
          ))}

          <motion.div
            animate={{ opacity: activeProject ? 1 : 0 }}
            className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface/90 p-6 backdrop-blur-xl md:p-8"
          >
            {activeProject && (
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {activeProject.year} · {activeProject.category}
                  </p>
                  <h3 className="mt-2 text-xl font-medium md:text-2xl">
                    {activeProject.title} — {activeProject.subtitle}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted">
                    {activeProject.excerpt}
                  </p>
                </div>
                <Link
                  href={`/work/${activeProject.slug}`}
                  data-cursor="pointer"
                  className="shrink-0 text-xs uppercase tracking-[0.2em] underline underline-offset-4"
                >
                  View case study
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/work/${project.slug}`}
                data-cursor="pointer"
                className="group block border-b border-border py-6 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="mb-3 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <h3 className="text-lg font-medium transition-transform group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full border border-border px-3 py-1 text-xs text-muted",
                      )}
                    >
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
