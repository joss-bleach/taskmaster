"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderKanbanIcon,
  HouseIcon,
  ListTodoIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const sidebarLinkItems = [
  {
    label: "Home",
    icon: HouseIcon,
    href: "/",
  },
  {
    label: "Tasks",
    icon: ListTodoIcon,
    href: "/tasks",
  },
  {
    label: "Projects",
    icon: FolderKanbanIcon,
    href: "/projects",
  },
  {
    label: "Members",
    icon: UsersIcon,
    href: "/members",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
];

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="py-6">
      <ul className="flex w-full flex-col items-center gap-2">
        {sidebarLinkItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === `${pathname}`
              : pathname.startsWith(`${pathname}${item.href}`);
          return (
            <li key={item.label}>
              <Tooltip>
                <TooltipProvider>
                  <TooltipTrigger>
                    <Button
                      asChild
                      className={cn(
                        "bg-background text-foreground hover:border-border hover:bg-accent size-[45px] shadow-none transition hover:border",
                        isActive && "border-border bg-accent border",
                      )}
                    >
                      <Link href={`${pathname}${item.href}`}>
                        <Icon />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-background text-foreground border-border border shadow-none"
                    side="right"
                    sideOffset={10}
                  >
                    {item.label}
                  </TooltipContent>
                </TooltipProvider>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
