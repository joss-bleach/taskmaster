"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let src = "/logo-light-mode.svg";
  if (resolvedTheme === "dark") {
    src = "/logo-dark-mode.svg";
  }

  return (
    <Image
      src={src}
      height={32}
      width={32}
      alt="Taskmaster logo"
      className="h-[32px] w-[32px]"
    />
  );
};
