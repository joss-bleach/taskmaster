"use server";
import "server-only";
import { auth } from "../lib/auth";
import { headers } from "next/headers";

import { getMembershipsByUserId } from "@/db/queries/member";

export async function getMemberships() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  return await getMembershipsByUserId({ userId: session.user.id });
}
