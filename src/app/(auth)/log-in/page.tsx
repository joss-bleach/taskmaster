import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";

const Page = async () => {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return <div>Log in</div>;
};

export default Page;
