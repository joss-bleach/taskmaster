"use server";

import { getMembershipByUser } from "@/db/queries/member";

export const getWorkspaceMembershipByUserId = async ({
  userId,
}: {
  userId: string;
}) => {
  return await getMembershipByUser({ userId });
};
