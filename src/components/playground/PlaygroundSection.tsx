"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { PlaygroundDemo } from "@/lib/content/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function MagneticTypeDemo() {
  const text = "INTERACT";
  return (
    <div className="flex justify-center gap-1">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="text-2xl font-medium md:text-3xl"
          whileHover={{ y: -8, color: "#6366f1" }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

function PhysicsToggleDemo() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      data-cursor="pointer"
      onClick={() => setOn(!on)}
      className="relative h-8 w-14 rounded-full border border-border p-1"
    >
      <motion.div
        className="h-6 w-6 rounded-full bg-foreground"
        animate={{ x: on ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}

function MorphButtonDemo() {
  const [sent, setSent] = useState(false);
  return (
    <motion.button
      type="button"
      data-cursor="pointer"
      onClick={() => {
        setSent(true);
        setTimeout(() => setSent(false), 2000);
      }}
      animate={{ width: sent ? 48 : 120, borderRadius: sent ? 24 : 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex h-12 items-center justify-center bg-foreground text-background"
    >
      {sent ? "✓" : "Send"}
    </motion.button>
  );
}

const demoComponents: Record<string, React.ReactNode> = {
  "magnetic-type": <MagneticTypeDemo />,
  "elastic-cursor": <p className="text-center text-xs text-muted">Move your cursor on desktop</p>,
  "morph-button": <MorphButtonDemo />,
  "particle-field": <p className="text-center text-xs text-muted">See hero interaction network</p>,
  "scroll-reveal": <motion.p className="text-center text-sm text-muted" whileInView={{ opacity: 1 }} initial={{ opacity: 0.3 }}>Scroll-driven reveal</motion.p>,
  "toggle-physics": <PhysicsToggleDemo />,
};

export function PlaygroundSection({ demos }: { demos: PlaygroundDemo[] }) {
  const [activeDemo, setActiveDemo] = useState(demos[0]?.id ?? "");
  const current = demos.find((d) => d.id === activeDemo);

  return (
    <section id="playground" className="section-padding py-32 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="04" label="Playground" className="mb-12" />
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="editorial-title">
            Interaction
            <br />
            <span className="text-muted">experiments</span>
          </h2>
          <p className="max-w-md editorial-body">
            Micro-interactions and motion studies from ZHdK studios — where I test ideas before they become projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {demos.map((demo) => (
              <button
                key={demo.id}
                type="button"
                data-cursor="pointer"
                onClick={() => setActiveDemo(demo.id)}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-3 text-left lg:px-5 lg:py-4",
                  activeDemo === demo.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/20",
                )}
              >
                <span className="text-sm font-medium">{demo.title}</span>
                <span className={cn("mt-1 block text-xs", activeDemo === demo.id ? "text-background/70" : "text-muted")}>
                  {demo.type}
                </span>
              </button>
            ))}
          </div>
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[320px] flex-col rounded-2xl border border-border bg-surface/50 p-8 md:p-12"
          >
            <p className="mb-8 text-sm text-muted">{current?.description}</p>
            <div className="flex flex-1 items-center justify-center">
              {demoComponents[activeDemo]}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
