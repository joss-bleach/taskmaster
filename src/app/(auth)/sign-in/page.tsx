import { Metadata } from "next";

import { SignInSection } from "@/modules/auth/ui/sections/sign-in-section";

export const metadata: Metadata = {
  title: "Welcome back",
};

const Page = () => {
  return <SignInSection />;
};

export default Page;
