import { Metadata } from "next";
import { SignUpSection } from "@/modules/auth/ui/sections/sign-up-section";

export const metadata: Metadata = {
  title: "Get started",
};

const Page = async () => {
  return <SignUpSection />;
};

export default Page;
