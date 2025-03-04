import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Taskmaster",
    default: "Taskmaster",
  },
  description:
    "Streamline your workflow with Taskmaster - the all-in-one solution for managing teams, projects, and tasks.",
};

import { AppProvider } from "@/providers/app-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} antialiased h-full min-h-screen`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
