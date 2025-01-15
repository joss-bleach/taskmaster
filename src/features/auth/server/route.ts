import { Hono } from "hono";

const app = new Hono().post("/sign-in", (c) => {
  return c.json({ success: "ok" });
});

export default app;
