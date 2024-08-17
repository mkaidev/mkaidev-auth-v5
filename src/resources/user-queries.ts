import "server-only";

import { eq } from "drizzle-orm";

import db from "@/drizzle";
import { lower, users } from "@/drizzle/schema";

export const findUserByEmail = async (
  email: string,
): Promise<typeof users.$inferSelect | null> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(lower(users.email), email.toLowerCase()))
    .then((res) => res[0] ?? null);

  return user;
};
