import { eq } from "drizzle-orm";
import db from "..";
import { member } from "../schema";

export async function getMembershipsByUserId({ userId }: { userId: string }) {
  return await db.select().from(member).where(eq(member.userId, userId));
}
