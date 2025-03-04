"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { authClient } from "../../lib/auth-client";

import { Providers } from "../../types/providers";

import { Button } from "@/components/ui/button";

export const SocialButtons = () => {
  const signIn = async (provider: Providers) => {
    const data = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <div className="flex w-full flex-col gap-2 py-4">
      <Button
        onClick={async () => await signIn("github")}
        className="hover:bg-primary/90 bg-primary text-background relative flex h-[40px] w-full cursor-pointer items-center justify-center space-x-2 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        <FaGithub className="absolute top-3 left-3 size-4" />
        Continue with Github
      </Button>
      <Button
        onClick={async () => await signIn("google")}
        className="hover:bg-primary/90 bg-primary text-background relative flex h-[40px] w-full cursor-pointer items-center justify-center space-x-2 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        <FaGoogle className="absolute top-3 left-3 size-4" />
        Continue with Google
      </Button>
    </div>
  );
};
