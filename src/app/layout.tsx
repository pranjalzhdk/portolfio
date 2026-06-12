import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const site = await content.getSite();
    return {
      title: {
        default: `${site.name} — ${site.headline}`,
        template: `%s · ${site.name}`,
      },
      description: site.statement,
    };
  } catch {
    return {
      title: "Pranjal Sharma — Interaction Design Portfolio",
      description: "Interaction design portfolio",
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
