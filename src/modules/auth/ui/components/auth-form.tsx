"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { authClient } from "../../lib/client";
import { Provider } from "@/modules/auth/types/";

import { Button } from "@/components/ui/button";

export const AuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSocialSignIn = async (provider: Provider) => {
    try {
      setIsLoading(true);
      await authClient.signIn.social({
        provider,
      });
      router.push("/");
    } catch (err) {
      toast.error(`Unable to sign in with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-[380px]">
      <div className="flex flex-col">
        <h1 className="text-foreground pb-4 text-3xl font-medium">
          Welcome to Taskmaster
        </h1>
        <h2 className="pb-1 text-2xl font-medium text-[#878787]">
          Manage your teams, tasks and projects.
        </h2>
      </div>
      <div className="my-6 flex flex-col gap-2">
        <Button
          disabled={isLoading}
          onClick={() => handleSocialSignIn("github")}
          className="bg-primary text-background hover:bg-primary/85 relative h-[40px] w-full font-medium shadow-none hover:cursor-pointer"
        >
          {isLoading ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            <>
              <FaGithub className="absolute left-4" />
              <span>Continue with GitHub</span>
            </>
          )}
        </Button>
      </div>
      <p className="pb-4 text-xs text-[#878787]">
        By signing in or creating an account, you acknowledge that you agree to
        our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};
