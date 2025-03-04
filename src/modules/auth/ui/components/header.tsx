import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background flex w-full flex-row items-center justify-between px-5 py-4 md:px-10 md:py-10">
      <Logo />
      <Button>Sign in</Button>
    </header>
  );
};
