"use server";
import { type Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { env } from "@/config/env";

import { createClient } from "@/supabase/client";

export async function signInWithProvider(provider: Provider) {
  if (!provider) {
    return redirect("/login?message=Something went wrong");
  }

  const supabase = await createClient();

  let redirectUrl = env.NEXT_PUBLIC_BASE_URL + "/auth/callback";
  if (env.NODE_ENV === "development") {
    redirectUrl = env.NEXT_PUBLIC_BASE_URL + "/auth/callback";
  }
  if (env.NODE_ENV === "production") {
    redirectUrl = process.env.VERCEL_URL + "/auth/callback";
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });

  if (error) {
    return redirect("/login?message=Something went wrong");
  }

  return redirect(data.url);
}
