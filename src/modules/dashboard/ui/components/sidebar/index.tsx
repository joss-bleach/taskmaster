import { Logo } from "@/components/logo";
import { SidebarLinks } from "./sidebar-links";

export const Sidebar = () => {
  return (
    <aside className="bg-background flex h-full w-[80px] flex-col items-center py-6">
      <Logo />
      <SidebarLinks />
    </aside>
  );
};
