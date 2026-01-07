"use server";

import { signInSchema } from "../schemas/credentials.schema";
import { verifyCredentials } from "../services/verify-credentials.server";

export async function signInAction(_: unknown, formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = signInSchema.safeParse(raw);

  if (!parsed.success) {
    return { ok: false, error: "Invalid input" };
  }

  const user = await verifyCredentials(
    parsed.data.email,
    parsed.data.password
  );

  if (!user) {
    return { ok: false, error: "Invalid credentials" };
  }

  // sessão entra aqui depois (NextAuth)
  return { ok: true, user };
}
