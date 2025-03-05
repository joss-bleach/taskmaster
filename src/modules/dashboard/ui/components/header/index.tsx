import { UserButton } from "@/modules/auth/ui/components/user-button";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="bg-background w-full pr-0 md:pr-10">
      <div className="border-border flex h-full w-full items-center border-b py-6">
        <div className="flex h-[32px] w-full flex-row items-center justify-between">
          <p>Test</p>
          <ul className="flex flex-row items-center gap-2">
            <ThemeToggle />
            <UserButton />
          </ul>
        </div>
      </div>
    </header>
  );
};
