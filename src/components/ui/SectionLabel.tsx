"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex items-center gap-4", className)}
    >
      <span className="font-mono text-xs tracking-[0.2em] text-muted">
        {index}
      </span>
      <span className="h-px w-8 bg-border" />
      <span className="text-xs uppercase tracking-[0.25em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}
