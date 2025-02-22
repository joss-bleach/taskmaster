import { createServerClient } from "@supabase/ssr";
import { env } from "@/config/env";
import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();

  const client = createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {}
      },
    },
  });

  const {
    data: { user },
  } = await client.auth.getUser();
  return user;
}
