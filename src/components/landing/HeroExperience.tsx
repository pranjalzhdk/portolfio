"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HomepageContent, SiteContent } from "@/lib/content/types";
import { Magnetic } from "@/components/ui/Magnetic";
import { InteractionNetwork } from "./InteractionNetwork";

type HeroProps = {
  site: SiteContent;
  homepage: HomepageContent;
};

function MagneticWord({ word, index }: { word: string; index: number }) {
  return (
    <motion.span
      className="inline-block cursor-default"
      whileHover={{ y: -6, color: "#6366f1" }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: index * 0.02 }}
    >
      {word}
    </motion.span>
  );
}

export function HeroExperience({ site, homepage }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const nameWords = homepage.heroHeadline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden section-padding pb-16 pt-32 md:pb-24"
    >
      <InteractionNetwork />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 mx-auto w-full max-w-[1600px]"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-8 font-mono text-xs tracking-[0.3em] text-muted"
        >
          {homepage.heroEyebrow}
        </motion.p>

        <h1 className="editorial-display mb-4 max-w-[14ch]">
          {nameWords.map((word, i) => (
            <span key={i} className="mr-[0.2em] inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <MagneticWord word={word} index={i} />
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mb-3 text-xl tracking-tight md:text-2xl"
        >
          {homepage.heroSubline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mb-2 text-sm text-muted"
        >
          Based in Zurich · Originally from India
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mb-12 max-w-xl editorial-body"
        >
          {homepage.heroStatement}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-3">
          {site.interests.slice(0, 4).map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.05 }}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {interest}
            </motion.span>
          ))}
        </div>

        <Magnetic strength={0.12}>
          <motion.a
            href="#work"
            data-cursor="pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="group inline-flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.25em]">
              Enter the exhibition
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:bg-accent-soft">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M6 10l-4-4M6 10l4-4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
          </motion.a>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-0 right-0 mx-auto h-px max-w-[1600px] origin-left bg-border section-padding"
      />
    </section>
  );
}
