import { AuthHeading } from "@/modules/auth/ui/components/auth-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = () => {
  return (
    <div>
      <AuthHeading title="Get started." />
    </div>
  );
};

export default Page;
