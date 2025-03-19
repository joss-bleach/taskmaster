import { redirect } from "next/navigation";

import { getSession } from "@/modules/auth/actions/get-session";
import { getOrganizationMembership } from "@/modules/organization/actions/get-organization-membership";

import { CreateOrganizationModal } from "@/modules/organization/ui/components/create-organization-modal";

const Page = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/auth");
  }
  const memberships = await getOrganizationMembership({
    userId: session.user.id,
  });

  if (memberships && memberships.length > 0) {
    redirect(`/o/${memberships[0].organizationId}`);
  }

  return <CreateOrganizationModal isInitialModal={true} />;
};

export default Page;
