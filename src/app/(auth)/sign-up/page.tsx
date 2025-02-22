import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getUserId } from "@/supabase/user";

import { SignUpSection } from "@/modules/auth/ui/sections/sign-up-section";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  const userId = await getUserId();
  console.log(userId);
  if (userId) return redirect("/");
  return <SignUpSection />;
};

export default Page;
