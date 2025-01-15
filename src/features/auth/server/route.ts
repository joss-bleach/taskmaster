import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema } from "../schema";

const app = new Hono().post(
  "/signin",
  zValidator("json", signInSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");
    console.log({ email, password });
    return c.json({ success: "ok" });
  },
);

export default app;
