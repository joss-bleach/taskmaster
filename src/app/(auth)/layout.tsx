"use client";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isSignInPage = pathname === "/sign-in";

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <h2 className="font-semibold uppercase tracking-wide">Taskmaster</h2>

          <Button variant="ghost" asChild>
            <Link
              href={isSignInPage ? "/sign-up" : "/sign-in"}
              aria-label={
                isSignInPage ? "Create an account" : "Log in to your account"
              }
            >
              {isSignInPage ? "Sign up" : "Log in"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
