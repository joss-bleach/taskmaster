import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 pt-4">
      <div className="hidden flex-col lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">See all projects and tasks</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </header>
  );
};
