import { AuthHeading } from "@/modules/auth/ui/components/auth-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome back",
};

const Page = () => {
  return (
    <div>
      <AuthHeading title="Welcome back." />
    </div>
  );
};

export default Page;
