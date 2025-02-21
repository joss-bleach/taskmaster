"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Button className="hover:bg-primary/90 bg-primary text-secondary flex h-[40px] w-[100px] items-center justify-center space-x-2 px-6 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
      <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
        {pathname === "/sign-in" ? "Sign up" : "Sign in"}
      </Link>
    </Button>
  );
};
