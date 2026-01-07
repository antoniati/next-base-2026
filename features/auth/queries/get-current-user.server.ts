import { prisma } from "@/lib/server/db";
import { requireUserId } from "@/lib/server/session";

export async function getCurrentUser() {
  const userId = await requireUserId();

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  });
}
