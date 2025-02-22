import { redirect } from "next/navigation";

import { getSession } from "@/supabase/session";

import { getWorkspaceMembershipByUserId } from "@/modules/member/actions";

const Page = async () => {
  const {
    data: { session },
  } = await getSession();

  // if (!session) {
  //   redirect("/sign-in");
  // }
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
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
