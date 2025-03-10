import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { organizationRouter } from "./organization";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  organization: organizationRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
