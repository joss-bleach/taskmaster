import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";

import { SignUpForm } from "@/modules/auth/ui/components/sign-up-form";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return <SignUpForm />;
};

export default Page;
