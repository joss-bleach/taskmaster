import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Taskmaster",
    default: "Taskmaster",
  },
  description: "Manage your teams, projects and tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} h-full w-full antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
