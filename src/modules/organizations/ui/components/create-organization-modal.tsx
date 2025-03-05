"use client";
import { useCreateOrganization } from "../../hooks/use-create-organization";

import { ResponsiveModal } from "@/components/responsive-modal";
import { CreateOrganizationForm } from "./create-organization-form";

export const CreateOrganizationModal = ({
  isInitialModal,
}: {
  isInitialModal: boolean;
}) => {
  const { isOpen, setIsOpen } = useCreateOrganization();

  return (
    <ResponsiveModal
      title="Create organization"
      open={isInitialModal ? true : isOpen}
      onOpenChange={isInitialModal ? () => {} : setIsOpen}
    >
      <CreateOrganizationForm />
    </ResponsiveModal>
  );
};
