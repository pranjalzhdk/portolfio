"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteContent } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
  { href: "#playground", label: "Playground" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav({ site }: { site: SiteContent }) {
  const [open, setOpen] = useState(false);
  const firstName = site.name.split(" ")[0];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 section-padding"
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between py-6">
          <Link href="/" data-cursor="pointer" className="text-sm font-medium tracking-tight">
            {firstName}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="pointer"
                  className="text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-cursor="pointer"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={cn("h-px w-6 bg-foreground transition-transform", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-px w-6 bg-foreground transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-6 bg-foreground transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="editorial-title"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
