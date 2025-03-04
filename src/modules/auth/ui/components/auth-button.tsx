"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  const pathname = usePathname();

  return (
    <Button
      className="hover:bg-primary/90 bg-primary text-background flex h-[40px] w-[120px] items-center justify-center space-x-2 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      asChild
    >
      <Link
        href={pathname === "/create-account" ? "/log-in" : "/create-account"}
      >
        {pathname === "/create-account" ? "Log in" : "Get started"}
      </Link>
    </Button>
  );
};
