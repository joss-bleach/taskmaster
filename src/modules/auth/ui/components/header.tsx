import { Logo } from "@/components/logo";
import { AuthButton } from "./auth-button";

export const Header = () => {
  return (
    <header className="bg-background flex w-full flex-row items-center justify-between px-5 py-4 md:px-10 md:py-10">
      <Logo />
      <AuthButton />
    </header>
  );
};
