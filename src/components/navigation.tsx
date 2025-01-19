import Link from "next/link";
import { SettingsIcon, UsersIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/",
    outlineIcon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My tasks",
    href: "/tasks",
    outlineIcon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    outlineIcon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    outlineIcon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((route) => {
        const isActive = false;
        const Icon = isActive ? route.activeIcon : route.outlineIcon;
        return (
          <li key={route.href}>
            <Link href={route.href}>
              <div
                className={cn(
                  "flex items-center gap-2.5 rounded-md p-2.5 font-medium text-neutral-500 transition hover:text-blue-700",
                  isActive &&
                    "bg-white text-primary shadow-sm hover:opacity-100",
                )}
              >
                <Icon className="text-netural-500 size-5" />
                {route.label}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
