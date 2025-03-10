import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";

import { getSession } from "@/modules/auth/actions/get-session";
import { getUserProfile } from "@/db/queries/user";

export const createTRPCContext = cache(async () => {
  const session = await getSession();
  if (!session) {
    return { userId: null };
  }

  return { userId: session.user.id };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = baseProcedure.use(
  async function isAuthed(opts) {
    const { ctx } = opts;

    if (!ctx.userId) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });
    }

    const user = await getUserProfile({ userId: ctx.userId });

    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });
    }

    return opts.next({
      ctx: {
        ...ctx,
        user,
      },
    });
  },
);
