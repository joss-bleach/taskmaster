import { db } from "..";
import { eq } from "drizzle-orm";

import { member, organization } from "../schema";

export async function getMembershipsByUserId({ userId }: { userId: string }) {
  return await db
    .select()
    .from(member)
    .where(eq(member.userId, userId))
    .innerJoin(organization, eq(member.organizationId, organization.id));
}
