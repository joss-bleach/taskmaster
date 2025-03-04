import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";

import { LoginForm } from "@/modules/auth/ui/components/login-form";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = async () => {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return <LoginForm />;
};

export default Page;
