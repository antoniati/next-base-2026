import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/server/db";
import { signInSchema } from "@/features/auth/schemas/credentials.schema";
import { verifyCredentials } from "@/features/auth/services/verify-credentials.server";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "database",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsed = signInSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const user = await verifyCredentials(
          parsed.data.email,
          parsed.data.password
        );

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
