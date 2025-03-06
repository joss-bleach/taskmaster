import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";

export const metadata: Metadata = {
  title: "Overview",
};

const Page = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/log-in");
  }

  return <div>Dashboard Page</div>;
};

export default Page;
