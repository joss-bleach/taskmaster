import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Taskmaster",
    default: "Taskmaster",
  },
  description: "Manage your projects, tasks and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} h-full min-h-screen w-full bg-background text-foreground antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
