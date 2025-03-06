"use client";
import { useState, useEffect, useRef } from "react";
import { EllipsisIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { useSelectOrganization } from "../../hooks/use-select-organization";
import { useCreateOrganization } from "../../hooks/use-create-organization";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SelecteOrganizationModal } from "./select-organization-modal";
import { CreateOrganizationModal } from "./create-organization-modal";

export const SelectOrganizationButton = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { open: openSelectOrganization } = useSelectOrganization();
  const { open: openCreateOrganization } = useCreateOrganization();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsChecked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setIsChecked(false);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={containerRef}>
        <input
          type="checkbox"
          className="hidden"
          id="organization-switch-button"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="organization-switch-button" className="relative z-10">
          <Avatar className="relative size-[40px] rounded-none">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className="bg-background border-border text-foreground hover:bg-accent flex size-[40px] items-center justify-center rounded-none border text-sm transition hover:cursor-pointer">
              CN
            </AvatarFallback>
          </Avatar>
        </label>
        <ul
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 flex -translate-y-[2px] scale-80 flex-col items-center gap-2 transition",
            isChecked &&
              "pointer-events-auto -translate-y-[48px] scale-100 transition",
          )}
        >
          <li
            className={cn(
              "pointer-events-auto translate-y-[48px] transition",
              isChecked
                ? "translate-y-0"
                : "pointer-events-none translate-y-[48px] transition",
            )}
          >
            <Tooltip>
              <TooltipProvider>
                <TooltipTrigger
                  onClick={openCreateOrganization}
                  className="bg-background text-foreground border-border hover:bg-accent flex size-[40px] flex-row items-center justify-center border p-3 shadow-none transition hover:cursor-pointer"
                >
                  <PlusIcon />
                </TooltipTrigger>
                <TooltipContent
                  className="bg-background text-foreground border-border border shadow-none"
                  side="right"
                  sideOffset={10}
                >
                  Create organization
                </TooltipContent>
              </TooltipProvider>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipProvider>
                <TooltipTrigger
                  onClick={openSelectOrganization}
                  className="bg-background text-foreground border-border hover:bg-accent flex size-[40px] flex-row items-center justify-center border p-3 shadow-none transition hover:cursor-pointer"
                >
                  <EllipsisIcon />
                </TooltipTrigger>
                <TooltipContent
                  className="bg-background text-foreground border-border border shadow-none"
                  side="right"
                  sideOffset={10}
                >
                  Select organization
                </TooltipContent>
              </TooltipProvider>
            </Tooltip>
          </li>
        </ul>
      </div>
      <SelecteOrganizationModal />
      <CreateOrganizationModal isInitialModal={false} />
    </>
  );
};
