import { getWorkspaceMembershipByUserId } from "@/modules/member/actions";
import { getSession } from "@/supabase/session";
import { redirect } from "next/navigation";

const Home = async () => {
  const {
    data: { session },
  } = await getSession();
  if (!session || !session.user) return redirect("/sign-in");
  const membership = await getWorkspaceMembershipByUserId({
    userId: session.user.id,
  });

  if (membership.length === 0) {
    return redirect("/create");
  }

  return redirect(`/w/${membership[0].workspaceId}/`);
};

export default Home;
