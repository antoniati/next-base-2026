import { userRepo } from "../repositories/user.repo";

export async function updateProfileService(input: {
  userId: string;
  name: string;
}) {
  if (input.name.length < 3) {
    throw new Error("INVALID_NAME");
  }

  return userRepo.updateProfile(input.userId, {
    name: input.name,
  });
}
