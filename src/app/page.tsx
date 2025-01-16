"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { useLogout } from "@/features/auth/api/use-logout";

import { Button } from "@/components/ui/button";

const Home = () => {
  const { data, isLoading } = useCurrentUser();
  const { mutate } = useLogout();

  const router = useRouter();
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div>
      Home<Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};

export default Home;
