"use server";

import { requireSession } from "@/lib/server/session";
import { ok, err } from "@/lib/core/result";
import { AppError } from "@/lib/core/app-error";

export async function getMeAction() {
  const session = await requireSession();
  if (!session) return err(AppError.unauthorized());

  return ok({
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
  });
}
