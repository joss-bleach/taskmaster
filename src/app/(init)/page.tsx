import { getWorkspaceMembershipByUserId } from "@/modules/member/actions";
import { getSession } from "@/supabase/session";
import { redirect } from "next/navigation";

const Page = async () => {
  const {
    data: { session },
  } = await getSession();
  if (!session) return redirect("/sign-in");
  const membership = await getWorkspaceMembershipByUserId({
    userId: session.user.id,
  });

  if (membership.length > 0) {
    return redirect(`/w/${membership[0].workspaceId}/`);
  }

  return redirect("/create-workspace");
};

export default Page;
