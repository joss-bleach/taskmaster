import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getSession } from "@/supabase/session";

import { SignUpSection } from "@/modules/auth/ui/sections/sign-up-section";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  // const { data: session } = await getSession();
  // if (session) return redirect("/");
  return <SignUpSection />;
};

export default Page;
