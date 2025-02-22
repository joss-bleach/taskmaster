import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getUserId } from "@/supabase/user";

import { SignInSection } from "@/modules/auth/ui/sections/sign-in-section";

export const metadata: Metadata = {
  title: "Welcome back",
};

const Page = async () => {
  const userId = await getUserId();
  console.log(userId);
  if (userId) return redirect("/");
  return <SignInSection />;
};

export default Page;
