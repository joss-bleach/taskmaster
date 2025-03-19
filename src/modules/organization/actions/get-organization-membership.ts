"use server";
import "server-only";
import { getMembershipsByUserId } from "@/db/queries/organization";

export const getOrganizationMembership = async ({
  userId,
}: {
  userId: string;
}) => {
  const memberships = await getMembershipsByUserId({ userId });

  if (memberships.length === 0) {
    return null;
  }

  return memberships;
};
