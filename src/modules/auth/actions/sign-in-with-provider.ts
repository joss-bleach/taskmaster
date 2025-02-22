"use server";
import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { env } from "@/config/env";

import { createClient } from "@/supabase/client";

export async function signInWithProvider(provider: Provider) {
  if (!provider) {
    return redirect("/login?message=Something went wrong");
  }

  const supabase = await createClient();
  const redirectUrl = env.NEXT_PUBLIC_BASE_URL + "/auth/callback";

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
