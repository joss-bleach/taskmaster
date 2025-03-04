"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { resolvedTheme } = useTheme();

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
