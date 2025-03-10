"use client";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

import { trpc } from "@/trpc/client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserButton = () => {
  const { data: user, isLoading: isPending, error } = trpc.user.me.useQuery();
  const router = useRouter();

  if (isPending) {
    return <Skeleton className="size-[32px] rounded-full" />;
  }

  if (error || !user) {
    return null;
  }

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer">
        <Avatar className="size-[32px]">
          <AvatarImage src={user.image || ""} />
          <AvatarFallback className="bg-background text-foreground border-border flex items-center justify-center border text-xs font-medium">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="start"
        side="bottom"
        alignOffset={-135}
        className="bg-background text-foreground border-border min-w-[8rem] border shadow-none"
      >
        <div className="px-2 py-1.5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="line-clamp-1 block max-w-[155px] truncate text-sm font-semibold">
                {user.name}
              </span>
              <span className="truncate text-xs font-normal text-[#606060]">
                {user.email}
              </span>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-accent text-foreground bg-background px-2 py-1.5 transition hover:cursor-pointer">
          My account
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-accent text-foreground bg-background px-2 py-1.5 transition hover:cursor-pointer">
          My projects
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-accent text-foreground bg-background px-2 py-1.5 transition hover:cursor-pointer">
          My teams
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => await signOut()}
          className="hover:bg-accent text-foreground bg-background px-2 py-1.5 transition hover:cursor-pointer"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
