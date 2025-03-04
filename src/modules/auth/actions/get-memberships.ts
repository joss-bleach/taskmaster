"use server";
import "server-only";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { member, organization } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getMemberships() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  return await db
    .select()
    .from(member)
    .where(eq(member.userId, session.user.id))
    .innerJoin(organization, eq(member.organizationId, organization.id));
}
