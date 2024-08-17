import NextAuth from "next-auth";
import * as v from "valibot";
import argon2 from "argon2";

import Credentials from "next-auth/providers/credentials";
import { SigninSchema } from "@/validators/signin-validator";
import { findUserByEmail } from "@/resources/user-queries";

const nextAuth = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = v.safeParse(SigninSchema, credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.output;

          const user = await findUserByEmail(email);
          if (!user) return null;
          if (!user.password) return null;

          const passwordsMatch = await argon2.verify(user.password, password);

          if (passwordsMatch) {
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }

        return null;
      },
    }),
  ],
});

export const { signIn } = nextAuth;
