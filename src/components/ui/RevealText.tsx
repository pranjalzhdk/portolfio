"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
