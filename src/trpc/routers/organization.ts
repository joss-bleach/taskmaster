import { createTRPCRouter, protectedProcedure } from "../init";
import { getMembershipsByUserId } from "@/db/queries/member";
import { getOrganizationBySlug } from "@/db/queries/organization";
import { z } from "zod";

export const organizationRouter = createTRPCRouter({
  getUserOrganizations: protectedProcedure.query(async ({ ctx }) => {
    const memberships = await getMembershipsByUserId({ userId: ctx.user.id });
    return memberships;
  }),

  getOrganizationBySlug: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const organization = await getOrganizationBySlug({ slug: input.slug });
      return organization;
    }),
});
