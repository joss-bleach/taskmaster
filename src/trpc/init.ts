import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import { getSession } from "@/modules/auth/actions/get-session";
import { getUserProfile } from "@/db/queries/user";

export const createTRPCContext = cache(async () => {
  const session = await getSession();
  if (!session) {
    return { user: null };
  }

  const user = await getUserProfile({ userId: session.user.id });
  return { user };
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

// Create a middleware to check if user is authenticated
const isAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const createTRPCRouter = t.router;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
