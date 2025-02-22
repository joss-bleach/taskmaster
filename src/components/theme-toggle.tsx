"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const sunSvgPath =
  "M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z";
const moonSvgPath =
  "M11 21C16.5228 21 21 16.5228 21 11C12.6224 13.3083 8.00262 8.93412 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z";

const raysVariants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
    visible: {
      strokeOpacity: 1,
      stroke: "currentColor",
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
};

const rayVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return <Skeleton className="bg-accent size-[32px] rounded-full" />;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-border hover:bg-accent flex size-[32px] items-center justify-center rounded-full border bg-background transition"
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={
            resolvedTheme === "dark" ? { d: moonSvgPath } : { d: sunSvgPath }
          }
          d={resolvedTheme === "dark" ? moonSvgPath : sunSvgPath}
          className="fill-accent/80 stroke-foreground stroke-1"
        />
        <motion.g
          variants={raysVariants}
          animate={resolvedTheme === "dark" ? "hidden" : "visible"}
          className="stroke-foreground stroke-2"
        >
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M11 1V3"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M11 19V21"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M3.92999 3.92993L5.33999 5.33993"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M16.66 16.6599L18.07 18.0699"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M1 11H3"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M19 11H21"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M5.33999 16.6599L3.92999 18.0699"
          />
          <motion.path
            variants={rayVariants}
            animate={resolvedTheme === "dark" ? "hidden" : "visible"}
            d="M18.07 3.92993L16.66 5.33993"
          />
        </motion.g>
      </motion.svg>
    </Button>
  );
};
