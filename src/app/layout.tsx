import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskmaster",
  description: "Manage your tasks",
};

// Providers
import { QueryProvider } from "@/providers/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} min-h-screen antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
