"use client";

import dynamic from "next/dynamic";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

const CustomCursor = dynamic(
  () =>
    import("@/components/cursor/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      {children}
    </SmoothScrollProvider>
  );
}
