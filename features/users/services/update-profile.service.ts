import { AppError } from "@/lib/core/app-error";
import { err, ok, Result } from "@/lib/core/result";
import { userRepo } from "../repositories/user.repo";

type Input = {
  userId: string;
  name: string;
};

export async function updateProfileService(
  input: Input
): Promise<Result<void, AppError>> {
  if (input.name.length < 3) {
    return err(AppError.validation("Name too short"));
  }

  const user = await userRepo.findById(input.userId);
  if (!user) {
    return err(AppError.notFound("User"));
  }

  await userRepo.updateProfile(input.userId, {
    name: input.name,
  });

  return ok(undefined);
}
