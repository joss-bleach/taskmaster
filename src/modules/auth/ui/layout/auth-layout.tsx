import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButton } from "../components/auth-button";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <header className="mx-auto flex h-[80px] w-full max-w-6xl items-center px-6">
        <div className="flex h-full w-full items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </header>
      <div className="mx-auto w-[380px] px-6 py-16 md:px-0">{children}</div>
    </div>
  );
};
