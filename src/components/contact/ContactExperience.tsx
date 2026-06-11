"use client";

import type { SiteContent } from "@/lib/content/types";

export function ContactExperience({ site }: { site: SiteContent }) {
  return (
    <section id="contact" className="section-padding py-32 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="editorial-title">
            Let&apos;s
            <br />
            <span className="text-muted">connect</span>
          </h2>
          <p className="max-w-md editorial-body">
            Open to collaboration, research partnerships, and interaction design roles.
            Based in Zurich — working across India and Europe.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted">Email</p>
            <a
              href={`mailto:${site.email}`}
              data-cursor="pointer"
              className="text-2xl font-medium transition-opacity hover:opacity-60 md:text-4xl"
            >
              {site.email}
            </a>
            <p className="mt-8 text-sm text-muted">{site.education}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {Object.entries(site.social).map(([key, url]) =>
              url ? (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="group"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">{key}</span>
                  <span className="mt-1 block text-sm underline underline-offset-4 transition-opacity group-hover:opacity-60">
                    Connect →
                  </span>
                </a>
              ) : null,
            )}
          </div>
        </div>

        <p className="mt-24 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Designed with intention at ZHdK.
        </p>
      </div>
    </section>
  );
}
