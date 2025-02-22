import { Metadata } from "next";
import { redirect } from "next/navigation";

import { SignUpSection } from "@/modules/auth/ui/sections/sign-up-section";
import { createClient } from "@/supabase/client";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  if (user) return redirect("/");
  return <SignUpSection />;
};

export default Page;
