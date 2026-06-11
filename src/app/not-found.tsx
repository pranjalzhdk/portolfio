import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center section-padding">
      <p className="font-mono text-xs tracking-[0.3em] text-muted">404</p>
      <h1 className="editorial-title mt-4">Lost in the exhibition</h1>
      <p className="mt-4 text-muted">This case study doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 text-sm uppercase tracking-[0.2em] underline underline-offset-4"
      >
        Return home
      </Link>
    </div>
  );
}
