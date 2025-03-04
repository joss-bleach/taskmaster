import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return <div>Create account</div>;
};

export default Page;
