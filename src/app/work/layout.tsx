import { AppShell } from "@/components/providers/AppShell";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
