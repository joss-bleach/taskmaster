"use client";
import { useSelectOrganization } from "../../hooks/use-select-organization";

import { ResponsiveModal } from "@/components/responsive-modal";
import { SelectOrganization } from "./select-organization";

export const SelecteOrganizationModal = () => {
  const { isOpen, setIsOpen } = useSelectOrganization();

  return (
    <ResponsiveModal
      title="Select organization"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectOrganization />
    </ResponsiveModal>
  );
};
