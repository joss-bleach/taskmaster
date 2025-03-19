"use client";

import { useCreateOrganization } from "../../hooks/use-create-organization";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateOrganizationForm } from "./create-organizaton-form";

interface CreateOrganizationModalProps {
  isInitialModal?: boolean;
}

export const CreateOrganizationModal = ({
  isInitialModal = false,
}: CreateOrganizationModalProps) => {
  const { isOpen, close } = useCreateOrganization();
  return (
    <Dialog
      open={isInitialModal ? true : isOpen}
      onOpenChange={isInitialModal ? () => {} : close}
    >
      <DialogContent className="bg-background border-border border shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Create an organization</DialogTitle>
        </DialogHeader>
        <CreateOrganizationForm />
      </DialogContent>
    </Dialog>
  );
};
