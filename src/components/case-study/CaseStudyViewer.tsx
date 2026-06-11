"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/content/types";
import { RevealText } from "@/components/ui/RevealText";

gsap.registerPlugin(ScrollTrigger);

function ChallengeSection({ project }: { project: Project }) {
  const { challenge } = project.sections;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section ref={ref} className="relative min-h-screen section-padding py-32">
      <motion.div style={{ opacity, scale }} className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">CHALLENGE</p>
        <h2 className="editorial-title mb-12 max-w-[20ch]">
          <RevealText text={challenge.headline} />
        </h2>
        <p className="editorial-body mb-16 max-w-2xl">{challenge.body}</p>
        <div className="grid gap-8 md:grid-cols-3">
          {challenge.metrics.map((metric) => (
            <div key={metric.label} className="border-t border-border pt-6">
              <p className="text-3xl font-medium md:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ResearchSection({ project }: { project: Project }) {
  const { research } = project.sections;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".research-finding").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding py-32">
      <div ref={containerRef} className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">RESEARCH</p>
        <h2 className="editorial-title mb-8">Understanding the problem</h2>
        <p className="editorial-body mb-16 max-w-2xl">{research.summary}</p>
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {research.findings.map((finding) => (
            <div key={finding.title} className="research-finding rounded-xl border border-border p-6">
              {finding.stat && <span className="text-2xl font-medium text-accent">{finding.stat}</span>}
              <h3 className="mt-2 text-lg font-medium">{finding.title}</h3>
              <p className="mt-2 text-sm text-muted">{finding.detail}</p>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <h3 className="mb-8 text-xs uppercase tracking-[0.25em] text-muted">Journey Map</h3>
          <div className="flex flex-col gap-4 md:flex-row md:gap-0">
            {research.journeySteps.map((step, i) => (
              <div key={step.phase} className="relative flex-1">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-medium">{step.phase}</p>
                <p className="mt-1 text-xs text-muted">{step.insight}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {research.personas.map((persona) => (
            <blockquote key={persona.name} className="rounded-xl border border-border p-8">
              <p className="text-sm font-medium">{persona.name}</p>
              <p className="mt-1 text-xs text-muted">{persona.need}</p>
              <p className="mt-4 text-lg leading-relaxed">&ldquo;{persona.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ project }: { project: Project }) {
  const { process } = project.sections;
  return (
    <section className="section-padding py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">PROCESS</p>
        <h2 className="editorial-title mb-16">How we got there</h2>
        {process.phases.map((phase, i) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-12 md:pl-16"
          >
            <span className="font-mono text-xs text-muted">{phase.duration}</span>
            <h3 className="text-xl font-medium">{phase.title}</h3>
            <p className="mt-2 max-w-lg text-sm text-muted">{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PrototypesSection({ project }: { project: Project }) {
  const { prototypes } = project.sections;
  const [active, setActive] = useState(0);
  return (
    <section className="section-padding py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">PROTOTYPES</p>
        <h2 className="editorial-title mb-8">{prototypes.title}</h2>
        <p className="editorial-body mb-16 max-w-2xl">{prototypes.description}</p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-border bg-surface/50 p-8">
            <motion.div key={active} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl" style={{ backgroundColor: `${project.color}15` }}>
                <span className="h-8 w-8 rounded-full" style={{ backgroundColor: project.color }} />
              </div>
              <h3 className="text-lg font-medium">{prototypes.interactions[active]?.name}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">{prototypes.interactions[active]?.detail}</p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            {prototypes.interactions.map((interaction, i) => (
              <button
                key={interaction.name}
                type="button"
                data-cursor="pointer"
                onClick={() => setActive(i)}
                className={`rounded-xl border p-4 text-left ${active === i ? "border-foreground bg-foreground text-background" : "border-border"}`}
              >
                {interaction.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeSection({ project }: { project: Project }) {
  const { outcome } = project.sections;
  return (
    <section className="section-padding py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">OUTCOME</p>
        <h2 className="editorial-title mb-16 max-w-[16ch]">{outcome.headline}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {outcome.impact.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border p-8"
            >
              <p className="text-4xl font-medium md:text-5xl" style={{ color: project.color }}>{item.change}</p>
              <p className="mt-4 text-lg font-medium">{item.metric}</p>
              <p className="mt-2 text-sm text-muted">{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReflectionSection({ project }: { project: Project }) {
  const { reflection } = project.sections;
  return (
    <section className="section-padding py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted">REFLECTION</p>
        <h2 className="editorial-title mb-12">Lessons learned</h2>
        <ul className="mb-12 space-y-6">
          {reflection.lessons.map((lesson, i) => (
            <li key={i} className="flex gap-4 border-b border-border pb-6">
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg leading-relaxed">{lesson}</p>
            </li>
          ))}
        </ul>
        <p className="editorial-body max-w-2xl">{reflection.nextSteps}</p>
      </div>
    </section>
  );
}

export function CaseStudyViewer({ project }: { project: Project }) {
  return (
    <article>
      <section className="relative flex min-h-[80vh] flex-col justify-end section-padding pb-16 pt-32">
        <Link href="/#work" data-cursor="pointer" className="mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground">
          ← Back to exhibition
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted">
            {project.year} · {project.category} · {project.role}
          </p>
          <h1 className="editorial-display mb-6">{project.title}</h1>
          <p className="max-w-2xl text-xl text-muted md:text-2xl">{project.subtitle}</p>
        </motion.div>
      </section>
      <ChallengeSection project={project} />
      <ResearchSection project={project} />
      <ProcessSection project={project} />
      <PrototypesSection project={project} />
      <OutcomeSection project={project} />
      <ReflectionSection project={project} />
    </article>
  );
}
