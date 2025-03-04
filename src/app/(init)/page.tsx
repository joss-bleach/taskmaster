import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/actions/get-session";
import { getMemberships } from "@/modules/auth/actions/get-memberships";

const Page = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/log-in");
  }
  const memberships = await getMemberships();
  console.log(memberships);

  if (memberships && memberships.length > 0) {
    redirect(`/o/${memberships[0].organization.slug}`);
  }
  return <div>None</div>;
};

export default Page;
