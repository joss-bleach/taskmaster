import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().min(1).email(),
  password: z.string().trim().min(1),
});

export const signUpSchema = z.object({
  name: z.string().trim().min(1).max(256),
  email: z.string().trim().min(1).email(),
  password: z.string().trim().min(8).max(256),
});
