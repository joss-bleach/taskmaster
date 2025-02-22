import { createClient } from "./client";

export async function getSession() {
  const supabase = await createClient();

  return supabase.auth.getSession();
}
