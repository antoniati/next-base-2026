import { auth } from "@/lib/server/auth";
import { redirect } from "next/navigation";

export async function getSession() {
  return auth();
}

export async function requireSession() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

export async function getUserId() {
  const session = await auth();
  return session?.user?.id ?? null;
}

export async function requireUserId() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session.user.id;
}
