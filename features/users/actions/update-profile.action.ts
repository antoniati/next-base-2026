"use server";

import { z } from "zod";
import { requireUserId } from "@/lib/server/session";
import { updateProfileService } from "../services/update-profile.service";
import { AppError } from "@/lib/core/app-error";
import { err } from "@/lib/core/result";

const schema = z.object({
  name: z.string().min(3),
});

export async function updateProfileAction(input: unknown) {
  try {
    const userId = await requireUserId();
    const data = schema.parse(input);

    return await updateProfileService({
      userId,
      name: data.name,
    });
  } catch (e) {
    // Zod / sessão / inesperado
    return err(AppError.internal({ cause: e }));
  }
}
