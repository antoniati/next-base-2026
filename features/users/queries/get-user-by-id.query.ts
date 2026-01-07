import "server-only";
import { userRepo } from "../repositories/user.repo";

export async function getUserByIdQuery(userId: string) {
  return userRepo.findById(userId);
}
