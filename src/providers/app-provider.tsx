import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <NuqsAdapter>
        <Toaster />
        {children}
      </NuqsAdapter>
    </ThemeProvider>
  );
};
