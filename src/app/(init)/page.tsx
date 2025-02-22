import { redirect } from "next/navigation";

import { getSession } from "@/supabase/session";

import { getWorkspaceMembershipByUserId } from "@/modules/member/actions";
import { createClient } from "@/supabase/client";

const Page = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <div>{JSON.stringify(user)}</div>;
};
//   const userId = await getUserId();
//   if (!userId) return redirect("/sign-in");
//   const membership = await getWorkspaceMembershipByUserId({
//     userId,
//   });
//   if (membership.length > 0) {
//     return redirect(`/w/${membership[0].workspaceId}/`);
//   }

//   return redirect("/create-workspace");
// };

export default Page;
