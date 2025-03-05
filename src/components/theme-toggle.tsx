"use client";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-background border-border hover:bg-accent text-foreground size-[32px] rounded-full border shadow-none transition hover:cursor-pointer"
    >
      T
    </Button>
  );
};
