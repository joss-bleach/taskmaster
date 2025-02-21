import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const SocialAuth = () => {
  return (
    <div className="flex w-full flex-col gap-4 py-6">
      <Button className="hover:bg-primary/90 bg-primary text-secondary relative flex h-[40px] w-full items-center justify-center space-x-2 px-6 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
        <FaGithub size={24} className="absolute left-5 top-3" />
        Continue with Github
      </Button>
      <Button className="hover:bg-primary/90 bg-primary text-secondary relative flex h-[40px] w-full items-center justify-center space-x-2 px-6 py-4 text-sm font-medium transition-colors focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50">
        <FaGoogle size={24} className="absolute left-5 top-3" />
        Continue with Google
      </Button>
    </div>
  );
};
