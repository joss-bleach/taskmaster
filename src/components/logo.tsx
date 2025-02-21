"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={"size-32"} />;
  }

  let src;
  switch (resolvedTheme) {
    case "light":
      src = "/logo-light-mode.svg";
      break;
    case "dark":
      src = "/logo-dark-mode.svg";
      break;
    default:
      src = "/logo-light-mode.svg";
      break;
  }

  return <Image src={src} alt="Taskmaster logo" height={32} width={32} />;
};
