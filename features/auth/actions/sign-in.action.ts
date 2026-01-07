"use server";

import { signIn } from "@/lib/server/auth";
import { signInSchema } from "../schemas/credentials.schema";

export async function signInAction(_: unknown, formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = signInSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false };
  }

  await signIn("credentials", {
    email: parsed.data.email,
    password: parsed.data.password,
    redirect: false,
  });

  return { ok: true };
}
