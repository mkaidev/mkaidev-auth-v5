"use server";

type Res =
  | { success: true }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function signinUserAction(values: unknown): Promise<Res> {
  // The auth logic will be done in our AuthJS config

  return { success: true };
}
