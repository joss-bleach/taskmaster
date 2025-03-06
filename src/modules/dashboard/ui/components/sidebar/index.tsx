import { Logo } from "@/components/logo";
import { SidebarLinks } from "./sidebar-links";
import { SelectOrganizationButton } from "@/modules/organizations/ui/components/select-organization-button";

export const Sidebar = () => {
  return (
    <aside className="bg-background flex h-full w-[80px] flex-col items-center py-6">
      <Logo />
      <div className="flex-1">
        <SidebarLinks />
      </div>
      <SelectOrganizationButton />
    </aside>
  );
};
