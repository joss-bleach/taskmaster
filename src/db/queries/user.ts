import { eq } from "drizzle-orm";
import { db } from "..";
import { user } from "../schema";

export async function getUserProfile({ userId }: { userId: string }) {
  const users = await db.select().from(user).where(eq(user.id, userId));
  return users[0] ?? null;
}
