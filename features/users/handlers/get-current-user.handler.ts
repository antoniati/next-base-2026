"use server";

import { getCurrentUser } from "../queries/get-current-user.query";

export async function getCurrentUserHandler() {
  return getCurrentUser();
}
