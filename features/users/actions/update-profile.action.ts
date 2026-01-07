"use server";

import { z } from "zod";
import { requireUserId } from "@/lib/server/session";
import { updateProfileService } from "../services/update-profile.service";

const schema = z.object({
  name: z.string().min(3),
});

export async function updateProfileAction(input: unknown) {
  const userId = await requireUserId();
  const data = schema.parse(input);

  return updateProfileService({
    userId,
    name: data.name,
  });
}
