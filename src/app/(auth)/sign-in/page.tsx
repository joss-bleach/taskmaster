import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getSession } from "@/supabase/session";

import { SignInSection } from "@/modules/auth/ui/sections/sign-in-section";

export const metadata: Metadata = {
  title: "Welcome back",
};

const Page = async () => {
  // const { data: session } = await getSession();
  // if (session) return redirect("/");
  return <SignInSection />;
};

export default Page;
