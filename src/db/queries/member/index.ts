import { db } from "@/db";
import { eq } from "drizzle-orm";

import { member } from "@/db/schema";

export async function getMembershipByUser({ userId }: { userId: string }) {
  return await db.query.member.findMany({
    where: eq(member.userId, userId),
  });
}
