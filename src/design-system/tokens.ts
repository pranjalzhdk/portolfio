export const tokens = {
  color: {
    bg: "var(--background)",
    fg: "var(--foreground)",
    muted: "var(--muted)",
    border: "var(--border)",
    accent: "var(--accent)",
    accentSoft: "var(--accent-soft)",
    surface: "var(--surface)",
    admin: "var(--admin-bg)",
    adminSurface: "var(--admin-surface)",
  },
  motion: {
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: {
      fast: "150ms",
      base: "300ms",
      slow: "600ms",
      slower: "900ms",
    },
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    section: "clamp(1.5rem, 5vw, 6rem)",
  },
  type: {
    display: "editorial-display",
    title: "editorial-title",
    body: "editorial-body",
    label: "text-xs uppercase tracking-[0.2em]",
  },
} as const;
