import { ThemeProvider } from "next-themes";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
