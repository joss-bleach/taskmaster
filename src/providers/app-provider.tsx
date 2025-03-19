import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <Toaster />
      {children}
    </NuqsAdapter>
  );
};
