import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  SKIP_SESSION_REFRESH_COOKIE,
  setSkipSessionRefreshCookie,
} from "./skip-session-refresh";

import { env } from "@/config/env";

export async function updateSession(
  request: NextRequest,
  response: NextResponse,
) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(
          ({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          setSkipSessionRefreshCookie(response, true),
        );
      },
    },
  });

  if (!request.cookies.get(SKIP_SESSION_REFRESH_COOKIE)) {
    await supabase.auth.getUser();
  }

  return supabaseResponse;
}
