import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/actions";

import { UserButton } from "@/features/auth/components/user-button";

const DashboardPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return <div>Home</div>;
};

export default DashboardPage;
