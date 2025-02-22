import { createClient } from "./client";

export async function getUserId() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  if (user.user?.id) {
    return null;
  }
  return user.user?.id;
}
