import { requireSession } from "./session";
import { redirect } from "next/navigation";

export async function requireRole(roles: string[]) {
  const session = await requireSession();

  if (!roles.includes(session.user.role)) {
    redirect("/unauthorized");
  }

  return session;
}
