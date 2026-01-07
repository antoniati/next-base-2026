import { requireSession } from "@/lib/server/session";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireSession();

  return children;
}
