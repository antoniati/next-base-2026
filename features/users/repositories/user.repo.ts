import "server-only";
import { prisma } from "@/lib/server/db";

export const userRepo = {
  findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  updateProfile(id: string, data: { name: string }) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },
};
